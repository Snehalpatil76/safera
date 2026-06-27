"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState(() => ({
    name: "",
    email: "",
    subject: searchParams.get("ref") === "careers" ? "Career Collaboration / Profile Submission" : "",
    message: "",
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("Form submission failed. Please try again.");
        console.error(error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl border-white/8 hover:border-primary-purple/20 transition-all duration-300">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            name="contact"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-white tracking-widest uppercase mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-3.5 rounded-xl border bg-[#15151E] text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/8 focus:border-primary-purple/50 focus:ring-primary-purple/20"
                }`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-white tracking-widest uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3.5 rounded-xl border bg-[#15151E] text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/8 focus:border-primary-purple/50 focus:ring-primary-purple/20"
                }`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-white tracking-widest uppercase mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of interest"
                className={`w-full px-4 py-3.5 rounded-xl border bg-[#15151E] text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.subject
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/8 focus:border-primary-purple/50 focus:ring-primary-purple/20"
                }`}
              />
              {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-white tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message details..."
                className={`w-full px-4 py-3.5 rounded-xl border bg-[#15151E] text-white text-sm focus:outline-none focus:ring-2 resize-none transition-all ${
                  errors.message
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/8 focus:border-primary-purple/50 focus:ring-primary-purple/20"
                }`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 mt-2 btn-premium-primary text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/20">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Message Sent Successfully</h3>
            <p className="text-gray-text text-sm max-w-sm leading-relaxed mb-6">
              Thank you for reaching out. A member of the Safera team will review your inquiry and follow up with you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-bold text-primary-purple hover:text-white transition-colors uppercase tracking-wider"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactClient() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="overflow-hidden bg-[#0B0B12] text-white relative"
    >
      {/* Ambient background textures */}
      <div className="noise-overlay" />
      <div className="mesh-gradient absolute inset-0 pointer-events-none -z-10" />
      {/* Hero Header */}
      <section className="relative py-24 md:py-36 border-b border-white/8">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-slow-glow" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl flex flex-col gap-6"
          >
            <motion.span
              variants={fadeInUp}
              className="text-xs font-bold text-primary-purple tracking-widest uppercase"
            >
              Contact
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15]"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-text text-lg md:text-xl leading-relaxed mt-4"
            >
              We look forward to hearing from you. Use the details below or send a message using the form, and we will get back to you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 md:py-36 bg-transparent relative">
        <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-slow-glow" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start relative z-10"
        >
          {/* Details Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">Contact Information</h2>
              <p className="text-gray-text text-base leading-relaxed">
                Connect with our team for partnerships, career opportunities, product feedback, or general inquiries.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Email */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary-purple/10 border border-primary-purple/15 flex items-center justify-center text-primary-purple shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-text uppercase tracking-widest mb-1.5">Email</h3>
                  <a href="mailto:social@safera.tech" className="text-base font-bold text-white hover:text-primary-purple transition-colors">
                    social@safera.tech
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary-purple/10 border border-primary-purple/15 flex items-center justify-center text-primary-purple shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xs font-bold text-gray-text uppercase tracking-widest">Phone</h3>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919702492111" className="text-base font-bold text-white hover:text-primary-purple transition-colors">
                      +91 9702492111
                    </a>
                    <a href="tel:+916265279306" className="text-base font-bold text-white hover:text-primary-purple transition-colors">
                      +91 6265279306
                    </a>
                  </div>
                </div>
              </div>

              {/* Registered Office */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary-purple/10 border border-primary-purple/15 flex items-center justify-center text-primary-purple shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-text uppercase tracking-widest mb-1.5">Registered Office</h3>
                  <p className="text-base font-bold text-white">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary-purple/10 border border-primary-purple/15 flex items-center justify-center text-primary-purple shrink-0 shadow-md">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-text uppercase tracking-widest mb-1.5">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/company/maira-club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-primary-purple transition-colors"
                  >
                    Maira on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <Suspense fallback={
              <div className="glass-card shadow-2xl rounded-3xl p-8 flex items-center justify-center h-96 text-gray-text border-white/8">
                <Loader2 className="w-6 h-6 animate-spin mr-2" /> Loading form...
              </div>
            }>
              <ContactForm />
            </Suspense>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
