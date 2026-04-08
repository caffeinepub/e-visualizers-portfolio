import type { ProjectCategory } from "@/types/portfolio";

export const CATEGORIES: (ProjectCategory | "All")[] = [
  "All",
  "Web Design",
  "Mobile Apps",
  "Branding",
  "Digital Marketing",
];

interface FilterTabsProps {
  active: ProjectCategory | "All";
  onChange: (cat: ProjectCategory | "All") => void;
  counts: Record<string, number>;
}

export function FilterTabs({ active, onChange, counts }: FilterTabsProps) {
  return (
    <div
      data-ocid="portfolio-filter-tabs"
      role="tablist"
      aria-label="Filter projects by category"
      className="flex gap-2 flex-wrap justify-center"
    >
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            data-ocid={`filter-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            className={`relative px-4 py-2 rounded-xl text-sm font-display font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              isActive
                ? "text-primary-foreground shadow-elevated"
                : "text-muted-foreground hover:text-foreground bg-secondary/40 border border-border/50 hover:border-border hover:bg-secondary/70"
            }`}
            style={
              isActive
                ? {
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                  }
                : {}
            }
          >
            {cat}
            {counts[cat] !== undefined && (
              <span
                className={`ml-2 text-xs font-mono px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {counts[cat]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
