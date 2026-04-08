import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { Calendar, CheckCircle2, Tag, TrendingUp, User, X } from "lucide-react";
import { useEffect, useRef } from "react";

const categoryColorMap: Record<ProjectCategory, string> = {
  "Web Design": "bg-primary/10 text-primary border-primary/20",
  "Mobile Apps": "bg-accent/10 text-accent border-accent/20",
  Branding: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  "Digital Marketing": "bg-chart-4/10 text-chart-4 border-chart-4/20",
};

const deliverablesByCategory: Record<ProjectCategory, string[]> = {
  "Web Design": [
    "UX Research & User Flows",
    "High-Fidelity Wireframes",
    "Interactive Prototypes",
    "Design System & Component Library",
    "Developer Handoff Documentation",
  ],
  "Mobile Apps": [
    "iOS & Android UI Design",
    "Interaction Animations",
    "Accessibility Audit",
    "App Store Assets",
    "Developer Handoff Specs",
  ],
  Branding: [
    "Brand Strategy & Positioning",
    "Logo & Visual Identity",
    "Brand Guidelines Document",
    "Digital & Print Asset Pack",
    "Motion Identity Guidelines",
  ],
  "Digital Marketing": [
    "Campaign Strategy & Planning",
    "Ad Creative Design",
    "Landing Page Design",
    "Analytics Dashboard Setup",
    "Monthly Performance Reports",
  ],
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const prev = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const deliverables = deliverablesByCategory[project.category];

  return (
    <div
      data-ocid="project-modal-overlay"
      role="presentation"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        aria-hidden="true"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
        role="button"
        tabIndex={-1}
      />

      {/* Modal panel */}
      <section
        aria-labelledby="modal-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto card-glass shadow-elevated rounded-2xl animate-in fade-in-0 zoom-in-95 duration-200"
      >
        {/* Hero image */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/assets/images/placeholder.svg";
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, oklch(var(--background) / 0.9) 100%)",
            }}
          />
          {/* Close button */}
          <button
            ref={closeRef}
            type="button"
            data-ocid="project-modal-close"
            aria-label="Close project detail"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/90 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="w-4 h-4" />
          </button>
          {/* Category badge */}
          <div className="absolute bottom-4 left-6">
            <Badge
              variant="outline"
              className={`border ${categoryColorMap[project.category]}`}
            >
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title + meta */}
          <div>
            <h2
              id="modal-title"
              className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-3"
            >
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {project.client}
              </span>
              {project.year && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                {project.tags.join(", ")}
              </span>
            </div>
          </div>

          {/* Description / Case Study */}
          <div>
            <h3 className="font-display font-semibold text-base text-foreground mb-2">
              Project Overview
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed text-sm">
              {project.caseStudy ?? project.description}
            </p>
          </div>

          {/* Grid: Deliverables + Results */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Deliverables */}
            <div>
              <h3 className="font-display font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Deliverables
              </h3>
              <ul className="space-y-2">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-body text-muted-foreground"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "oklch(0.55 0.22 270)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results / Outcomes */}
            {project.results && project.results.length > 0 && (
              <div>
                <h3 className="font-display font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Outcomes
                </h3>
                <div className="space-y-3">
                  {project.results.map((r) => (
                    <div
                      key={r.metric}
                      className="flex items-center justify-between rounded-xl px-4 py-3 bg-secondary/40 border border-border/40"
                    >
                      <span className="text-xs font-body text-muted-foreground">
                        {r.metric}
                      </span>
                      <span className="font-display font-bold text-base gradient-text">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2 border-t border-border/40">
            <Button
              data-ocid="modal-start-project"
              size="sm"
              className="font-display font-semibold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
              }}
              onClick={() => {
                onClose();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Similar Project
            </Button>
            <Button
              data-ocid="modal-close-btn"
              variant="outline"
              size="sm"
              className="font-display font-semibold"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
