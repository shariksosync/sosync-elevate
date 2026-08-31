import type { Project, Service, SiteSettings, TeamMember, Testimonial } from "@/types";

export const COMPANY = {
  name: "SOSync AI Tech IT Solutions",
  brand: "SOSync AI Tech",
  tagline: "Innovate. Integrate. Elevate.",
  subTagline: "Digital Solutions for a Smarter Tomorrow",
  phonePrimary: "+91 90210 45678",
  phoneSecondary: "+91 90210 45679",
  email: "hello@sosyncaitech.in",
  address: "Ganga Trueno Business Park, Kharadi, Pune, Maharashtra 411014",
  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
  mapEmbed:
    "https://www.google.com/maps?q=Kharadi,+Pune,+Maharashtra+411014&output=embed",
  demoCredentials: { email: "admin@sosyncaitech.in", password: "admin123" },
};

export const DEFAULT_SETTINGS: SiteSettings = {
  phonePrimary: COMPANY.phonePrimary,
  phoneSecondary: COMPANY.phoneSecondary,
  email: COMPANY.email,
  address: COMPANY.address,
  hours: COMPANY.hours,
  announcementText:
    "6 Months FREE Technical Support on every project · Book a ₹1 Demo Consultation today",
  announcementEnabled: true,
  maintenanceMode: false,
};

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SERVICES: Service[] = [
  {
    id: "svc_web",
    slug: "website-development",
    title: "Website Development",
    icon: "Globe",
    short: "Conversion-first websites, landing pages and headless storefronts.",
    description:
      "High-performance marketing sites, corporate portals and e-commerce storefronts engineered for speed, SEO and measurable conversion.",
    features: [
      "React / Next.js SSR builds",
      "Core Web Vitals above 90",
      "Technical SEO & schema markup",
      "Razorpay & payment gateway integration",
      "CMS-driven content editing",
    ],
    image: img("photo-1467232004584-a241de8bcf5d"),
    startingAt: "₹24,999",
  },
  {
    id: "svc_software",
    slug: "custom-software-erp",
    title: "Custom Software & ERP",
    icon: "Boxes",
    short: "ERP, CRM and internal tools tailored to your operating model.",
    description:
      "We map your workflows and ship modular ERP, CRM, billing and inventory platforms with role-based access and analytics baked in.",
    features: [
      "Modular ERP & CRM architecture",
      "Role-based access control",
      "Inventory, billing & GST modules",
      "PowerBI / analytics dashboards",
      "API-first integrations",
    ],
    image: img("photo-1551288049-bebda4e38f71"),
    startingAt: "₹1,49,000",
  },
  {
    id: "svc_it",
    slug: "enterprise-it",
    title: "Enterprise IT & Tech Services",
    icon: "ServerCog",
    short: "Cloud, DevOps, security hardening and managed infrastructure.",
    description:
      "Cloud migration, container orchestration, monitoring and 24×7 infrastructure hygiene for teams that cannot afford downtime.",
    features: [
      "AWS / Azure cloud migration",
      "Docker & Kubernetes pipelines",
      "CI/CD automation",
      "Uptime monitoring & alerting",
      "Security audits & hardening",
    ],
    image: img("photo-1558494949-ef010cbdcc31"),
    startingAt: "₹39,999",
  },
  {
    id: "svc_growth",
    slug: "growth-digital-marketing",
    title: "Growth & Digital Marketing",
    icon: "TrendingUp",
    short: "Performance marketing engineered around pipeline, not vanity metrics.",
    description:
      "Meta and Google performance campaigns, SEO and lifecycle marketing run by specialists with transparent reporting.",
    features: [
      "Meta & Google Ads management",
      "SEO and content strategy",
      "Landing page CRO testing",
      "WhatsApp & email automation",
      "Weekly performance reporting",
    ],
    image: img("photo-1460925895917-afdab827c52f"),
    startingAt: "₹19,999/mo",
  },
  {
    id: "svc_design",
    slug: "graphic-design-branding",
    title: "Graphic Design & Creative Branding",
    icon: "Palette",
    short: "Identity systems, packaging and campaign creatives that carry weight.",
    description:
      "Logo systems, brand guidelines, packaging and social creative built to keep every touchpoint unmistakably yours.",
    features: [
      "Logo & identity systems",
      "Brand guideline documents",
      "Packaging & print design",
      "Social campaign creatives",
      "Motion graphics & reels",
    ],
    image: img("photo-1561070791-2526d30994b5"),
    startingAt: "₹14,999",
  },
  {
    id: "svc_ai",
    slug: "ai-intelligent-automation",
    title: "AI Services & Intelligent Automation",
    icon: "BrainCircuit",
    short: "RAG assistants, document intelligence and workflow automation.",
    description:
      "Production AI: retrieval-augmented assistants, computer vision pipelines and automation that removes manual busywork.",
    features: [
      "RAG chat assistants on your data",
      "Document & invoice intelligence",
      "Computer vision QC pipelines",
      "Voice & NLP automation",
      "Workflow bots & integrations",
    ],
    image: img("photo-1677442136019-21780ecad995"),
    startingAt: "₹89,000",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "prj_morpankh",
    title: "Morpankh Saree",
    client: "Morpankh Saree, Kolhapur",
    category: "E-Commerce",
    summary: "Boutique saree storefront with catalog, wishlist and Razorpay checkout.",
    challenge:
      "A traditional saree retailer selling only over WhatsApp with no catalog, inventory visibility or online payments.",
    solution:
      "Headless storefront with variant-level inventory, wishlist, COD + Razorpay checkout and a self-serve admin catalog manager.",
    results: ["3.4× online orders in 90 days", "42% repeat customer rate", "Checkout drop-off cut by 28%"],
    stack: ["React", "Node.js", "MongoDB", "Razorpay"],
    image: img("photo-1610030469983-98e550d6193c"),
    featured: true,
  },
  {
    id: "prj_spart",
    title: "SP Art Hubs",
    client: "SP Art Hubs",
    category: "Portals",
    summary: "Gallery portal with artist profiles, commission enquiries and exhibitions.",
    challenge: "Artists had no digital gallery and enquiries were lost across personal inboxes.",
    solution:
      "Curated gallery portal with artist microsites, enquiry routing and an exhibition scheduler managed from a single admin.",
    results: ["120+ artworks catalogued", "Enquiry response time under 2 hours", "18 exhibitions managed online"],
    stack: ["Next.js", "TypeScript", "Cloudinary"],
    image: img("photo-1541961017774-22349e4a1262"),
    featured: true,
  },
  {
    id: "prj_suraj",
    title: "Suraj Naturo Dry Fruits",
    client: "Suraj Naturo Foods",
    category: "E-Commerce",
    summary: "D2C dry fruits store with subscription packs and logistics sync.",
    challenge: "Manual order books and no way to run repeat subscription packs at scale.",
    solution:
      "Subscription-ready store with weight-based pricing, courier API sync, GST invoicing and abandoned-cart automation.",
    results: ["₹18L annualised online GMV", "31% orders on subscription", "Fulfilment errors down 90%"],
    stack: ["React", "Node.js", "PostgreSQL", "Razorpay"],
    image: img("photo-1508061253366-f7da158b6d46"),
    featured: true,
  },
  {
    id: "prj_sonai",
    title: "Sonai Residential World School",
    client: "Sonai Residential World School",
    category: "Portals",
    summary: "Admissions portal with fee tracking, notices and parent login.",
    challenge: "Paper admissions and phone-based fee follow-ups across 1,400+ students.",
    solution:
      "Admissions and parent portal with document upload, fee ledgers, notice broadcasts and role-based staff access.",
    results: ["1,400+ students onboarded", "Admission cycle shortened by 3 weeks", "Fee collection visibility in real time"],
    stack: ["React", "Python", "PostgreSQL"],
    image: img("photo-1523050854058-8df90110c9f1"),
    featured: true,
  },
  {
    id: "prj_karyon",
    title: "Karyon College",
    client: "Karyon College",
    category: "ERP / Software",
    summary: "Campus ERP covering attendance, examinations and staff payroll.",
    challenge: "Six disconnected spreadsheets driving attendance, exams and payroll.",
    solution:
      "Unified campus ERP with biometric attendance sync, exam scheduling, result publishing and payroll automation.",
    results: ["Reporting time cut from days to minutes", "Payroll cycle automated", "Single source of academic truth"],
    stack: ["Next.js", "Node.js", "PowerBI", "Docker"],
    image: img("photo-1562774053-701939374585"),
    featured: true,
  },
  {
    id: "prj_sonaigroup",
    title: "Sona I Group of Institutes",
    client: "Sona I Group of Institutes",
    category: "ERP / Software",
    summary: "Multi-campus ERP with AI enquiry assistant and analytics.",
    challenge: "Four campuses with independent systems and no consolidated leadership reporting.",
    solution:
      "Multi-tenant ERP with campus-level roles, consolidated dashboards and an AI assistant handling admission FAQs.",
    results: ["4 campuses unified", "Admission enquiries answered 24×7", "Leadership dashboards in one view"],
    stack: ["React", "Python", "AI/ML", "Kubernetes"],
    image: img("photo-1498243691581-b145c3f54a5a"),
    featured: false,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "tm_1",
    name: "Shashant Shekhar",
    role: "Founder & Project Management",
    focus: "Delivery governance, client architecture reviews",
    photo: img("photo-1506794778202-cad84cf45f1d", 600),
    group: "leadership",
  },
  {
    id: "tm_2",
    name: "Omkar Bachanatti",
    role: "Founder & Operations",
    focus: "Delivery operations, vendor & cloud contracts",
    photo: img("photo-1519085360753-af0119f7cbe7", 600),
    group: "leadership",
  },
  {
    id: "tm_3",
    name: "Sanika Chougule",
    role: "Founder & Human Resources",
    focus: "Talent, onboarding and client success",
    photo: img("photo-1494790108377-be9c29b29330", 600),
    group: "leadership",
  },
  {
    id: "tm_4",
    name: "Vivek Dhumal",
    role: "Head of Digital Marketing",
    focus: "SEO, performance funnels, analytics",
    photo: img("photo-1472099645785-5658abf4ff4e", 600),
    group: "leadership",
  },
  {
    id: "tm_5",
    name: "Aslam Pathan",
    role: "Meta Ads Specialist",
    focus: "Paid social, creative testing, retargeting",
    photo: img("photo-1500648767791-00dcc994a43e", 600),
    group: "leadership",
  },
  {
    id: "tm_6",
    name: "Tridev Sharma",
    role: "Senior Full Stack Engineer",
    focus: "React, Node.js, distributed systems",
    photo: img("photo-1531427186611-ecfd6d936c79", 600),
    group: "squad",
  },
  {
    id: "tm_7",
    name: "Sharik Ahmed",
    role: "Senior Full Stack Engineer",
    focus: "TypeScript, Next.js, design systems",
    photo: img("photo-1517841905240-472988babdf9", 600),
    group: "squad",
  },
  {
    id: "tm_8",
    name: "Vicky Kumar",
    role: "Senior Backend Engineer",
    focus: "Python, APIs, PostgreSQL performance",
    photo: img("photo-1534528741775-53994a69daeb", 600),
    group: "squad",
  },
  {
    id: "tm_9",
    name: "Ashish Ranjan",
    role: "Senior DevOps Engineer",
    focus: "AWS, Docker, Kubernetes, CI/CD",
    photo: img("photo-1524504388940-b1c1722653e1", 600),
    group: "squad",
  },
  {
    id: "tm_10",
    name: "Anurag Kumar",
    role: "Senior AI Engineer",
    focus: "RAG, NLP, computer vision pipelines",
    photo: img("photo-1607346256330-dee7af15f7c5", 600),
    group: "squad",
  },
];

