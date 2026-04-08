import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return count;
}

export function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  delay = 0,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimating(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const count = useCountUp(value, 2000, animating);

  return (
    <div
      ref={ref}
      data-ocid={`stat-card-${label.toLowerCase().replace(/\s+/g, "-")}`}
      className={`card-glass p-6 sm:p-8 flex flex-col items-center text-center hover-lift transition-smooth ${
        visible ? "fade-in" : "opacity-0"
      }`}
    >
      {/* Icon glow container */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.18), oklch(0.65 0.28 300 / 0.12))",
          boxShadow: "0 4px 20px oklch(0.55 0.22 270 / 0.2)",
        }}
      >
        <Icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
      </div>

      {/* Animated number */}
      <div className="font-display font-extrabold text-4xl sm:text-5xl gradient-text leading-none mb-1 tabular-nums">
        {animating ? count : 0}
        <span>{suffix}</span>
      </div>

      <p className="text-sm font-body text-muted-foreground mt-2 leading-snug">
        {label}
      </p>
    </div>
  );
}
