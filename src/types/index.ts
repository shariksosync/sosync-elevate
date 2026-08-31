export type EnquiryStatus = "Pending" | "Contacted" | "In Progress" | "Closed";
export type CallbackStatus = "Pending" | "Called";

export interface Service {
  id: string;
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  startingAt: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "E-Commerce" | "ERP / Software" | "Portals";
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  image: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  photo: string;
  group: "leadership" | "squad";
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  details: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface Callback {
  id: string;
  name: string;
  phone: string;
  status: CallbackStatus;
  createdAt: string;
}

export interface DemoBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface Referral {
  id: string;
  referrerName: string;
  referrerPhone: string;
  clientName: string;
  clientPhone: string;
  code: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  approved: boolean;
  createdAt: string;
}

export interface SiteSettings {
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  address: string;
  hours: string;
  announcementText: string;
  announcementEnabled: boolean;
  maintenanceMode: boolean;
}
