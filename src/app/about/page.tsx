"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, EyeOff, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="overflow-hidden bg-[#0B0B12] text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 border-b border-white/8">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        
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
              Who We Are
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15]"
            >
              Building Technology <br className="hidden md:inline" />
              With Genuine Purpose.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-text text-lg md:text-xl leading-relaxed mt-4"
            >
              Safera Technologies is a women-first technology company. We build digital products that address genuine everyday decisions, challenges, and experiences by focusing on safety, trusted communities, and artificial intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-36 bg-[#15151E]/20 border-b border-white/8 relative">
        <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative z-10">
          <div className="glass-card glass-card-hover p-8 md:p-12 rounded-3xl shadow-2xl">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Mission</span>
            <h2 className="text-3xl font-extrabold text-white mt-4 mb-6">Our Mission</h2>
            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              To create digital spaces and products where women can connect safely, explore confidently, and navigate daily life with greater support, safety, and mutual agency. We solve real-world problems by listening first.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 md:p-12 rounded-3xl shadow-2xl">
            <span className="text-xs font-bold text-secondary-purple tracking-widest uppercase">The Vision</span>
            <h2 className="text-3xl font-extrabold text-white mt-4 mb-6">Our Vision</h2>
            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              To define the future of women-first technology—proving that software built with trust, safety, and community at its core creates a better, more supportive digital experience for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 md:py-36 bg-transparent border-b border-white/8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-purple/3 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Pillars</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Core Principles
            </h2>
            <p className="text-gray-text text-sm md:text-base mt-4">
              These guidelines represent the foundation of every product we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex gap-5 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15 shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Built on Trust</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  Everything starts with safety. We believe that digital tools should provide robust verification mechanisms to build secure, trustworthy spaces for real-world interactions.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15 shrink-0">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Women-First by Design</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  We research and design with lived experiences as the primary benchmark. By understanding women&apos;s actual needs, we create features that provide practical and genuine solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15 shrink-0">
                <EyeOff className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Privacy by Default</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  Data tracking and commercial profiling are replaced with strict user controls. We protect identity first and give users absolute control over their conversations and recommendations.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15 shrink-0">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white mb-3">Community Confidence</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  We believe that the most powerful digital support system is shared experience. Our products nurture communities where peer-to-peer encouragement creates confidence in decision making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ecosystem Summary */}
      <section className="py-24 md:py-36 bg-[#15151E]/20 border-b border-white/8 relative">
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 mb-6">
            Focused Digital Products
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Our current suite includes **Cohop**, a verified community for collaborative and confident travel, and **Maira**, a private space for guidance and peer-to-peer sharing.
          </p>
          <div className="flex justify-center">
            <Link
              href="/products"
              className="btn-premium-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all active:scale-[0.98]"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-28 md:py-44 bg-transparent text-center relative overflow-hidden">
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-primary-purple/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Interested in what we are building?
          </h2>
          <p className="text-gray-text text-base md:text-lg mb-12 max-w-xl mx-auto">
            We are always seeking feedback, partnerships, and conversations with people aligned with our mission.
          </p>
          <Link
            href="/contact"
            className="btn-premium-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all active:scale-[0.98]"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
