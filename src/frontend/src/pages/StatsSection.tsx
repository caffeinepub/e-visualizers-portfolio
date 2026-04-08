import { StatCard } from "@/components/stats/StatCard";
import { CheckCircle2, Clock, UserCheck, Users } from "lucide-react";

const STATS = [
  { icon: CheckCircle2, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 5, suffix: "+", label: "Years of Experience" },
  { icon: UserCheck, value: 8, suffix: "+", label: "Team Members" },
];

export function StatsSection() {
  return (
    <section
      id="stats"
      className="py-16 sm:py-20 bg-muted/30 border-y border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle header */}
        <div className="text-center mb-10">
          <p className="text-xs font-display font-semibold uppercase tracking-widest text-primary mb-2">
            By the numbers
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Results that{" "}
            <span className="gradient-text">speak for themselves</span>
          </h2>
        </div>

        <div
          data-ocid="stats-grid"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
