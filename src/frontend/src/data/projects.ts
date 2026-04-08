import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "luminary-dashboard",
    title: "Luminary Analytics Dashboard",
    category: "Web Design",
    description:
      "A comprehensive analytics platform with real-time data visualization, customizable widgets, and AI-powered insights for enterprise teams.",
    image: "/assets/generated/project-luminary.jpg",
    client: "Luminary Technologies",
    tags: ["UI/UX", "Dashboard", "Data Viz", "Figma"],
    featured: true,
    year: 2024,
    results: [
      { metric: "User Engagement", value: "+142%" },
      { metric: "Task Completion", value: "+89%" },
      { metric: "Load Time", value: "-60%" },
    ],
    caseStudy:
      "Luminary needed to consolidate fragmented analytics tools into one intuitive platform. We designed a modular dashboard system with drag-and-drop widgets, dark/light themes, and real-time data streams — reducing analyst workflow time by half.",
  },
  {
    id: "nexus-ecommerce",
    title: "Nexus Commerce Platform",
    category: "Web Design",
    description:
      "End-to-end e-commerce redesign for a fashion retailer, focusing on conversion optimization, personalized recommendations, and seamless checkout.",
    image: "/assets/generated/project-nexus.jpg",
    client: "Nexus Fashion Group",
    tags: ["E-Commerce", "Conversion", "UX Research", "Prototyping"],
    featured: true,
    year: 2024,
    results: [
      { metric: "Conversion Rate", value: "+67%" },
      { metric: "Cart Abandonment", value: "-41%" },
      { metric: "Average Order Value", value: "+28%" },
    ],
    caseStudy:
      "A complete overhaul of Nexus Fashion's digital storefront — from discovery to checkout. Our research-led approach uncovered key friction points, and we redesigned the entire purchase journey with A/B tested components.",
  },
  {
    id: "orbit-saas",
    title: "Orbit SaaS Marketing Site",
    category: "Web Design",
    description:
      "High-converting marketing website for a B2B SaaS startup with animated illustrations, interactive demos, and a compelling pricing page.",
    image: "/assets/generated/project-orbit.jpg",
    client: "Orbit Software",
    tags: ["Marketing", "SaaS", "Animation", "Webflow"],
    featured: false,
    year: 2023,
  },
  {
    id: "verdant-portal",
    title: "Verdant Client Portal",
    category: "Web Design",
    description:
      "Secure client-facing portal for a sustainability consultancy with document management, progress tracking, and interactive reporting.",
    image: "/assets/generated/project-verdant.jpg",
    client: "Verdant Consulting",
    tags: ["Portal", "B2B", "Accessibility", "Design System"],
    featured: false,
    year: 2023,
  },
  {
    id: "pulse-fitness-app",
    title: "Pulse Fitness Tracker",
    category: "Mobile Apps",
    description:
      "A holistic fitness app with AI workout coaching, nutrition tracking, wearable sync, and social challenges for iOS and Android.",
    image: "/assets/generated/project-pulse.jpg",
    client: "Pulse Health Inc.",
    tags: ["iOS", "Android", "Health", "AI Coach"],
    featured: true,
    year: 2024,
    results: [
      { metric: "Daily Active Users", value: "+210%" },
      { metric: "Session Duration", value: "+5.2 min" },
      { metric: "App Store Rating", value: "4.8★" },
    ],
    caseStudy:
      "Pulse needed to differentiate in a crowded fitness market. We crafted an app experience centered on personal progress storytelling, seamless Apple Watch integration, and a social layer that drives 3x higher retention.",
  },
  {
    id: "velo-delivery",
    title: "Velo Last-Mile Delivery",
    category: "Mobile Apps",
    description:
      "Real-time package tracking and driver management app for an urban delivery startup with live maps, route optimization, and push notifications.",
    image: "/assets/generated/project-velo.jpg",
    client: "Velo Logistics",
    tags: ["Logistics", "Maps", "Real-time", "React Native"],
    featured: false,
    year: 2023,
  },
  {
    id: "folio-finance",
    title: "Folio Investment App",
    category: "Mobile Apps",
    description:
      "Personal investment portfolio app with market insights, automated rebalancing suggestions, and educational onboarding for first-time investors.",
    image: "/assets/generated/project-folio.jpg",
    client: "Folio Financial",
    tags: ["FinTech", "iOS", "Data Viz", "Onboarding"],
    featured: false,
    year: 2024,
  },
  {
    id: "echo-brand-identity",
    title: "Echo Brand Identity System",
    category: "Branding",
    description:
      "Complete brand identity for a creative audio platform — wordmark, iconography, motion guidelines, and a comprehensive design system.",
    image: "/assets/generated/project-echo.jpg",
    client: "Echo Studio",
    tags: ["Logo Design", "Brand System", "Motion", "Typography"],
    featured: false,
    year: 2024,
  },
  {
    id: "solara-rebrand",
    title: "Solara Energy Rebrand",
    category: "Branding",
    description:
      "Strategic rebrand for a clean energy company transitioning from B2B to consumer market — new positioning, visual identity, and brand voice.",
    image: "/assets/generated/project-solara.jpg",
    client: "Solara Energy",
    tags: ["Rebrand", "Strategy", "CleanTech", "Identity"],
    featured: false,
    year: 2023,
  },
  {
    id: "nova-packaging",
    title: "Nova Cosmetics Packaging",
    category: "Branding",
    description:
      "Luxury packaging design and brand refresh for a premium skincare line targeting Gen Z consumers across digital and physical touchpoints.",
    image: "/assets/generated/project-nova.jpg",
    client: "Nova Cosmetics",
    tags: ["Packaging", "Luxury", "Print", "Brand Extension"],
    featured: false,
    year: 2024,
  },
  {
    id: "apex-growth",
    title: "Apex Growth Campaign",
    category: "Digital Marketing",
    description:
      "Full-funnel digital marketing campaign for a SaaS product launch including paid ads, SEO content strategy, and email automation sequences.",
    image: "/assets/generated/project-apex.jpg",
    client: "Apex Software Solutions",
    tags: ["Paid Ads", "SEO", "Email", "Funnel Strategy"],
    featured: false,
    year: 2024,
  },
  {
    id: "bloom-social",
    title: "Bloom Social Media Strategy",
    category: "Digital Marketing",
    description:
      "Social media transformation for a D2C wellness brand — content calendar, influencer partnerships, community management, and analytics.",
    image: "/assets/generated/project-bloom.jpg",
    client: "Bloom Wellness",
    tags: ["Social Media", "Content", "Influencer", "Community"],
    featured: false,
    year: 2023,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Years of Experience", value: "5+" },
  { label: "Team Members", value: "8+" },
];
