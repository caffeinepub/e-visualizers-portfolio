import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/pages/AboutSection";
import { BlogPage } from "@/pages/BlogPage";
import { ContactPage } from "@/pages/ContactPage";
import { CtaSection } from "@/pages/CtaSection";
import { FeaturedSection } from "@/pages/FeaturedSection";
import { HeroSection } from "@/pages/HeroSection";
import { PhpTrainingPage } from "@/pages/PhpTrainingPage";
import { PortfolioSection } from "@/pages/PortfolioSection";
import { ServicesSection } from "@/pages/ServicesSection";
import { StatsSection } from "@/pages/StatsSection";
import { TestimonialsSection } from "@/pages/TestimonialsSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const phpTrainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/php-training",
  component: PhpTrainingPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  contactRoute,
  phpTrainingRoute,
  blogRoute,
]);

const hashHistory = createHashHistory();

const router = createRouter({ routeTree, history: hashHistory });

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
