"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Heart, Zap, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Careers() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-28 border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl flex flex-col gap-6"
          >
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-text leading-tight">
              Life at Safera
            </h1>
            <p className="text-gray-text text-lg md:text-xl leading-relaxed">
              We are a team of product designers, researchers, and engineers building the next generation of digital products designed around women's real lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-28 bg-soft-lavender/20 border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Culture</span>
            <h2 className="text-3xl font-extrabold text-dark-text tracking-tight mt-3">
              Why Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-safera-border/60">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2">Build With Purpose</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Work on digital products that directly impact safety, confidence, and community support for women worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-safera-border/60">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2">Trust & Autonomy</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                We are a remote-friendly organization that measures productivity through outputs, respect, and mutual collaboration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-safera-border/60">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple mb-5">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2">Inclusive Growth</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Our team represents diverse experiences and views, ensuring that our workplace is just as supportive as the apps we create.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-safera-border/60">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2">High Standards</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                We focus on premium design aesthetics, clean codebases, accessibility, and high performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities (Empty State) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Open Positions</span>
            <h2 className="text-3xl font-extrabold text-dark-text tracking-tight mt-3">
              Current Opportunities
            </h2>
          </div>

          <div className="bg-zinc-50/50 border border-dashed border-safera-border rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <HelpCircle className="w-10 h-10 text-gray-text/60 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-dark-text mb-2">No Open Roles Yet</h3>
            <p className="text-gray-text text-sm md:text-base leading-relaxed mb-8">
              We're always looking for passionate people building technology with purpose. If you are aligned with our mission and want to collaborate, we want to hear from you.
            </p>
            <Link
              href="/contact?ref=careers"
              className="inline-flex items-center gap-1.5 px-6 py-3 font-semibold text-sm text-white bg-primary-purple hover:bg-primary-purple/90 rounded-xl transition-all shadow-sm"
            >
              Send Your Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
