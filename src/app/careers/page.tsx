"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Heart, Zap, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Careers() {
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
      <section className="relative py-24 md:py-36 border-b border-white/8">
        {/* Subtle background glow */}
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
              Careers
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15]"
            >
              Life at Safera
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-text text-lg md:text-xl leading-relaxed mt-4"
            >
              We are a team of product designers, researchers, and engineers building the next generation of digital products designed around women&apos;s real lives.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 md:py-36 bg-[#15151E]/20 border-b border-white/8 relative">
        <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-slow-glow" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        >
          <motion.div variants={fadeInUp} className="max-w-xl mb-20">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Culture</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Why Work With Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp} className="glass-card glass-card-hover p-8 rounded-2xl shadow-xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Build With Purpose</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Work on digital products that directly impact safety, confidence, and community support for women worldwide.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover p-8 rounded-2xl shadow-xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Trust & Autonomy</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                We are a remote-friendly organization that measures productivity through outputs, respect, and mutual collaboration.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover p-8 rounded-2xl shadow-xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15 shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Inclusive Growth</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Our team represents diverse experiences and views, ensuring that our workplace is just as supportive as the apps we create.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover p-8 rounded-2xl shadow-xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">High Standards</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                We focus on premium design aesthetics, clean codebases, accessibility, and high performance.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Current Opportunities (Empty State) */}
      <section className="py-28 md:py-44 bg-transparent relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary-purple/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-slow-glow" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Open Positions</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              Current Opportunities
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card glass-card-hover border-dashed border-white/10 rounded-3xl p-8 md:p-14 text-center max-w-2xl mx-auto relative overflow-hidden shadow-2xl">
            <HelpCircle className="w-12 h-12 text-primary-purple/80 mx-auto mb-6" />
            <h3 className="text-2xl font-extrabold text-white mb-3">No Open Roles Yet</h3>
            <p className="text-gray-text text-base leading-relaxed mb-10">
              We&apos;re always looking for passionate people building technology with purpose. If you are aligned with our mission and want to collaborate, we want to hear from you.
            </p>
            <Link
              href="/contact?ref=careers"
              className="btn-premium-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all active:scale-[0.98] group"
            >
              Send Your Profile
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
