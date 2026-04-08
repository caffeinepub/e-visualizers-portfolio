import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Github,
  Linkedin,
  Loader2,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

const projectTypes = [
  "Web Design",
  "Mobile App",
  "Branding",
  "Digital Marketing",
  "Other",
];

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.phone && !/^\+?[\d\s\-().]{7,20}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.projectType) errors.projectType = "Please select a project type.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

function InfoCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card-glass p-5 shadow-subtle"
    >
      {children}
    </motion.div>
  );
}

export function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validateForm({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true]),
    ) as Partial<Record<keyof FormData, boolean>>;
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setForm(initialForm);
    setTouched({});
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
              style={{ background: "oklch(0.65 0.28 300)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.08] blur-3xl animate-float"
              style={{ background: "oklch(0.55 0.22 270)" }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm mb-5"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider">
                Get in Touch
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5"
            >
              <span className="text-foreground">Let's Build Your </span>
              <span className="gradient-text">Vision</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
            >
              Tell us about your project and we'll get back to you within 2
              hours. No commitment, just a conversation.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Form Column */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-2"
              >
                <div className="card-glass shadow-elevated p-8 sm:p-10">
                  {isSuccess ? (
                    <div
                      data-ocid="contact-success"
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.15), oklch(0.65 0.28 300 / 0.15))",
                          border: "1px solid oklch(0.55 0.22 270 / 0.3)",
                        }}
                      >
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground font-body mb-8 max-w-md leading-relaxed">
                        Thanks for reaching out. Our team will review your
                        project details and get back to you within 2 hours.
                      </p>
                      <Button
                        data-ocid="contact-send-another"
                        onClick={() => setIsSuccess(false)}
                        variant="outline"
                        className="font-display font-semibold border-border/60 hover:bg-secondary/60 transition-smooth"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      data-ocid="contact-form"
                    >
                      <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                        Start a Project
                      </h2>
                      <p className="text-muted-foreground font-body text-sm mb-8">
                        Fill in the details below and we'll craft a tailored
                        solution for you.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        {/* Full Name */}
                        <div className="flex flex-col gap-1.5">
                          <Label
                            htmlFor="fullName"
                            className="font-display font-medium text-sm"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="fullName"
                            data-ocid="contact-name"
                            placeholder="Rahul Sharma"
                            value={form.fullName}
                            onChange={(e) =>
                              handleChange("fullName", e.target.value)
                            }
                            onBlur={() => handleBlur("fullName")}
                            className={`bg-background/60 border-border/60 focus:border-primary focus:ring-primary/20 transition-smooth ${
                              errors.fullName
                                ? "border-destructive focus:border-destructive"
                                : ""
                            }`}
                          />
                          {errors.fullName && (
                            <p className="text-xs text-destructive font-body">
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                          <Label
                            htmlFor="email"
                            className="font-display font-medium text-sm"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            data-ocid="contact-email"
                            placeholder="rahul@company.com"
                            value={form.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            onBlur={() => handleBlur("email")}
                            className={`bg-background/60 border-border/60 focus:border-primary focus:ring-primary/20 transition-smooth ${
                              errors.email
                                ? "border-destructive focus:border-destructive"
                                : ""
                            }`}
                          />
                          {errors.email && (
                            <p className="text-xs text-destructive font-body">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1.5">
                          <Label
                            htmlFor="phone"
                            className="font-display font-medium text-sm"
                          >
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            data-ocid="contact-phone"
                            placeholder="+91-971 755 8585"
                            value={form.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            onBlur={() => handleBlur("phone")}
                            className={`bg-background/60 border-border/60 focus:border-primary focus:ring-primary/20 transition-smooth ${
                              errors.phone
                                ? "border-destructive focus:border-destructive"
                                : ""
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-xs text-destructive font-body">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        {/* Project Type */}
                        <div className="flex flex-col gap-1.5">
                          <Label
                            htmlFor="projectType"
                            className="font-display font-medium text-sm"
                          >
                            Project Type{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Select
                            value={form.projectType}
                            onValueChange={(val) =>
                              handleChange("projectType", val)
                            }
                          >
                            <SelectTrigger
                              id="projectType"
                              data-ocid="contact-project-type"
                              className={`bg-background/60 border-border/60 focus:border-primary focus:ring-primary/20 transition-smooth ${
                                errors.projectType ? "border-destructive" : ""
                              }`}
                            >
                              <SelectValue placeholder="Select a project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.projectType && (
                            <p className="text-xs text-destructive font-body">
                              {errors.projectType}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5 mb-8">
                        <Label
                          htmlFor="message"
                          className="font-display font-medium text-sm"
                        >
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          data-ocid="contact-message"
                          placeholder="Tell us about your project — goals, timeline, budget, or any other details that will help us understand your vision..."
                          rows={5}
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          onBlur={() => handleBlur("message")}
                          className={`bg-background/60 border-border/60 focus:border-primary focus:ring-primary/20 transition-smooth resize-none ${
                            errors.message
                              ? "border-destructive focus:border-destructive"
                              : ""
                          }`}
                        />
                        {errors.message && (
                          <p className="text-xs text-destructive font-body">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        data-ocid="contact-submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full font-display font-semibold text-base gap-2 transition-smooth"
                        style={{
                          background: isSubmitting
                            ? undefined
                            : "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Sidebar */}
              <div className="flex flex-col gap-5">
                {/* Phone */}
                <InfoCard delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.22 270 / 0.15), oklch(0.65 0.28 300 / 0.15))",
                        border: "1px solid oklch(0.55 0.22 270 / 0.25)",
                      }}
                    >
                      <Phone
                        className="w-4.5 h-4.5 text-primary"
                        style={{ width: "1.125rem", height: "1.125rem" }}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                        Call Us
                      </h3>
                      <a
                        href="tel:+919717558585"
                        data-ocid="contact-phone-link"
                        className="text-sm font-body text-muted-foreground hover:text-primary transition-smooth"
                      >
                        +91-971 755 8585
                      </a>
                    </div>
                  </div>
                </InfoCard>

                {/* Response time */}
                <InfoCard delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.65 0.28 300 / 0.15), oklch(0.72 0.24 320 / 0.15))",
                        border: "1px solid oklch(0.65 0.28 300 / 0.25)",
                      }}
                    >
                      <Clock
                        className="w-4.5 h-4.5 text-accent"
                        style={{ width: "1.125rem", height: "1.125rem" }}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                        Quick Response
                      </h3>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-semibold"
                        style={{
                          background: "oklch(0.55 0.22 270 / 0.12)",
                          color: "oklch(0.45 0.22 270)",
                          border: "1px solid oklch(0.55 0.22 270 / 0.2)",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: "oklch(0.55 0.22 270)" }}
                        />
                        Typically respond within 2 hours
                      </span>
                    </div>
                  </div>
                </InfoCard>

                {/* Location */}
                <InfoCard delay={0.5}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.58 0.18 190 / 0.15), oklch(0.55 0.22 270 / 0.15))",
                        border: "1px solid oklch(0.58 0.18 190 / 0.25)",
                      }}
                    >
                      <MapPin
                        className="w-4.5 h-4.5"
                        style={{
                          width: "1.125rem",
                          height: "1.125rem",
                          color: "oklch(0.58 0.18 190)",
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                        Office Location
                      </h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">
                        India 🇮🇳
                        <br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                </InfoCard>

                {/* Social links */}
                <InfoCard delay={0.6}>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: "LinkedIn", href: "#" },
                      { icon: Twitter, label: "Twitter", href: "#" },
                      { icon: Github, label: "GitHub", href: "#" },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        data-ocid={`contact-social-${label.toLowerCase()}`}
                        className="w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-primary transition-smooth hover:-translate-y-0.5"
                        style={{
                          border: "1px solid oklch(var(--border) / 0.6)",
                          background: "oklch(var(--card) / 0.5)",
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </InfoCard>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
