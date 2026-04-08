import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
  isRoute?: boolean;
  routePath?: string;
}

const navLinks: NavLink[] = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  {
    label: "PHP Training",
    href: "/php-training",
    isRoute: true,
    routePath: "/php-training",
  },
  { label: "Contact", href: "/contact", isRoute: true, routePath: "/contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollNav = (href: string) => {
    setIsMobileOpen(false);
    if (currentPath !== "/") {
      window.location.hash = `#${href.replace("#", "")}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetQuote = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      data-ocid="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border/50 shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setIsMobileOpen(false)}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm text-primary-foreground transition-smooth group-hover:scale-105"
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
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.routePath}
                  to={link.routePath as string}
                  className={`px-4 py-2 text-sm font-body font-medium transition-smooth rounded-lg hover:bg-secondary/60 ${
                    currentPath === link.routePath
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleScrollNav(link.href)}
                  className="px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-secondary/60"
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-ocid="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-smooth"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <Link to="/contact" onClick={handleGetQuote}>
              <Button
                data-ocid="nav-cta"
                size="sm"
                className="hidden sm:flex font-display font-semibold text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                }}
              >
                Get Quote
              </Button>
            </Link>
            <button
              type="button"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-smooth"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border/50 shadow-elevated">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.routePath}
                  to={link.routePath as string}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-body font-medium text-left transition-smooth rounded-lg hover:bg-secondary/60 ${
                    currentPath === link.routePath
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleScrollNav(link.href)}
                  className="px-4 py-3 text-sm font-body font-medium text-left text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-smooth rounded-lg"
                >
                  {link.label}
                </button>
              ),
            )}
            <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
              <Button
                data-ocid="mobile-nav-cta"
                className="mt-2 w-full font-display font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                }}
              >
                Get Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
