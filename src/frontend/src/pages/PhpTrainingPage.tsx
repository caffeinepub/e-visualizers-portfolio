import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Code2,
  GraduationCap,
  Infinity as InfinityIcon,
  Monitor,
  Star,
  Users,
  Video,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/* ── Data ───────────────────────────────────────────────────── */

const features = [
  {
    icon: Code2,
    title: "Hands-On Projects",
    desc: "Build 5+ real-world projects including e-commerce platforms, REST APIs, and CMS systems to strengthen your portfolio.",
  },
  {
    icon: Briefcase,
    title: "Job Placement Assistance",
    desc: "Dedicated placement cell with 200+ hiring partners. Resume reviews, mock interviews, and referrals to top tech companies.",
  },
  {
    icon: Video,
    title: "Live Interactive Sessions",
    desc: "60+ hours of live classes with industry mentors. Ask questions in real-time and learn from practical demonstrations.",
  },
  {
    icon: Award,
    title: "Certificate of Completion",
    desc: "Industry-recognised certificate from Evisualizers Infotech upon course completion, endorsed by our hiring partners.",
  },
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    desc: "Learn from professionals with 10+ years of PHP development experience at leading product and service companies.",
  },
  {
    icon: InfinityIcon,
    title: "Lifetime Access",
    desc: "Keep all recordings, notes, and updated course material forever — revisit any lesson whenever you need a refresher.",
  },
];

const curriculum = [
  {
    module: "Module 1: PHP Fundamentals",
    lessons: 12,
    topics: [
      "PHP syntax, variables & data types",
      "Operators, control flow & loops",
      "Functions & scope",
      "Arrays & string manipulation",
      "File handling & sessions",
      "Error handling & debugging",
    ],
  },
  {
    module: "Module 2: Object-Oriented PHP",
    lessons: 10,
    topics: [
      "Classes, objects & constructors",
      "Inheritance & polymorphism",
      "Interfaces & abstract classes",
      "Traits & namespaces",
      "Design patterns (MVC, Singleton, Factory)",
      "PSR standards & Composer",
    ],
  },
  {
    module: "Module 3: Database & MySQL",
    lessons: 10,
    topics: [
      "MySQL schema design & normalization",
      "CRUD operations with PDO",
      "Prepared statements & security",
      "Joins, indexes & optimisation",
      "Transactions & stored procedures",
      "Introduction to phpMyAdmin",
    ],
  },
  {
    module: "Module 4: Laravel Framework",
    lessons: 16,
    topics: [
      "Laravel installation & project structure",
      "Routing, controllers & middleware",
      "Eloquent ORM & migrations",
      "Blade templating engine",
      "Authentication & authorisation",
      "Queues, events & notifications",
    ],
  },
  {
    module: "Module 5: API Development",
    lessons: 8,
    topics: [
      "REST API principles & design",
      "Building RESTful APIs with Laravel",
      "JWT & Sanctum authentication",
      "API testing with Postman",
      "Versioning & rate limiting",
      "Consuming third-party APIs",
    ],
  },
  {
    module: "Module 6: Frontend Integration",
    lessons: 6,
    topics: [
      "HTML5, CSS3 & Bootstrap basics",
      "JavaScript & jQuery essentials",
      "AJAX & fetch for dynamic UIs",
      "Form validation (server + client)",
      "Webpack & asset bundling with Vite",
      "Integrating Vue.js with Laravel",
    ],
  },
  {
    module: "Module 7: Deployment & DevOps",
    lessons: 6,
    topics: [
      "Linux server basics & SSH",
      "Apache / Nginx configuration",
      "Git & GitHub workflow",
      "CI/CD pipelines (GitHub Actions)",
      "Docker containers for PHP",
      "SSL, caching & performance tuning",
    ],
  },
  {
    module: "Module 8: Capstone Project",
    lessons: 8,
    topics: [
      "Full-stack e-commerce application",
      "Payment gateway integration",
      "Role-based access control",
      "Admin dashboard & reporting",
      "Performance optimisation",
      "Deployment & project review",
    ],
  },
];

