# SOSync Elevate

MASTER CONTINUATION PROMPT — SOSync AI Tech IT Solutions
Repository: https://github.com/shariksosync/sosync-showcase

You are a Principal Full-Stack React Engineer, UI/UX Designer, and Creative Director. 

You are continuing the build of the production-quality, dynamic presentation website and Admin Portal for:
> SOSync AI Tech IT Solutions (Brand: SOSync AI Tech)
> Tagline: "Innovate. Integrate. Elevate. — Digital Solutions for a Smarter Tomorrow"

---

### 📌 WHAT IS ALREADY COMPLETED IN THIS CODEBASE:
- Framer Motion, Lucide React, and Tailwind CSS installed.
- Logo configured in the Navbar & Footer.
- Data & Types Layer: `src/types/index.ts`, `src/lib/storage.ts` (localStorage helper), `src/lib/company.ts` (source of truth config), and `src/lib/validators.ts`.
- Mock datasets initialized: 6 services, 6 portfolio projects, leadership & squad, seeded enquiries/callbacks.
- `SiteProvider` state context in `__root.tsx` with modal orchestration and toast alerts.
- Global Layout: Announcement Bar, Sticky Glass Navbar, and Comprehensive Footer with discrete Admin Portal link (`/admin/login`).

---

### 🎨 REFINED BRAND COLOR SYSTEM (MATCHED TO OUR 3D LOGO)
Update `src/styles.css` and all component styles to follow the **70-20-10 Rule**:
- **Canvas (70%)**: Deep Carbon Obsidian `#0B0F17` (for dark sections/hero) and Clean Ice Slate `#F8FAFC` / Pure White `#FFFFFF` (for light cards/reading sections).
- **Structure & Text (20%)**: Logo Matte Charcoal `#1A1F2C` (dominant text, high-contrast badges, cards, table headers).
- **Logo Solar Orange (10% High-Impact Accent)**: Core logo orange `#FF6A00` and amber gradient (`linear-gradient(135deg, #FFA024 0%, #FF6A00 100%)`). 
  - *Strictly used for primary CTA buttons ("Book ₹1 Demo", "Enquire Now"), active slider dots, AI chip glow badges, and the 6 Months Free Support badge. Do NOT overuse orange across every border/background.*
- **Ambient AI Accent**: Subtle cyan/blue ambient glow (`rgba(6, 182, 212, 0.15)` and `rgba(255, 106, 0, 0.15)`).

---

### 🚫 STRICT CONTENT EXCLUSIONS (MANDATORY)
- **NO E-Learning, NO courses, NO LMS, NO training programs, NO bootcamps, NO internships, NO student batches/testimonials.**
- 100% focused on **B2B & B2C Client Services, Custom Software, Web Development, Enterprise IT, AI Automation, and Digital Marketing**.

---

### 🎯 REMAINING WORK TO BUILD NOW (COMPLETE EVERYTHING):

#### 1. HOMEPAGE SECTIONS (`src/pages/Home.tsx` / Route `/`)
Build and connect all sections in this exact order:
1. **Hero Section (`HeroSlider.tsx`)**:
   - 3 rotating visual slides with unique Unsplash tech images, animated badges, bold headlines ("Build Smarter. Automate Faster. Scale Further"), primary CTA ("Book ₹1 Demo" opens modal), secondary CTA ("Explore Services"), and autoplay with pause-on-hover.
2. **Trust & Metrics Counter (`StatsSection.tsx`)**:
   - `50+ Projects Delivered`, `50+ Happy Clients`, `8+ Senior Engineers`, `12+ Countries Served` (animated counting).
3. **Core Services Grid (`ServicesSection.tsx`)**:
   - Tabbed filter across the **6 Core Divisions**: Website Development, Custom Software & ERP, Enterprise IT & Tech Services, Growth & Digital Marketing, Graphic Design & Creative Branding, AI Services & Intelligent Automation.
   - Each card displays: icon, title, description, key feature bullet points, and an "Enquire Now" button (auto-populating the enquiry modal).
4. **Value Proposition & 6 Months Free Support Card (`ValueProps.tsx`)**:
   - Highlight card: **6 Months FREE Technical Support (Worth ₹25,000+)** covering bug fixes, server troubleshooting, uptime monitoring, and business-hours support.
   - Trust points: **100% IP & Source Code Ownership** and **Rapid 1–3 Weeks Sprint Delivery**.
5. **Technology & Capabilities Matrix (`TechStack.tsx`)**:
   - Display chips for React, Next.js, Node.js, Python, TypeScript, AWS, Docker, Kubernetes, AI/ML, NLP, RAG, Computer Vision, PowerBI, Razorpay.
