import { Badge } from "@/components/ui/badge";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { ExternalLink } from "lucide-react";

const categoryColorMap: Record<ProjectCategory, string> = {
  "Web Design": "bg-primary/10 text-primary border-primary/20",
  "Mobile Apps": "bg-accent/10 text-accent border-accent/20",
  Branding: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  "Digital Marketing": "bg-chart-4/10 text-chart-4 border-chart-4/20",
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, featured, onClick }: ProjectCardProps) {
  return (
    <button
      type="button"
      data-ocid={`project-card-${project.id}`}
      aria-label={`View project: ${project.title}`}
      className={`group relative card-glass overflow-hidden hover-lift cursor-pointer text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        featured ? "sm:col-span-2" : ""
      }`}
      onClick={() => onClick(project)}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${featured ? "h-56 sm:h-72" : "h-48"}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center"
          style={{ background: "oklch(0.55 0.22 270 / 0.82)" }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{ background: "oklch(1 0 0 / 0.2)" }}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-display font-semibold text-sm tracking-wide">
              View Project
            </span>
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="text-xs font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
              }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-sm text-foreground leading-snug min-w-0 line-clamp-1">
            {project.title}
          </h3>
          <Badge
            variant="outline"
            className={`text-xs shrink-0 border ${categoryColorMap[project.category]}`}
          >
            {project.category}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground font-body line-clamp-2 leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-body text-muted-foreground truncate min-w-0">
            {project.client}
          </span>
          {project.year && (
            <span className="text-xs font-mono text-muted-foreground/60 shrink-0 ml-2">
              {project.year}
            </span>
          )}
        </div>
        <div className="flex gap-1 flex-wrap mt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground font-body"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
