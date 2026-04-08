export type ProjectCategory =
  | "Web Design"
  | "Mobile Apps"
  | "Branding"
  | "Digital Marketing";

export interface ProjectResult {
  metric: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  client: string;
  tags: string[];
  featured: boolean;
  results?: ProjectResult[];
  caseStudy?: string;
  year?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
