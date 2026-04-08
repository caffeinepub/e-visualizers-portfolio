import { Button } from "@/components/ui/button";
import { ArrowRight, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CtaSection() {
  const ref = useRef<HTMLElement>(null);
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      ref={ref}
      className={`py-20 sm:py-28 relative overflow-hidden ${visible ? "fade-in" : "opacity-0"}`}
      style={{
        background:
          "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.08) 0%, oklch(0.65 0.28 300 / 0.06) 50%, oklch(0.72 0.24 320 / 0.04) 100%)",
        borderTop: "1px solid oklch(0.55 0.22 270 / 0.15)",
        borderBottom: "1px solid oklch(0.55 0.22 270 / 0.15)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "oklch(0.55 0.22 270 / 0.08)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "oklch(0.65 0.28 300 / 0.08)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.15), oklch(0.65 0.28 300 / 0.1))",
            boxShadow: "0 8px 32px oklch(0.55 0.22 270 / 0.2)",
            border: "1px solid oklch(0.55 0.22 270 / 0.2)",
          }}
        >
          <Layers className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
          Ready to Build{" "}
          <span className="gradient-text">Something Amazing?</span>
        </h2>

        <p className="text-muted-foreground font-body text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let's turn your vision into a digital product that drives growth,
          delights users, and stands out in a crowded market. Our team is ready
          when you are.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            data-ocid="cta-start-project"
            className="font-display font-semibold text-base px-8 gap-2 group transition-smooth shadow-elevated"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
              border: "none",
              color: "oklch(0.98 0.005 280)",
            }}
            onClick={() => scrollTo("contact")}
          >
            Start Your Project
            <ArrowRight
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>

          <Button
            size="lg"
            variant="outline"
            data-ocid="cta-view-services"
            className="font-display font-semibold text-base px-8 gap-2 border-border/60 hover:bg-secondary/50 transition-smooth"
            onClick={() => scrollTo("services")}
          >
            View Our Services
          </Button>
        </div>

        {/* Trust nudge */}
        <p className="text-xs font-body text-muted-foreground mt-8 opacity-70">
          No commitment needed · Free initial consultation · Response within 24
          hours
        </p>
      </div>
    </section>
  );
}
