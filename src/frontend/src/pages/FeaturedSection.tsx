import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import type { Project } from "@/types/portfolio";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function FeaturedCard({
  project,
  index,
  onSelect,
}: { project: Project; index: number; onSelect: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-ocid={`featured-project-${project.id}`}
      className={`card-glass overflow-hidden hover-lift group transition-smooth ${
        visible ? "slide-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="badge-category">{project.category}</span>
          <Badge
            className="text-xs font-display font-semibold gap-1 px-2.5 py-0.5"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
              color: "oklch(0.98 0.005 280)",
              border: "none",
            }}
          >
            <Sparkles className="w-3 h-3" aria-hidden="true" />
            Featured
          </Badge>
        </div>
        {/* Year badge */}
        {project.year && (
          <div className="absolute top-3 right-3">
            <span
              className="text-xs font-display font-medium text-muted-foreground px-2 py-1 rounded-md"
              style={{
                background: "oklch(0.14 0.02 280 / 0.6)",
                backdropFilter: "blur(6px)",
              }}
            >
              {project.year}
            </span>
          </div>
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(0.14 0.02 280 / 0.5) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col gap-3">
        <div>
          <p className="text-xs font-display font-semibold text-muted-foreground mb-1.5">
            {project.client}
          </p>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground leading-tight group-hover:gradient-text transition-smooth">
            {project.title}
          </h3>
        </div>

        <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">
          {project.caseStudy ?? project.description}
        </p>

        {/* Results */}
        {project.results && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.results.map((r) => (
              <div
                key={r.metric}
                className="flex flex-col items-center px-3 py-1.5 rounded-lg"
                style={{
                  background: "oklch(0.55 0.22 270 / 0.08)",
                  border: "1px solid oklch(0.55 0.22 270 / 0.15)",
                }}
              >
                <span className="font-display font-bold text-sm gradient-text">
                  {r.value}
                </span>
                <span className="text-xs text-muted-foreground font-body leading-none mt-0.5">
                  {r.metric}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body px-2.5 py-1 rounded-md text-muted-foreground"
              style={{
                background: "oklch(var(--muted) / 0.8)",
                border: "1px solid oklch(var(--border) / 0.4)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-2">
          <Button
            data-ocid={`featured-cta-${project.id}`}
            variant="default"
            size="sm"
            className="group/btn font-display font-semibold gap-2 transition-smooth"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
              border: "none",
              color: "oklch(0.98 0.005 280)",
            }}
            onClick={() => onSelect(project)}
          >
            View Case Study
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <section id="featured" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-14 ${headerVisible ? "fade-in" : "opacity-0"}`}
          >
            <p className="text-xs font-display font-semibold uppercase tracking-widest text-primary mb-3">
              Showcase Work
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
              Featured <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto text-base sm:text-lg">
              Deep-dive into our most impactful projects — where strategy meets
              craft and results speak for themselves.
            </p>
          </div>

          {/* Featured Cards Grid */}
          <div
            data-ocid="featured-projects-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {featuredProjects.map((project, i) => (
              <FeaturedCard
                key={project.id}
                project={project}
                index={i}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
