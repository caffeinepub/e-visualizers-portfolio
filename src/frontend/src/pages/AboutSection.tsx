import { Award, Lightbulb, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Strategy First",
    desc: "Every pixel has a purpose. We start with research and strategy before opening any design tool.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    desc: "We work as an extension of your team, keeping you in the loop at every milestone.",
  },
  {
    icon: Award,
    title: "Craft & Quality",
    desc: "We obsess over details that others overlook — micro-interactions, typography, performance.",
  },
  {
    icon: Rocket,
    title: "Results Driven",
    desc: "Beautiful design is only half the job. We measure success by the impact we create for your business.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs font-display font-semibold uppercase tracking-widest text-primary mb-3">
              Who We Are
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
              We design with{" "}
              <span className="gradient-text">purpose and precision</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Evisualizers Infotech is a Bangalore-based digital design agency
              founded in 2019. We partner with startups, scale-ups, and
              enterprise brands to create digital products and identities that
              stand out in competitive markets.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Our team of 8 specialists combines strategic thinking with
              exceptional craft — bringing together UX researchers, visual
              designers, motion artists, and growth marketers under one roof.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3 p-4 rounded-xl bg-muted/50 border border-border/40"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "oklch(0.55 0.22 270 / 0.12)" }}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-foreground mb-1">
                      {title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/assets/generated/ev-hero.dim_1400x900.jpg"
                alt="Evisualizers team at work"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 card-glass p-5 shadow-elevated">
                <p className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Our Impact
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "50+", label: "Projects" },
                    { value: "30+", label: "Clients" },
                    { value: "5+", label: "Years" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="font-display font-bold text-2xl gradient-text">
                        {item.value}
                      </div>
                      <div className="text-xs font-body text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative floating card */}
            <div className="absolute -top-6 -right-4 card-glass p-4 shadow-elevated hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-display font-bold text-primary-foreground"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                  }}
                >
                  ★
                </div>
                <div>
                  <p className="text-xs font-display font-bold text-foreground">
                    Top Rated Agency
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    Clutch & Dribbble
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
