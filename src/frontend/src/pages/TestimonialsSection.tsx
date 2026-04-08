import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const INTERVAL = 4000;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // Scroll-triggered fade-in
  useEffect(() => {
    const el = sectionRef.current;
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

  // Auto-play carousel
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const go = (idx: number) => {
    setActive(idx);
    resetTimer();
  };
  const prev = () =>
    go((active - 1 + testimonials.length) % testimonials.length);
  const next = () => go((active + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`py-20 sm:py-28 bg-background transition-smooth ${visible ? "fade-in" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-display font-semibold uppercase tracking-widest text-primary mb-3">
            Social Proof
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-base">
            Don't just take our word for it — hear from the people we've had the
            privilege of working with.
          </p>
        </div>

        {/* Desktop: 2x2 grid */}
        <div
          data-ocid="testimonials-grid"
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              active={i === active}
              onClick={() => go(i)}
            />
          ))}
        </div>

        {/* Mobile: Carousel single card */}
        <div className="sm:hidden mb-6">
          <div className="overflow-hidden">
            <TestimonialCard testimonial={testimonials[active]} />
          </div>
        </div>

        {/* Carousel controls — shown on all viewports */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            data-ocid="testimonial-prev"
            className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-smooth focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                type="button"
                key={t.id}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                data-ocid={`testimonial-dot-${i}`}
                className="rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  background:
                    i === active
                      ? "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))"
                      : "oklch(0.55 0.22 270 / 0.25)",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            data-ocid="testimonial-next"
            className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-smooth focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