const stats = [
  { value: 1200, suffix: "+", label: "Students Trained" },
  { value: 92, suffix: "%", label: "Placement Rate" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Hiring Partners" },
];

/* ── Animated Counter ───────────────────────────────────────── */

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <motion.div
      onViewportEnter={start}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="gradient-text font-display font-bold text-4xl sm:text-5xl tabular-nums">
        {count}
        {suffix}
      </span>
    </motion.div>
  );
}

/* ── Accordion Item ─────────────────────────────────────────── */

function AccordionItem({
  module,
  lessons,
  topics,
  index,
}: {
  module: string;
  lessons: number;
  topics: string[];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="card-glass overflow-hidden shadow-subtle"
    >
      <button
        type="button"
        data-ocid={`curriculum-module-${index + 1}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-smooth hover:bg-secondary/30"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-bold flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.2), oklch(0.65 0.28 300 / 0.2))",
              border: "1px solid oklch(0.55 0.22 270 / 0.3)",
              color: "oklch(0.55 0.22 270)",
            }}
          >
            {index + 1}
          </span>
          <span className="font-display font-semibold text-foreground text-sm sm:text-base">
            {module}
          </span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <span className="hidden sm:flex items-center gap-1 badge-category text-xs">
            <BookOpen className="w-3 h-3" />
            {lessons} lessons
          </span>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground transition-smooth ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 border-t border-border/40">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-muted-foreground">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Page ──────────────────────────────────────────────── */

export function PhpTrainingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.09] blur-3xl animate-float"
              style={{ background: "oklch(0.65 0.28 300)" }}
            />
            <div
              className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.07] blur-3xl"
              style={{ background: "oklch(0.55 0.22 270)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04] blur-3xl"
              style={{ background: "oklch(0.72 0.24 320)" }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm mb-6"
            >
              <Monitor className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider">
                Professional PHP Training · Evisualizers Infotech
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight mb-6"
            >
              <span className="text-foreground">Master </span>
              <span className="gradient-text">PHP Development</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Go from beginner to job-ready PHP developer in 6 months. Build
              real projects, learn Laravel, and land your first tech role with
              our industry-backed placement programme.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                data-ocid="hero-enroll-cta"
                className="font-display font-semibold text-base px-8 py-6 shadow-elevated transition-smooth hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                }}
              >
                Enroll Now — Free Demo Class
              </Button>
              <button
                type="button"
                data-ocid="hero-curriculum-link"
                onClick={() => {
                  document
                    .getElementById("curriculum")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-display font-semibold text-sm text-primary hover:text-accent transition-smooth underline underline-offset-4 decoration-primary/40 hover:decoration-accent"
              >
                View Full Curriculum →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
            >
              {[
                "6-Month Programme",
                "Live + Recorded",
                "Job Guarantee*",
                "₹ 15,000 All-Inclusive",
              ].map((badge) => (
                <span key={badge} className="badge-category">
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Course Features ── */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary mb-3">
                What You Get
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Everything You Need to{" "}
                <span className="gradient-text">Succeed</span>
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
                Our programme is designed by industry professionals to give you
                both the skills and the confidence to thrive in your PHP career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="card-glass p-6 shadow-subtle hover-lift"
                  data-ocid={`feature-card-${i + 1}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.15), oklch(0.65 0.28 300 / 0.15))",
                      border: "1px solid oklch(0.55 0.22 270 / 0.25)",
                    }}
                  >
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Curriculum ── */}
        <section id="curriculum" className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary mb-3">
                Curriculum
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                <span className="gradient-text">76 Lessons</span> Across 8
                Modules
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
                A structured path from PHP basics to full-stack Laravel
                applications and cloud deployment — click any module to explore
                its topics.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {curriculum.map((item, i) => (
                <AccordionItem key={item.module} {...item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary mb-3">
                By the Numbers
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Trusted by{" "}
                <span className="gradient-text">1,200+ Developers</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="card-glass p-8 shadow-subtle text-center"
                  data-ocid={`stat-${i + 1}`}
                >
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-sm font-body text-muted-foreground">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Instructor ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary mb-3">
                Your Instructor
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Learn From the{" "}
                <span className="gradient-text">Best in the Field</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="card-glass p-8 shadow-elevated"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-xl flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                      color: "oklch(0.98 0.008 280)",
                    }}
                  >
                    RK
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      Rajesh Kumar
                    </h3>
                    <p className="text-sm font-body text-primary font-semibold">
                      Lead PHP & Laravel Instructor
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                        <Star
                          key={k}
                          className="w-3.5 h-3.5 fill-current"
                          style={{ color: "oklch(0.75 0.18 85)" }}
                        />
                      ))}
                      <span className="text-xs font-body text-muted-foreground ml-1">
                        4.9 (830 reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
                  Rajesh is a full-stack PHP developer with 12+ years of
                  experience building enterprise applications for clients across
                  India, the UK, and Australia. He has led PHP development teams
                  at multiple funded startups and has trained over 800 students
                  who are now working at companies like Infosys, Wipro, TCS, and
                  early-stage startups.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["PHP 8", "Laravel", "MySQL", "REST APIs", "Vue.js"].map(
                    (skill) => (
                      <span key={skill} className="badge-category">
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="flex flex-col gap-5"
              >
                {[
                  {
                    icon: Users,
                    title: "Students Community",
                    value: "1,200+ active learners",
                    desc: "Join our Slack community with PHP developers at all skill levels.",
                  },
                  {
                    icon: Monitor,
                    title: "Live + Recorded Classes",
                    value: "60+ hours of content",
                    desc: "Attend live sessions or catch up with HD recordings at your own pace.",
                  },
                  {
                    icon: CheckCircle,
                    title: "1-on-1 Mentorship",
                    value: "Dedicated doubt sessions",
                    desc: "Weekly office hours with instructors to resolve blockers and review your code.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="card-glass p-5 shadow-subtle flex items-start gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.15), oklch(0.65 0.28 300 / 0.15))",
                        border: "1px solid oklch(0.55 0.22 270 / 0.25)",
                      }}
                    >
                      <item.icon
                        className="w-4.5 h-4.5 text-primary"
                        style={{ width: "1.125rem", height: "1.125rem" }}
                      />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <h4 className="font-display font-semibold text-sm text-foreground">
                          {item.title}
                        </h4>
                        <span className="text-xs font-body text-primary font-semibold">
                          {item.value}
                        </span>
                      </div>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Enroll CTA ── */}
        <section
          className="py-24 relative overflow-hidden"
          data-ocid="enroll-cta-section"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.12) 0%, oklch(0.65 0.28 300 / 0.1) 50%, oklch(0.72 0.24 320 / 0.08) 100%)",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: "oklch(0.65 0.28 300)" }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary mb-4">
                Limited Seats Available
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5 leading-tight">
                Start Your PHP Journey{" "}
                <span className="gradient-text">Today</span>
              </h2>
              <p className="text-lg font-body text-muted-foreground mb-10 leading-relaxed">
                The next batch begins{" "}
                <strong className="text-foreground">May 10, 2026</strong>. Enrol
                now to secure your seat and get free access to our PHP Kickstart
                mini-course while you wait.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  data-ocid="footer-enroll-cta"
                  className="font-display font-semibold text-base px-10 py-6 shadow-elevated transition-smooth hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                  }}
                >
                  Enroll Now — ₹15,000
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  data-ocid="footer-demo-cta"
                  className="font-display font-semibold text-base px-8 py-6 border-border/60 hover:bg-secondary/60 transition-smooth"
                >
                  Book a Free Demo Class
                </Button>
              </div>
              <p className="mt-6 text-xs font-body text-muted-foreground">
                *Job guarantee subject to eligibility criteria and programme
                completion. EMI available. No prior experience required.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