export const TECH_STACK = [
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Python", group: "Backend" },
  { name: "AWS", group: "Cloud" },
  { name: "Docker", group: "Cloud" },
  { name: "Kubernetes", group: "Cloud" },
  { name: "AI/ML", group: "Intelligence" },
  { name: "NLP", group: "Intelligence" },
  { name: "RAG", group: "Intelligence" },
  { name: "Computer Vision", group: "Intelligence" },
  { name: "PowerBI", group: "Data" },
  { name: "Razorpay", group: "Payments" },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Requirement Analysis", detail: "Discovery workshops, scope sheet and success metrics signed off." },
  { step: "02", title: "Architecture Planning", detail: "Data model, integrations, cloud topology and security plan." },
  { step: "03", title: "UI/UX Prototype", detail: "Clickable Figma prototype reviewed before a line of code ships." },
  { step: "04", title: "Development Phase", detail: "Weekly sprint builds on a staging URL you can test anytime." },
  { step: "05", title: "QA Testing", detail: "Functional, cross-device, load and security regression passes." },
  { step: "06", title: "Client Demo", detail: "Walkthrough of every module with change requests logged live." },
  { step: "07", title: "Cloud Deployment", detail: "Production release with SSL, backups, monitoring and alerts." },
  { step: "08", title: "Admin Handover", detail: "Training session, documentation and full source code transfer." },
  { step: "09", title: "6 Months Free Support", detail: "Warranty window covering fixes, uptime checks and guidance." },
];

