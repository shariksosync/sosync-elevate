import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";

import {
  DEFAULT_SETTINGS,
  PROJECTS,
  SEED_TESTIMONIALS,
  SERVICES,
  TEAM,
} from "@/lib/company";
import { KEYS, read, referralCode, uid, write } from "@/lib/storage";
import type {
  Callback,
  CallbackStatus,
  DemoBooking,
  Enquiry,
  EnquiryStatus,
  Project,
  Referral,
  Service,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "@/types";

type ModalKind = "demo" | "enquiry" | "referral" | "feedback" | "caseStudy" | null;

const seedEnquiries: Enquiry[] = [
  {
    id: "enq_seed1",
    name: "Nikhil Rane",
    email: "nikhil@rakshaindustries.in",
    phone: "+91 98220 11234",
    service: "Custom Software & ERP",
    budget: "₹1L – ₹3L",
    details: "Need an inventory + dispatch ERP for two warehouses with GST invoicing.",
    status: "Pending",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "enq_seed2",
    name: "Meera Shah",
    email: "meera@bloomcosmetics.co",
    phone: "+91 99870 55231",
    service: "Website Development",
    budget: "₹25K – ₹75K",
    details: "D2C cosmetics storefront with Razorpay and Instagram feed integration.",
    status: "Contacted",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "enq_seed3",
    name: "Farhan Qureshi",
    email: "farhan@lognext.ae",
    phone: "+971 50 447 8890",
    service: "AI Services & Intelligent Automation",
    budget: "₹3L+",
    details: "RAG assistant over 12,000 logistics SOP documents for support agents.",
    status: "In Progress",
    createdAt: new Date(Date.now() - 86400000 * 9).toISOString(),
  },
];

const seedCallbacks: Callback[] = [
  {
    id: "cb_seed1",
    name: "Ajay Pawar",
    phone: "+91 90284 77110",
    status: "Pending",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: "cb_seed2",
    name: "Kavita Menon",
    phone: "+91 98456 22019",
    status: "Called",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
];

const seedDemos: DemoBooking[] = [
  {
    id: "dm_seed1",
    name: "Sagar Bhosale",
    email: "sagar@vedantretail.in",
    phone: "+91 97654 33210",
    service: "Custom Software & ERP",
    date: new Date(Date.now() + 86400000 * 2).toISOString().slice(0, 10),
    time: "11:30",
    notes: "Wants to see the billing and stock modules in the demo.",
    status: "Pending",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

interface SiteContextValue {
  services: Service[];
  team: TeamMember[];
  projects: Project[];
  enquiries: Enquiry[];
  callbacks: Callback[];
  demos: DemoBooking[];
  referrals: Referral[];
  testimonials: Testimonial[];
  settings: SiteSettings;
  hydrated: boolean;
  authenticated: boolean;
  modal: ModalKind;
  enquiryService: string;
  activeProject: Project | null;
  openDemo: () => void;
  openEnquiry: (service?: string) => void;
  openReferral: () => void;
  openFeedback: () => void;
  openCaseStudy: (project: Project) => void;
  closeModal: () => void;
  addEnquiry: (data: Omit<Enquiry, "id" | "status" | "createdAt">) => void;
  addCallback: (data: Omit<Callback, "id" | "status" | "createdAt">) => void;
  addDemo: (data: Omit<DemoBooking, "id" | "status" | "createdAt">) => void;
  addReferral: (data: Omit<Referral, "id" | "code" | "createdAt">) => string;
  addTestimonial: (data: Omit<Testimonial, "id" | "approved" | "createdAt">) => void;
  setEnquiryStatus: (id: string, status: EnquiryStatus) => void;
  setDemoStatus: (id: string, status: EnquiryStatus) => void;
  setCallbackStatus: (id: string, status: CallbackStatus) => void;
  saveProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  toggleFeatured: (id: string) => void;
  setTestimonialApproval: (id: string, approved: boolean) => void;
  updateSettings: (patch: Partial<SiteSettings>) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(seedEnquiries);
  const [callbacks, setCallbacks] = useState<Callback[]>(seedCallbacks);
  const [demos, setDemos] = useState<DemoBooking[]>(seedDemos);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(SEED_TESTIMONIALS);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [authenticated, setAuthenticated] = useState(false);
  const [modal, setModal] = useState<ModalKind>(null);
  const [enquiryService, setEnquiryService] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    setProjects(read(KEYS.projects, PROJECTS));
    setEnquiries(read(KEYS.enquiries, seedEnquiries));
    setCallbacks(read(KEYS.callbacks, seedCallbacks));
    setDemos(read(KEYS.demos, seedDemos));
    setReferrals(read(KEYS.referrals, []));
    setTestimonials(read(KEYS.testimonials, SEED_TESTIMONIALS));
    setSettings({ ...DEFAULT_SETTINGS, ...read(KEYS.settings, DEFAULT_SETTINGS) });
    setAuthenticated(read<boolean>(KEYS.auth, false) === true);
    setHydrated(true);
  }, []);

  const persist = useCallback(<T,>(key: string, value: T, setter: (v: T) => void) => {
    setter(value);
    write(key, value);
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  const value = useMemo<SiteContextValue>(() => {
    return {
      services: SERVICES,
      team: TEAM,
      projects,
      enquiries,
      callbacks,
      demos,
      referrals,
      testimonials,
      settings,
      hydrated,
      authenticated,
      modal,
      enquiryService,
      activeProject,
      openDemo: () => setModal("demo"),
      openEnquiry: (service = "") => {
        setEnquiryService(service);
        setModal("enquiry");
      },
      openReferral: () => setModal("referral"),
      openFeedback: () => setModal("feedback"),
      openCaseStudy: (project) => {
        setActiveProject(project);
        setModal("caseStudy");
      },
      closeModal,
      addEnquiry: (data) => {
        const record: Enquiry = {
          ...data,
          id: uid("enq"),
          status: "Pending",
          createdAt: new Date().toISOString(),
        };
        persist(KEYS.enquiries, [record, ...enquiries], setEnquiries);
        toast.success("Enquiry received", {
          description: "Our team will reach out within one business day.",
        });
      },
      addCallback: (data) => {
        const record: Callback = {
          ...data,
          id: uid("cb"),
          status: "Pending",
          createdAt: new Date().toISOString(),
        };
        persist(KEYS.callbacks, [record, ...callbacks], setCallbacks);
        toast.success("Callback requested", {
          description: "We will call you back within 20 seconds during business hours.",
        });
      },
      addDemo: (data) => {
        const record: DemoBooking = {
          ...data,
          id: uid("dm"),
          status: "Pending",
          createdAt: new Date().toISOString(),
        };
        persist(KEYS.demos, [record, ...demos], setDemos);
        toast.success("₹1 demo slot booked", {
          description: `Confirmed for ${data.date} at ${data.time}.`,
        });
      },
      addReferral: (data) => {
        const code = referralCode();
        const record: Referral = {
          ...data,
          id: uid("ref"),
          code,
          createdAt: new Date().toISOString(),
        };
        persist(KEYS.referrals, [record, ...referrals], setReferrals);
        toast.success("Referral registered", { description: `Your code is ${code}.` });
        return code;
      },
      addTestimonial: (data) => {
        const record: Testimonial = {
          ...data,
          id: uid("ts"),
          approved: false,
          createdAt: new Date().toISOString(),
        };
        persist(KEYS.testimonials, [record, ...testimonials], setTestimonials);
        toast.success("Thanks for the review", {
          description: "It will appear publicly once approved.",
        });
      },
      setEnquiryStatus: (id, status) =>
        persist(
          KEYS.enquiries,
          enquiries.map((e) => (e.id === id ? { ...e, status } : e)),
          setEnquiries,
        ),
      setDemoStatus: (id, status) =>
        persist(
          KEYS.demos,
          demos.map((d) => (d.id === id ? { ...d, status } : d)),
          setDemos,
        ),
      setCallbackStatus: (id, status) =>
        persist(
          KEYS.callbacks,
          callbacks.map((c) => (c.id === id ? { ...c, status } : c)),
          setCallbacks,
        ),
      saveProject: (project) => {
        const exists = projects.some((p) => p.id === project.id);
        const next = exists
          ? projects.map((p) => (p.id === project.id ? project : p))
          : [project, ...projects];
        persist(KEYS.projects, next, setProjects);
        toast.success(exists ? "Project updated" : "Project added");
      },
      deleteProject: (id) => {
        persist(
          KEYS.projects,
          projects.filter((p) => p.id !== id),
          setProjects,
        );
        toast.success("Project deleted");
      },
      toggleFeatured: (id) =>
        persist(
          KEYS.projects,
          projects.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p)),
          setProjects,
        ),
      setTestimonialApproval: (id, approved) => {
        persist(
          KEYS.testimonials,
          testimonials.map((t) => (t.id === id ? { ...t, approved } : t)),
          setTestimonials,
        );
        toast.success(approved ? "Review approved" : "Review hidden");
      },
      updateSettings: (patch) => {
        const next = { ...settings, ...patch };
        persist(KEYS.settings, next, setSettings);
      },
      login: (email, password) => {
        const ok = email.trim().toLowerCase() === "admin@sosyncaitech.in" && password === "admin123";
        if (ok) {
          setAuthenticated(true);
          write(KEYS.auth, true);
        }
        return ok;
      },
      logout: () => {
        setAuthenticated(false);
        write(KEYS.auth, false);
      },
    };
  }, [
    projects,
    enquiries,
    callbacks,
    demos,
    referrals,
    testimonials,
    settings,
    hydrated,
    authenticated,
    modal,
    enquiryService,
    activeProject,
    persist,
    closeModal,
  ]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
