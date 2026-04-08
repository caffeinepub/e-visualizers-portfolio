import { Linkedin } from "lucide-react";
import { SiBehance, SiDribbble, SiInstagram, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = ["Web Design", "Mobile Apps", "Branding", "Digital Marketing"];

type IconComponent = React.ComponentType<{ className?: string }>;

const socials: { icon: IconComponent; href: string; label: string }[] = [
  { icon: SiX as IconComponent, href: "https://x.com", label: "X / Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  {
    icon: SiInstagram as IconComponent,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: SiBehance as IconComponent,
    href: "https://behance.net",
    label: "Behance",
  },
  {
    icon: SiDribbble as IconComponent,
    href: "https://dribbble.com",
    label: "Dribbble",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-16 border-b border-border/50">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Ready to transform your{" "}
              <span className="gradient-text">digital presence?</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Let's build something remarkable together. Our team is ready to
              bring your vision to life.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                data-ocid="footer-start-project"
                href="mailto:hello@evisualizers.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm text-primary-foreground transition-smooth hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                }}
              >
                Start a Project
              </a>
              <button
                type="button"
                data-ocid="footer-learn-more"
                onClick={() => handleClick("#about")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm text-foreground border border-border/60 bg-background/60 hover:bg-secondary/60 transition-smooth"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm text-primary-foreground"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                }}
              >
                EV
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-sm text-foreground">
                  Evisualizers
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  Infotech
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
              Crafting exceptional digital experiences for forward-thinking
              brands since 2019.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground font-body">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground font-body">
              <li>
                <a
                  href="mailto:hello@evisualizers.com"
                  className="hover:text-primary transition-smooth"
                >
                  hello@evisualizers.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="hover:text-primary transition-smooth"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="leading-relaxed">Bangalore, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-body">
          <span>© {year} Evisualizers Infotech. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