export const SEED_TESTIMONIALS: Testimonial[] = [
  {
    id: "ts_1",
    name: "Rohit Deshmukh",
    company: "Morpankh Saree",
    rating: 5,
    review:
      "Our storefront went live in under three weeks and orders tripled in the first quarter. The free support window actually got used — every ticket answered same day.",
    approved: true,
    createdAt: new Date(Date.now() - 86400000 * 40).toISOString(),
  },
  {
    id: "ts_2",
    name: "Dr. Priya Kulkarni",
    company: "Sonai Residential World School",
    rating: 5,
    review:
      "The admissions portal removed weeks of paperwork. Parents log in, upload documents and pay fees without a single phone call to the office.",
    approved: true,
    createdAt: new Date(Date.now() - 86400000 * 28).toISOString(),
  },
  {
    id: "ts_3",
    name: "Amit Jain",
    company: "Suraj Naturo Foods",
    rating: 4,
    review:
      "Subscription packs were exactly what we needed. Clean handover with full source code ownership, no lock-in, no surprises.",
    approved: true,
    createdAt: new Date(Date.now() - 86400000 * 15).toISOString(),
  },
  {
    id: "ts_4",
    name: "Sneha Patil",
    company: "Karyon College",
    rating: 5,
    review:
      "Campus ERP replaced six spreadsheets. Attendance and payroll now close in minutes instead of days.",
    approved: false,
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
];

export const HERO_SLIDES = [
  {
    badge: "AI-Powered Engineering",
    title: "Build Smarter. Automate Faster. Scale Further.",
    copy: "Custom software, AI automation and enterprise IT delivered by a senior-only squad out of Pune — with 6 months of free support on every build.",
    image: img("photo-1518770660439-4636190af475", 1600),
  },
  {
    badge: "Enterprise ERP & Software",
    title: "Operations Software That Fits Your Business Exactly.",
    copy: "Modular ERP, CRM and internal tools mapped to your real workflows. Role-based, audit-ready and yours — 100% source code ownership.",
    image: img("photo-1551434678-e076c223a692", 1600),
  },
  {
    badge: "Growth Engineering",
    title: "Websites and Campaigns Measured in Pipeline.",
    copy: "Conversion-first websites, performance marketing and analytics that report revenue impact, not impressions.",
    image: img("photo-1551288049-bebda4e38f71", 1600),
  },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Senior Engineers" },
  { value: 12, suffix: "+", label: "Countries Served" },
];

export const FAQS = [
  {
    q: "What does the 6 months free technical support include?",
    a: "Bug fixes on delivered scope, server troubleshooting, uptime monitoring, minor content updates and business-hours support over WhatsApp and email. Worth ₹25,000+ and included on every project.",
  },
  {
    q: "Do we own the source code?",
    a: "Yes. 100% IP and source code ownership transfers to you at handover, along with repository access, documentation and deployment credentials.",
  },
  {
    q: "How fast can a project go live?",
    a: "Websites and landing pages typically ship in 1–3 week sprints. ERP and AI platforms are phased, with a usable module released every sprint.",
  },
  {
    q: "What is the ₹1 demo consultation?",
    a: "A token-priced 45-minute session where we review your requirement, propose an architecture and share an indicative scope and timeline. No obligation to proceed.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes — we currently serve clients across 12 countries with overlapping working hours and async sprint reporting.",
  },
];
