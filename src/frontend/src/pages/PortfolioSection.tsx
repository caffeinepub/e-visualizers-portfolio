import { CATEGORIES, FilterTabs } from "@/components/portfolio/FilterTabs";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

function buildCounts(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };
  for (const cat of CATEGORIES.slice(1)) {
    counts[cat] = projects.filter((p) => p.category === cat).length;
  }
  return counts;
}

const COUNTS = buildCounts();

function getCategoryFromHash(): ProjectCategory | "All" {
  if (typeof window === "undefined") return "All";
  const hash = decodeURIComponent(window.location.hash.replace("#filter=", ""));
  if ((CATEGORIES as string[]).includes(hash))
    return hash as ProjectCategory | "All";
  return "All";
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    getCategoryFromHash,
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Sync URL hash with active filter
  const handleCategoryChange = useCallback((cat: ProjectCategory | "All") => {
    setActiveCategory(cat);
    const hash =
      cat === "All" ? "#portfolio" : `#filter=${encodeURIComponent(cat)}`;
    window.history.replaceState(null, "", hash);
  }, []);

  // Restore filter from hash on back/forward
  useEffect(() => {
    const onHashChange = () => setActiveCategory(getCategoryFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-display font-semibold uppercase tracking-widest text-primary mb-3">
            Our Work
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Projects that{" "}
            <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A curated selection of our best work across web design, mobile apps,
            branding, and digital marketing.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <FilterTabs
            active={activeCategory}
            onChange={handleCategoryChange}
            counts={COUNTS}
          />
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            data-ocid="portfolio-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" }}
                className={project.featured && i === 0 ? "sm:col-span-2" : ""}
              >
                <ProjectCard
                  project={project}
                  featured={project.featured && i === 0}
                  onClick={setSelectedProject}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div
            data-ocid="portfolio-empty"
            className="text-center py-24 text-muted-foreground font-body"
          >
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
