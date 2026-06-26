"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

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
import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref === "careers") {
      setFormData((prev) => ({
        ...prev,
        subject: "Career Collaboration / Profile Submission",
      }));
    }
  }, [searchParams]);

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
    // Mock API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="bg-white border border-safera-border/80 shadow-xl rounded-3xl p-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-dark-text tracking-wide uppercase mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200"
                    : "border-safera-border/80 focus:border-primary-purple/50 focus:ring-soft-lavender"
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-dark-text tracking-wide uppercase mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-safera-border/80 focus:border-primary-purple/50 focus:ring-soft-lavender"
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-dark-text tracking-wide uppercase mb-1.5">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of interest"
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.subject
                    ? "border-red-500 focus:ring-red-200"
                    : "border-safera-border/80 focus:border-primary-purple/50 focus:ring-soft-lavender"
                }`}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-dark-text tracking-wide uppercase mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message details..."
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message
                    ? "border-red-500 focus:ring-red-200"
                    : "border-safera-border/80 focus:border-primary-purple/50 focus:ring-soft-lavender"
                }`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 bg-primary-purple hover:bg-primary-purple/90 disabled:bg-primary-purple/60 text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer"
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
            <div className="w-14 h-14 rounded-full bg-soft-lavender flex items-center justify-center text-primary-purple mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dark-text mb-2">Message Sent Successfully</h3>
            <p className="text-gray-text text-sm max-w-sm leading-relaxed mb-6">
              Thank you for reaching out. A member of the Safera team will review your inquiry and follow up with you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-semibold text-primary-purple hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="overflow-hidden">
      {/* Hero Header */}
      <section className="bg-white py-16 md:py-28 border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-text leading-tight">
              Get in Touch
            </h1>
            <p className="text-gray-text text-lg md:text-xl leading-relaxed">
              We look forward to hearing from you. Use the details below or send a message using the form, and we will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 md:py-28 bg-soft-lavender/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold text-dark-text mb-4">Contact Information</h2>
              <p className="text-gray-text text-sm md:text-base leading-relaxed">
                Connect with our team for partnerships, career opportunities, product feedback, or general inquiries.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-safera-border/80 flex items-center justify-center text-primary-purple shrink-0 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-text uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:social@cohop.in" className="text-sm font-semibold text-dark-text hover:text-primary-purple transition-colors">
                    social@cohop.in
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-safera-border/80 flex items-center justify-center text-primary-purple shrink-0 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xs font-bold text-gray-text uppercase tracking-wider">Phone</h3>
                  <div className="flex flex-col">
                    <a href="tel:+919702492111" className="text-sm font-semibold text-dark-text hover:text-primary-purple transition-colors">
                      +91 9702492111
                    </a>
                    <a href="tel:+916265279306" className="text-sm font-semibold text-dark-text hover:text-primary-purple transition-colors mt-0.5">
                      +91 6265279306
                    </a>
                  </div>
                </div>
              </div>

              {/* Registered Office */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-safera-border/80 flex items-center justify-center text-primary-purple shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-text uppercase tracking-wider mb-1">Registered Office</h3>
                  <p className="text-sm font-semibold text-dark-text">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-safera-border/80 flex items-center justify-center text-primary-purple shrink-0 shadow-sm">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-text uppercase tracking-wider mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/company/maira-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-dark-text hover:text-primary-purple transition-colors"
                  >
                    Maira on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <Suspense fallback={
              <div className="bg-white border border-safera-border/80 shadow-xl rounded-3xl p-8 flex items-center justify-center h-96 text-gray-text">
                <Loader2 className="w-6 h-6 animate-spin mr-2" /> Loading form...
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
