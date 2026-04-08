import type { Testimonial } from "@/types/portfolio";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  active?: boolean;
  onClick?: () => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {(["s1", "s2", "s3", "s4", "s5"] as const).map((k, i) => (
        <Star
          key={k}
          className={`w-4 h-4 ${i < rating ? "fill-current" : "fill-none opacity-30"}`}
          style={{ color: "oklch(0.78 0.18 65)" }}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  active,
  onClick,
}: TestimonialCardProps) {
  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      type={onClick ? "button" : undefined}
      onClick={onClick}
      data-ocid={`testimonial-card-${testimonial.id}`}
      className={`card-glass p-6 sm:p-7 flex flex-col gap-4 transition-smooth w-full text-left ${
        onClick ? "hover-lift cursor-pointer" : ""
      } ${active ? "ring-2 ring-primary/50 shadow-elevated" : ""}`}
    >
      {/* Quote icon */}
      <div className="flex items-start justify-between gap-2">
        <StarRating rating={testimonial.rating} />
        <Quote
          className="w-7 h-7 shrink-0 opacity-20 rotate-180"
          style={{ color: "oklch(0.55 0.22 270)" }}
          aria-hidden="true"
        />
      </div>

      {/* Quote text */}
      <blockquote className="text-sm font-body text-muted-foreground leading-relaxed flex-1 line-clamp-5">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border/40">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-xs text-primary-foreground shrink-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
          }}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-display font-semibold text-foreground truncate">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground font-body truncate">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </Tag>
  );
}
