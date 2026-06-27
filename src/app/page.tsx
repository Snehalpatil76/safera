"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, Heart, EyeOff, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  // Fade-in animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="overflow-hidden bg-[#0B0B12] text-white">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[95vh] flex items-center py-20 md:py-32 border-b border-white/8">
        {/* Subtle background abstract gradient blur */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-purple/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-fade-in" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-fade-in" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8 items-center relative z-10">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-primary-purple bg-primary-purple/10 border border-primary-purple/20 self-start tracking-wider uppercase"
            >
              Introducing Safera
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15]"
            >
              Technology Built <br className="hidden md:inline" />
              Around{" "}
              <span className="bg-gradient-to-r from-primary-purple via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                Women&apos;s Real Lives.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-text text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Safera Technologies is a women-first technology company building digital products that solve real-world challenges through trusted communities, artificial intelligence, and thoughtful technology.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5 mt-4"
            >
              <Link
                href="/products"
                className="btn-premium-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold transition-all active:scale-[0.98]"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="btn-premium-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold transition-all active:scale-[0.98]"
              >
                About Safera
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Premium Ecosystem Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-md glass-card rounded-3xl p-8 overflow-hidden group shadow-2xl border-white/8 hover:border-primary-purple/20 transition-all duration-500">
              {/* Card border shine hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 via-transparent to-secondary-purple/5 opacity-60 pointer-events-none" />

              {/* SAFERA CENTER NODE */}
              <div className="relative flex flex-col items-center justify-center pb-6 border-b border-white/8 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary-purple to-secondary-purple flex items-center justify-center shadow-lg shadow-primary-purple/30 mb-4 animate-pulse">
                  <span className="text-white text-lg font-black tracking-widest">S</span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white">SAFERA</h2>
                <p className="text-[10px] text-primary-purple font-bold tracking-widest uppercase mt-1">
                  Women-first technology company
                </p>
              </div>

              {/* Ecosystem Grid */}
              <div className="mt-8 flex flex-col gap-5">
                {/* Cohop Item */}
                <div
                  onMouseEnter={() => setActiveProduct("cohop")}
                  onMouseLeave={() => setActiveProduct(null)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeProduct === "cohop"
                      ? "border-primary-purple/30 bg-[#15151E] shadow-[0_0_20px_rgba(139,92,246,0.15)] translate-x-1"
                      : "border-white/5 bg-white/2 hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-extrabold text-white text-sm tracking-wide flex items-center gap-2">
                        COHOP
                        <span className="text-[9px] bg-primary-purple/10 text-primary-purple px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Travel
                        </span>
                      </h3>
                      <p className="text-xs text-gray-text mt-2 leading-relaxed">
                        Helping women travel confidently through trusted, verified communities.
                      </p>
                    </div>
                    <Compass className={`w-4 h-4 transition-all duration-300 ${activeProduct === "cohop" ? "rotate-45 text-primary-purple scale-110" : "text-gray-text"}`} />
                  </div>
                </div>

                {/* Maira Item */}
                <div
                  onMouseEnter={() => setActiveProduct("maira")}
                  onMouseLeave={() => setActiveProduct(null)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeProduct === "maira"
                      ? "border-secondary-purple/30 bg-[#15151E] shadow-[0_0_20px_rgba(168,85,247,0.15)] translate-x-1"
                      : "border-white/5 bg-white/2 hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-extrabold text-white text-sm tracking-wide flex items-center gap-2">
                        MAIRA
                        <span className="text-[9px] bg-secondary-purple/10 text-secondary-purple px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          AI & Support
                        </span>
                      </h3>
                      <p className="text-xs text-gray-text mt-2 leading-relaxed">
                        A private AI-powered platform for safe guidance, anonymous sharing, and connection.
                      </p>
                    </div>
                    <Heart className={`w-4 h-4 transition-all duration-300 ${activeProduct === "maira" ? "scale-110 text-secondary-purple" : "text-gray-text"}`} />
                  </div>
                </div>

                {/* Future Products */}
                <div className="p-5 rounded-2xl border border-dashed border-white/10 bg-white/1 text-center">
                  <span className="inline-block text-[9px] font-bold tracking-wider text-gray-text/80 bg-white/5 border border-white/8 px-3 py-1 rounded-full mb-2 uppercase">
                    Future Products
                  </span>
                  <p className="text-xs text-gray-text">
                    Building the next generation of women-first technology.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SUMMARY */}
      <section className="py-24 md:py-36 bg-transparent border-b border-white/8 relative">
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-primary-purple/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 leading-tight">
                Built From <br />
                Real Conversations.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 text-gray-text text-base md:text-lg leading-relaxed">
              <p className="font-semibold text-white text-lg">
                Safera Technologies builds technology by listening first.
              </p>
              <p>
                Every product begins with understanding the everyday decisions, challenges, and experiences women navigate.
              </p>
              <p>
                From safer travel to trusted communities and AI-powered support, we create products that solve meaningful problems through thoughtful technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PRODUCTS */}
      <section className="py-24 md:py-36 bg-[#15151E]/20 border-b border-white/8 relative">
        {/* Subtle grid layout background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-secondary-purple/5 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl mb-20">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 mb-5">
              Explore Our Digital Products
            </h2>
            <p className="text-gray-text text-base md:text-lg max-w-xl">
              Each product addresses a different challenge while contributing to a shared mission of empowering women through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Card 1: Cohop */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card glass-card-hover rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[450px]"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/20">
                    <Compass className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-white">Cohop</h3>
                </div>
                
                <h4 className="text-xl font-bold text-primary-purple tracking-tight leading-snug mb-4">
                  Travel. Explore. Safer. Together.
                </h4>
                
                <p className="text-gray-text text-sm md:text-base leading-relaxed mb-8">
                  A verified travel community helping women discover destinations, connect with fellow travellers, and explore confidently through trusted recommendations and local communities.
                </p>
              </div>

              <Link
                href="/products#cohop"
                className="inline-flex items-center gap-2 font-semibold text-sm text-primary-purple hover:text-white group/link mt-auto self-start transition-all"
              >
                Visit Cohop
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Card 2: Maira */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card glass-card-hover rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[450px]"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-secondary-purple/10 flex items-center justify-center text-secondary-purple border border-secondary-purple/20">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-white">Maira</h3>
                </div>
                
                <h4 className="text-xl font-bold text-secondary-purple tracking-tight leading-snug mb-4">
                  A Place Where Women Can Simply Be Honest.
                </h4>
                
                <p className="text-gray-text text-sm md:text-base leading-relaxed mb-8">
                  A private AI-powered platform where women can seek guidance, share lived experiences, ask questions anonymously, and receive meaningful support from both technology and community.
                </p>
              </div>

              <Link
                href="/products#maira"
                className="inline-flex items-center gap-2 font-semibold text-sm text-secondary-purple hover:text-white group/link mt-auto self-start transition-all"
              >
                Visit Maira
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Coming Soon Teaser */}
          <div className="mt-20 text-center border-t border-white/8 pt-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-text bg-white/5 border border-white/8 tracking-wider uppercase">
              Coming Soon
            </span>
            <p className="text-gray-text text-sm md:text-base mt-4">
              More women-first products are already in development.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR PRINCIPLES */}
      <section className="py-24 md:py-36 bg-transparent border-b border-white/8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-purple/3 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Standards</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              What Guides Every Product
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Principle 1 */}
            <div className="p-8 rounded-2xl border border-white/8 bg-[#15151E]/40 hover:bg-[#15151E]/85 hover:border-primary-purple/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Built on Trust</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Everything starts with creating safer, more reliable experiences.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-8 rounded-2xl border border-white/8 bg-[#15151E]/40 hover:bg-[#15151E]/85 hover:border-primary-purple/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Women-First by Design</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Built around real experiences, not assumptions.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-8 rounded-2xl border border-white/8 bg-[#15151E]/40 hover:bg-[#15151E]/85 hover:border-primary-purple/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Privacy by Default</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Technology should protect people before collecting data.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-8 rounded-2xl border border-white/8 bg-[#15151E]/40 hover:bg-[#15151E]/85 hover:border-primary-purple/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Community Confidence</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Support grows stronger when women help women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FUTURE VISION */}
      <section className="py-28 md:py-44 bg-transparent relative overflow-hidden">
        {/* Subtle background abstract shape */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
          <div className="w-[1000px] h-[400px] bg-gradient-to-tr from-primary-purple/10 to-secondary-purple/10 rounded-full blur-[140px] animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Future</span>
          <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mt-4 mb-8 leading-tight">
            Building What&apos;s Next.
          </h2>
          <p className="text-gray-text text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Cohop and Maira are only the beginning. Safera Technologies is building an ecosystem of thoughtful digital products focused on helping women travel confidently, connect safely, and navigate everyday life with greater support.
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
