"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, EyeOff, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

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

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function About() {
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
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 border-b border-white/8 overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-slow-glow" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-secondary-purple/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-slow-glow" />
        <div className="noise-overlay" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.span
                variants={fadeInUp}
                className="text-xs font-bold text-primary-purple tracking-widest uppercase"
              >
                Who We Are
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15]"
              >
                Building Technology <br className="hidden md:inline" />
                With Genuine Purpose.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-gray-text text-lg leading-relaxed mt-2"
              >
                Safera Technologies is a women-first technology company. We build digital products that address genuine everyday decisions, challenges, and experiences by focusing on safety, trusted communities, and artificial intelligence.
              </motion.p>
            </motion.div>

            {/* Right Column: Premium Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-purple/10 to-transparent opacity-60 z-10 pointer-events-none" />
              <Image
                src="/images/about_collaboration.png"
                alt="Indian women collaborating in a workspace"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12]/40 via-transparent to-transparent z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-36 bg-[#15151E]/20 border-b border-white/8 relative">
        <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-slow-glow" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative z-10"
        >
          <motion.div variants={fadeInUp} className="glass-card glass-card-hover p-8 md:p-12 rounded-3xl shadow-2xl">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Mission</span>
            <h2 className="text-3xl font-extrabold text-white mt-4 mb-6">Our Mission</h2>
            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              To create digital spaces and products where women can connect safely, explore confidently, and navigate daily life with greater support, safety, and mutual agency. We solve real-world problems by listening first.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card glass-card-hover p-8 md:p-12 rounded-3xl shadow-2xl">
            <span className="text-xs font-bold text-secondary-purple tracking-widest uppercase">The Vision</span>
            <h2 className="text-3xl font-extrabold text-white mt-4 mb-6">Our Vision</h2>
            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              To define the future of women-first technology—proving that software built with trust, safety, and community at its core creates a better, more supportive digital experience for everyone.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Principles */}
      <section className="py-24 md:py-36 bg-transparent border-b border-white/8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-purple/3 rounded-full blur-[120px] pointer-events-none -z-10 animate-slow-glow" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-xl mx-auto mb-20">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Pillars</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Core Principles
            </h2>
            <p className="text-gray-text text-sm md:text-base mt-4">
              These guidelines represent the foundation of every product we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div variants={fadeInUp} className="flex gap-5 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15 shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Built on Trust</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  Everything starts with safety. We believe that digital tools should provide robust verification mechanisms to build secure, trustworthy spaces for real-world interactions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-5 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15 shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Women-First by Design</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  We research and design with lived experiences as the primary benchmark. By understanding women&apos;s actual needs, we create features that provide practical and genuine solutions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-5 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15 shrink-0">
                <EyeOff className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Privacy by Default</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  Data tracking and commercial profiling are replaced with strict user controls. We protect identity first and give users absolute control over their conversations and recommendations.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-5 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15 shrink-0">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Community Confidence</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  We believe that the most powerful digital support system is shared experience. Our products nurture communities where peer-to-peer encouragement creates confidence in decision making.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Ecosystem Summary */}
      <section className="py-24 md:py-36 bg-[#15151E]/20 border-b border-white/8 relative">
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-slow-glow" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10"
        >
          <motion.span variants={fadeInUp} className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Ecosystem</motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 mb-6">
            Focused Digital Products
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-text text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Our current suite includes **Cohop**, a verified community for collaborative and confident travel, and **Maira**, a private space for guidance and peer-to-peer sharing.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <Link
              href="/products"
              className="btn-premium-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all active:scale-[0.98] group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="py-24 md:py-36 bg-transparent border-b border-white/8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-purple/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-slow-glow" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-xl mx-auto mb-20">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Team</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Meet Our Founders
            </h2>
            <p className="text-gray-text text-sm md:text-base mt-4">
              Building technology designed around women&apos;s real lives and safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {/* Founder 1: Manan Jhaveri */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-8 rounded-3xl glass-card glass-card-hover relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary-purple/5 rounded-full blur-[50px] pointer-events-none" />
              
              {/* Circular portrait with purple accent lighting via shadow/glow */}
              <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mb-6 border-2 border-primary-purple/30 avatar-glow group-hover:border-primary-purple/65 transition-colors duration-300">
                <Image
                  src="/images/founders/Manan.jpeg"
                  alt="Manan Jhaveri"
                  fill
                  sizes="(max-width: 768px) 200px, 200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-1">Manan Jhaveri</h3>
              <p className="text-xs font-bold text-primary-purple tracking-wider uppercase mb-4">Co-Founder & Technology</p>
              
              <p className="text-gray-text text-sm leading-relaxed mb-6 max-w-xs">
                Technology should solve real problems—not create more complexity. At Safera, we&apos;re building products that people genuinely trust because they improve everyday life and empower women through thoughtful technology.
              </p>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/maira-club/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-text hover:text-white hover:bg-white/5 rounded-full transition-all" aria-label="Manan Jhaveri LinkedIn">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-text hover:text-white hover:bg-white/5 rounded-full transition-all" aria-label="Manan Jhaveri Twitter">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Founder 2: Snigdh Katiyar */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center p-8 rounded-3xl glass-card glass-card-hover relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-secondary-purple/5 rounded-full blur-[50px] pointer-events-none" />
              
              {/* Circular portrait with purple accent lighting via shadow/glow */}
              <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mb-6 border-2 border-secondary-purple/30 avatar-glow-secondary group-hover:border-secondary-purple/65 transition-colors duration-300">
                <Image
                  src="/images/founders/Snigdh.jpeg"
                  alt="Snigdh Katiyar"
                  fill
                  sizes="(max-width: 768px) 200px, 200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-1">Snigdh Katiyar</h3>
              <p className="text-xs font-bold text-secondary-purple tracking-wider uppercase mb-4">Co-Founder & Growth</p>
              
              <p className="text-gray-text text-sm leading-relaxed mb-6 max-w-xs">
                Every conversation with our community teaches us something new. Those insights shape every product we build, ensuring our products are driven by real experiences, empathy, and meaningful impact.
              </p>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/maira-club/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-text hover:text-white hover:bg-white/5 rounded-full transition-all" aria-label="Snigdh Katiyar LinkedIn">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-text hover:text-white hover:bg-white/5 rounded-full transition-all" aria-label="Snigdh Katiyar Twitter">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA section */}
      <section className="py-28 md:py-44 bg-transparent text-center relative overflow-hidden">
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-primary-purple/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-slow-glow" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Interested in what we are building?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-text text-base md:text-lg mb-12 max-w-xl mx-auto">
            We are always seeking feedback, partnerships, and conversations with people aligned with our mission.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="btn-premium-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all active:scale-[0.98] group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
