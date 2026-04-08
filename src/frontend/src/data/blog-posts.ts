export type BlogCategory =
  | "All"
  | "Web Design"
  | "Development"
  | "Digital Marketing"
  | "PHP Training"
  | "Tutorials";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  featured?: boolean;
  gradientFrom: string;
  gradientTo: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "All",
  "Web Design",
  "Development",
  "Digital Marketing",
  "PHP Training",
  "Tutorials",
];

export const CATEGORY_COLORS: Record<Exclude<BlogCategory, "All">, string> = {
  "Web Design": "oklch(0.55 0.22 270 / 0.12)",
  Development: "oklch(0.55 0.20 200 / 0.12)",
  "Digital Marketing": "oklch(0.55 0.22 50 / 0.12)",
  "PHP Training": "oklch(0.55 0.22 150 / 0.12)",
  Tutorials: "oklch(0.55 0.22 320 / 0.12)",
};

export const CATEGORY_TEXT_COLORS: Record<
  Exclude<BlogCategory, "All">,
  string
> = {
  "Web Design": "oklch(0.45 0.22 270)",
  Development: "oklch(0.35 0.20 200)",
  "Digital Marketing": "oklch(0.45 0.22 50)",
  "PHP Training": "oklch(0.35 0.22 150)",
  Tutorials: "oklch(0.45 0.22 320)",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title:
      "10 UI Design Trends Dominating 2026: Glassmorphism, Bento Grids & Beyond",
    excerpt:
      "Explore the hottest visual design trends that agencies are using to create stunning, memorable web experiences. From glassmorphic cards to claymorphism and AI-generated aesthetics.",
    category: "Web Design",
    author: "Priya Sharma",
    authorInitials: "PS",
    date: "Apr 2, 2026",
    readTime: "6 min read",
    featured: true,
    gradientFrom: "oklch(0.55 0.22 270)",
    gradientTo: "oklch(0.65 0.28 300)",
  },
  {
    id: 2,
    title: "How to Build a Pixel-Perfect Landing Page That Converts",
    excerpt:
      "A step-by-step guide to creating high-converting landing pages using modern design principles, whitespace mastery, and strategic CTA placement.",
    category: "Web Design",
    author: "Rahul Verma",
    authorInitials: "RV",
    date: "Mar 28, 2026",
    readTime: "8 min read",
    gradientFrom: "oklch(0.62 0.2 290)",
    gradientTo: "oklch(0.72 0.24 320)",
  },
  {
    id: 3,
    title: "Typography in Web Design: Pairing Fonts for Maximum Impact",
    excerpt:
      "Learn the art of font pairing — how to choose complementary typefaces that reinforce brand personality and improve readability across all devices.",
    category: "Web Design",
    author: "Neha Patel",
    authorInitials: "NP",
    date: "Mar 15, 2026",
    readTime: "5 min read",
    gradientFrom: "oklch(0.7 0.18 310)",
    gradientTo: "oklch(0.78 0.22 330)",
  },
  {
    id: 4,
    title: "React 19 Features Every Developer Should Know in 2026",
    excerpt:
      "Server components, improved Suspense, and the new use() hook — a practical breakdown of React 19's most impactful additions for frontend developers.",
    category: "Development",
    author: "Arjun Mehta",
    authorInitials: "AM",
    date: "Apr 5, 2026",
    readTime: "10 min read",
    gradientFrom: "oklch(0.55 0.20 200)",
    gradientTo: "oklch(0.65 0.22 220)",
  },
  {
    id: 5,
    title: "Building Scalable REST APIs with Node.js and Express",
    excerpt:
      "Best practices for structuring Node.js APIs — from project architecture and middleware patterns to error handling, validation, and deployment strategies.",
    category: "Development",
    author: "Vikram Singh",
    authorInitials: "VS",
    date: "Mar 22, 2026",
    readTime: "12 min read",
    gradientFrom: "oklch(0.5 0.18 195)",
    gradientTo: "oklch(0.62 0.22 210)",
  },
  {
    id: 6,
    title:
      "Understanding TypeScript Generics: From Basics to Advanced Patterns",
    excerpt:
      "Generics are one of TypeScript's most powerful features. This deep dive covers everything from simple type parameters to conditional types and mapped types.",
    category: "Development",
    author: "Divya Krishnan",
    authorInitials: "DK",
    date: "Mar 10, 2026",
    readTime: "9 min read",
    gradientFrom: "oklch(0.58 0.22 205)",
    gradientTo: "oklch(0.68 0.24 225)",
  },
  {
    id: 7,
    title: "SEO in 2026: How AI Search Is Changing Your Content Strategy",
    excerpt:
      "With Google's AI Overviews and Bing Copilot reshaping search results, here's how to adapt your SEO strategy to remain visible and drive organic traffic.",
    category: "Digital Marketing",
    author: "Sanya Gupta",
    authorInitials: "SG",
    date: "Apr 1, 2026",
    readTime: "7 min read",
    gradientFrom: "oklch(0.6 0.22 50)",
    gradientTo: "oklch(0.7 0.25 70)",
  },
  {
    id: 8,
    title:
      "Social Media Marketing: Building Brand Authority on Instagram & LinkedIn",
    excerpt:
      "Organic growth strategies for B2B and B2C brands — including content calendars, engagement tactics, and how to measure ROI beyond vanity metrics.",
    category: "Digital Marketing",
    author: "Ritu Agarwal",
    authorInitials: "RA",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    gradientFrom: "oklch(0.62 0.24 55)",
    gradientTo: "oklch(0.72 0.26 75)",
  },
  {
    id: 9,
    title: "PHP 8.3 New Features: Typed Class Constants, json_validate & More",
    excerpt:
      "A comprehensive look at what's new in PHP 8.3 — with practical code examples for typed class constants, the new json_validate() function, and readonly amendments.",
    category: "PHP Training",
    author: "Karan Joshi",
    authorInitials: "KJ",
    date: "Mar 30, 2026",
    readTime: "8 min read",
    gradientFrom: "oklch(0.45 0.22 150)",
    gradientTo: "oklch(0.58 0.24 170)",
  },
  {
    id: 10,
    title: "Laravel vs CodeIgniter vs Symfony: Which PHP Framework in 2026?",
    excerpt:
      "A side-by-side comparison of the three major PHP frameworks — performance benchmarks, learning curve, ecosystem maturity, and real-world project suitability.",
    category: "PHP Training",
    author: "Meera Nair",
    authorInitials: "MN",
    date: "Mar 8, 2026",
    readTime: "11 min read",
    gradientFrom: "oklch(0.5 0.24 145)",
    gradientTo: "oklch(0.62 0.26 165)",
  },
  {
    id: 11,
    title: "CSS Grid vs Flexbox: When to Use Which Layout System",
    excerpt:
      "Stop guessing — this visual tutorial explains exactly when to reach for Grid and when Flexbox is the right tool, with interactive diagrams and real layout examples.",
    category: "Tutorials",
    author: "Aisha Khan",
    authorInitials: "AK",
    date: "Mar 25, 2026",
    readTime: "7 min read",
    gradientFrom: "oklch(0.6 0.22 320)",
    gradientTo: "oklch(0.7 0.25 340)",
  },
  {
    id: 12,
    title: "Git Workflows for Teams: Branching Strategy, PRs & Code Reviews",
    excerpt:
      "Learn the Git Flow, GitHub Flow, and trunk-based development models — and how to choose the right workflow for your team's size and release cadence.",
    category: "Tutorials",
    author: "Rohan Das",
    authorInitials: "RD",
    date: "Mar 5, 2026",
    readTime: "9 min read",
    gradientFrom: "oklch(0.62 0.24 315)",
    gradientTo: "oklch(0.72 0.26 335)",
  },
];
