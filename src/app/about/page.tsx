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
            <motion.span
              variants={fadeInUp}
              className="text-xs font-bold text-primary-purple tracking-widest uppercase"
            >
              Who We Are
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-text leading-tight"
            >
              Building Technology <br className="hidden md:inline" />
              With Genuine Purpose.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-text text-lg md:text-xl leading-relaxed"
            >
              Safera Technologies is a women-first technology company. We build digital products that address genuine everyday decisions, challenges, and experiences by focusing on safety, trusted communities, and artificial intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-soft-lavender/20 border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-white border border-safera-border/60 p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Mission</span>
            <h2 className="text-2xl font-bold text-dark-text mt-3 mb-5">Our Mission</h2>
            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              To create digital spaces and products where women can connect safely, explore confidently, and navigate daily life with greater support, safety, and mutual agency. We solve real-world problems by listening first.
            </p>
          </div>

          <div className="bg-white border border-safera-border/60 p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold text-secondary-purple tracking-widest uppercase">The Vision</span>
            <h2 className="text-2xl font-bold text-dark-text mt-3 mb-5">Our Vision</h2>
            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              To define the future of women-first technology—proving that software built with trust, safety, and community at its core creates a better, more supportive digital experience for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 md:py-28 bg-white border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Pillars</span>
            <h2 className="text-3xl font-extrabold text-dark-text tracking-tight mt-3">
              Core Principles
            </h2>
            <p className="text-gray-text text-sm mt-3">
              These guidelines represent the foundation of every product we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Built on Trust</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  Everything starts with safety. We believe that digital tools should provide robust verification mechanisms to build secure, trustworthy spaces for real-world interactions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Women-First by Design</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  We research and design with lived experiences as the primary benchmark. By understanding women's actual needs, we create features that provide practical and genuine solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple shrink-0">
                <EyeOff className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Privacy by Default</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  Data tracking and commercial profiling are replaced with strict user controls. We protect identity first and give users absolute control over their conversations and recommendations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark-text mb-2">Community Creates Confidence</h3>
                <p className="text-gray-text text-sm md:text-base leading-relaxed">
                  We believe that the most powerful digital support system is shared experience. Our products nurture communities where peer-to-peer encouragement creates confidence in decision making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ecosystem Summary */}
      <section className="py-20 md:py-28 bg-soft-lavender/10 border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Ecosystem</span>
          <h2 className="text-3xl font-extrabold text-dark-text tracking-tight mt-3 mb-6">
            Focused Digital Products
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Our current suite includes **Cohop**, a verified community for collaborative and confident travel, and **Maira**, a private space for guidance and peer-to-peer sharing.
          </p>
          <div className="flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 px-6 py-3 font-semibold text-sm text-white bg-primary-purple hover:bg-primary-purple/90 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-primary-purple/15"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 md:py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text tracking-tight mb-6">
            Interested in what we are building?
          </h2>
          <p className="text-gray-text text-base md:text-lg mb-8 max-w-xl mx-auto">
            We are always seeking feedback, partnerships, and conversations with people aligned with our mission.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-7 py-3.5 text-base font-semibold text-white bg-primary-purple hover:bg-primary-purple/90 rounded-xl transition-all shadow-md"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
