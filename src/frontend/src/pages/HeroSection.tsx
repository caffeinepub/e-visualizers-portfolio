import { Button } from "@/components/ui/button";
import { stats } from "@/data/projects";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-16 -left-8 w-80 h-80 rounded-full opacity-10 blur-3xl animate-float"
          style={{ background: "oklch(0.55 0.22 270)" }}
        />
        <div
          className="absolute bottom-24 right-4 w-96 h-96 rounded-full opacity-[0.08] blur-3xl animate-float"
          style={{ background: "oklch(0.65 0.28 300)", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04] blur-3xl"
          style={{ background: "oklch(0.6 0.25 285)" }}
        />
      </div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/generated/ev-hero.dim_1400x900.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm mb-4"
          >
            <Award className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider">
              Top-Rated Digital Agency
            </span>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 ml-3 align-middle"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.15), oklch(0.65 0.28 300 / 0.15))",
              border: "1px solid oklch(0.55 0.22 270 / 0.3)",
            }}
          >
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs font-display font-semibold gradient-text">
              250+ Projects Delivered
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.06] tracking-tight mb-6"
          >
            <span className="text-foreground block">Crafting Digital</span>
            <span className="gradient-text block">Experiences That</span>
            <span className="text-foreground block">Inspire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Evisualizers Infotech delivers exceptional digital experiences that
            drive results for forward-thinking brands. From web design to mobile
            apps, we turn visions into reality.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              data-ocid="hero-cta-primary"
              size="lg"
              className="font-display font-semibold text-base gap-2 px-8 hover-lift"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
              }}
              onClick={() => handleScrollTo("#portfolio")}
            >
              View Our Work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              data-ocid="hero-cta-secondary"
              variant="outline"
              size="lg"
              className="font-display font-semibold text-base px-8 border-border/60 hover:bg-secondary/60 transition-smooth"
              onClick={() => handleScrollTo("#contact")}
            >
              Get a Quote
            </Button>
          </motion.div>

          {/* Floating project preview cards */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-3 max-w-2xl mx-auto"
          >
            {[
              {
                src: "/assets/generated/project-luminary.dim_800x500.jpg",
                label: "Analytics Dashboard",
              },
              {
                src: "/assets/generated/project-nexus.dim_800x500.jpg",
                label: "E-Commerce Platform",
              },
              {
                src: "/assets/generated/project-pulse.dim_800x500.jpg",
                label: "Fitness App",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.12 }}
                className="card-glass overflow-hidden hover-lift"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-24 sm:h-32 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/assets/images/placeholder.svg";
                  }}
                />
                <p className="text-xs font-body font-medium text-muted-foreground p-2 truncate">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-0.5"
              >
                <span className="font-display font-bold text-2xl sm:text-3xl gradient-text">
                  {stat.value}
                </span>
                <span className="text-xs font-body text-muted-foreground tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