6. **Portfolio Showcase Grid (`PortfolioSection.tsx`)**:
   - Category filter pills: `All`, `E-Commerce`, `ERP / Software`, `Portals`.
   - Cards with unique images: *Morpankh Saree*, *SP Art Hubs*, *Suraj Naturo Dry Fruits*, *Sonai Residential World School*, *Karyon College*, *Sona I Group of Institutes*.
   - Includes "View Case Study" modal triggers.
7. **9-Step Delivery Workflow Timeline (`ProcessTimeline.tsx`)**:
   - Steps 01 to 09: Requirement Analysis → Architecture Planning → UI/UX Prototype → Development Phase → QA Testing → Client Demo → Cloud Deployment → Admin Handover → 6 Months Free Support Warranty.
8. **Leadership & Senior Full Stack Squad (`TeamSection.tsx`)**:
   - Leadership: Shashant Shekhar (Founder & PM), Omkar Bachanatti (Founder & Operations), Sanika Chougule (Founder & HR), Vivek Dhumal (Digital Marketing), Aslam Pathan (Meta Ads).
   - Senior Squad: Tridev Sharma, Sharik Ahmed, Vicky Kumar, Ashish Ranjan, Anurag Kumar.
   - Unique portraits for each person (no duplicate photos).
9. **Dynamic Client Testimonials Carousel (`Testimonials.tsx`)**:
   - Reads approved reviews from localStorage (`sosync_testimonials`).
10. **Refer & Earn CTA Banner (`ReferralCTA.tsx`)**:
    - "Refer a client & earn 10% commission" button opening the referral modal.
11. **Final High-Impact Conversion CTA (`FinalCTA.tsx`)**.

---

#### 2. INTERACTIVE MODALS & FLOATING WIDGETS
Implement all modals using `SiteProvider` / state orchestration:
1. **`DemoBookingModal.tsx`**: Book ₹1 Demo Consultation with Name, Phone, Email, Service, Preferred Date/Time, Notes. Saves to `sosync_demo_bookings` in localStorage.
2. **`ServiceEnquiryModal.tsx`**: Auto-populates selected service name, collects project details & budget, saves to `sosync_enquiries`.
3. **`FloatingCallbackButton.tsx`**: Bottom-right floating widget with 20-second callback request form (Name, Phone). Saves to `sosync_callbacks`.
4. **`ReferralModal.tsx`**: Generates unique `SOSYNC-XXXXXX` code and saves record.
5. **`FeedbackModal.tsx`**: Allows users to submit star rating (1–5) and review, saved as "Pending Approval".
6. **`AIChatbot.tsx` (`SOSync AI Assistant`)**: Intelligent mock AI chat widget answering company questions, services, pricing, IP ownership, and quick action buttons. Stacks cleanly with the callback button.

---

#### 3. SECONDARY PUBLIC PAGES
- **`/services`**: Full detailed breakdown of all 6 service divisions with feature matrices.
- **`/portfolio`**: Filterable grid of all client case studies.
- **`/contact`**: Interactive contact form, direct phone/email links, Kharadi Pune office address, embedded Google Map, and FAQ accordion.
- **`MaintenanceModeView.tsx`**: Displayed to public users if Maintenance Mode is enabled in Admin Settings.

---

#### 4. COMPLETE PROTECTED ADMIN PORTAL (`/admin`)
- **Admin Login (`/admin/login`)**:
  - Demo login credentials: `admin@sosyncaitech.in` / `admin123`.
  - Authenticates and saves `adminAuthenticated = true` in localStorage.
  - Redirects unauthenticated users away from `/admin/dashboard`.
- **Admin Dashboard Layout (`/admin/dashboard`)**:
  - Topbar with Admin profile, quick stats, and Logout button.
  - Responsive Sidebar with 6 modules:
    1. **Dashboard Overview**: Dynamic metric cards for Total Enquiries, Pending Callbacks, Demo Bookings, Active Projects, and Average Rating.
    2. **Service Enquiries Manager**: Table with search, category filters, and status toggles (`Pending`, `Contacted`, `In Progress`, `Closed`).
    3. **Callback Requests Manager**: List of callback phone numbers with one-click status update (`Pending` → `Called`).
    4. **Demo Bookings Manager**: View all ₹1 demo consultation requests with date/time and client requirements.
    5. **Portfolio Project Manager**: Add new project, edit, delete, and toggle "Featured" status. Live updates public portfolio.
    6. **Client Feedback & Testimonials**: Approve or hide customer reviews. Only approved reviews appear on the public homepage.
    7. **Website Settings Manager**: Edit company phone numbers, email, physical address, operating hours, announcement banner text/toggle, and maintenance mode toggle. Persists immediately.

---

### 🚀 EXECUTION INSTRUCTION:
Build all remaining public routes, sections, modals, chatbot, and the complete `/admin` dashboard now. Ensure all interactions save to `localStorage`, navigation is smooth, design is fully mobile-responsive, and all image URLs are unique Unsplash photos.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/da3dd168-a128-4e0a-941f-cc6fa1b742ee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
