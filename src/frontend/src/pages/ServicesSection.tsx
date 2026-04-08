import {
  ArrowRight,
  Globe,
  Palette,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "End-to-end digital experiences — from research and wireframes to polished, high-performance websites that convert.",
    features: [
      "UI/UX Research",
      "Responsive Design",
      "Design Systems",
      "Conversion Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description:
      "Intuitive iOS and Android experiences built around user behavior, with seamless interactions that drive engagement and retention.",
    features: ["iOS & Android", "React Native", "Prototyping", "User Testing"],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Strategic brand identities that communicate your values, differentiate in the market, and build lasting recognition.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Language",
      "Motion Identity",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that reach the right audience at the right time — from paid acquisition to organic growth.",
    features: ["Paid Ads", "SEO Strategy", "Email Automation", "Analytics"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-display font-semibold uppercase tracking-widest text-primary mb-3">
            What We Do
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Services built for{" "}
            <span className="gradient-text">modern brands</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Whether you need a full rebrand or a focused campaign, we bring the
            same level of craft and strategy to every engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-ocid={`service-card-${i}`}
                className="group card-glass p-7 hover-lift"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-smooth group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.15), oklch(0.65 0.28 300 / 0.15))",
                    border: "1px solid oklch(0.55 0.22 270 / 0.2)",
                  }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm font-body text-muted-foreground"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "oklch(0.55 0.22 270)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-primary hover:gap-2.5 transition-smooth"
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
