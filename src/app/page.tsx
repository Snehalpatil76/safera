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
    <div className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-white py-16 md:py-24 border-b border-safera-border/40">
        {/* Subtle background abstract gradient blur */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-soft-lavender/40 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-secondary-purple/5 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-purple bg-soft-lavender border border-primary-purple/10 self-start"
            >
              Introducing Safera
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-text leading-[1.1]"
            >
              Technology Built Around <br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-primary-purple to-secondary-purple bg-clip-text text-transparent">
                Women's Real Lives.
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
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-primary-purple hover:bg-primary-purple/90 rounded-xl transition-all shadow-sm hover:shadow-lg hover:shadow-primary-purple/15 active:scale-[0.98]"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-dark-text bg-white hover:bg-soft-lavender/50 border border-safera-border hover:border-primary-purple/20 rounded-xl transition-all active:scale-[0.98]"
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
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md bg-white border border-safera-border shadow-2xl rounded-3xl p-8 overflow-hidden group">
              {/* Card border shine hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 via-transparent to-secondary-purple/5 opacity-60 pointer-events-none" />

              {/* SAFERA CENTER NODE */}
              <div className="relative flex flex-col items-center justify-center pb-6 border-b border-safera-border/60 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-purple to-secondary-purple flex items-center justify-center shadow-lg shadow-primary-purple/20 mb-3">
                  <span className="text-white text-base font-black tracking-widest">S</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight text-dark-text">SAFERA</h2>
                <p className="text-xs text-primary-purple font-medium tracking-wide uppercase mt-0.5">
                  Women-first technology company
                </p>
              </div>

              {/* Ecosystem Grid */}
              <div className="mt-6 flex flex-col gap-4">
                {/* Cohop Item */}
                <div
                  onMouseEnter={() => setActiveProduct("cohop")}
                  onMouseLeave={() => setActiveProduct(null)}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    activeProduct === "cohop"
                      ? "border-primary-purple bg-soft-lavender/40 shadow-sm translate-x-1"
                      : "border-safera-border/60 hover:border-safera-border hover:bg-zinc-50/50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-dark-text text-sm tracking-tight flex items-center gap-1.5">
                        COHOP
                        <span className="text-[10px] bg-primary-purple/10 text-primary-purple px-1.5 py-0.5 rounded font-semibold">
                          Travel
                        </span>
                      </h3>
                      <p className="text-xs text-gray-text mt-1.5 leading-relaxed">
                        Helping women travel confidently through trusted, verified communities.
                      </p>
                    </div>
                    <Compass className={`w-4 h-4 transition-transform duration-300 ${activeProduct === "cohop" ? "rotate-45 text-primary-purple" : "text-gray-text/75"}`} />
                  </div>
                </div>

                {/* Maira Item */}
                <div
                  onMouseEnter={() => setActiveProduct("maira")}
                  onMouseLeave={() => setActiveProduct(null)}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    activeProduct === "maira"
                      ? "border-primary-purple bg-soft-lavender/40 shadow-sm translate-x-1"
                      : "border-safera-border/60 hover:border-safera-border hover:bg-zinc-50/50"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-dark-text text-sm tracking-tight flex items-center gap-1.5">
                        MAIRA
                        <span className="text-[10px] bg-secondary-purple/10 text-secondary-purple px-1.5 py-0.5 rounded font-semibold">
                          AI & Support
                        </span>
                      </h3>
                      <p className="text-xs text-gray-text mt-1.5 leading-relaxed">
                        A private AI-powered platform for safe guidance, anonymous sharing, and connection.
                      </p>
                    </div>
                    <Heart className={`w-4 h-4 transition-transform duration-300 ${activeProduct === "maira" ? "scale-110 text-secondary-purple" : "text-gray-text/75"}`} />
                  </div>
                </div>

                {/* Future Products */}
                <div className="p-4 rounded-2xl border border-dashed border-safera-border/80 bg-zinc-50/30 text-center">
                  <span className="inline-block text-xs font-semibold text-gray-text/80 bg-white border border-safera-border/50 px-2.5 py-1 rounded-full mb-1">
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
      <section className="py-20 md:py-28 bg-white border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text tracking-tight mt-3">
                Built From <br />
                Real Conversations.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 text-gray-text text-base md:text-lg leading-relaxed">
              <p className="font-medium text-dark-text">
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
      <section className="py-20 md:py-28 bg-soft-lavender/30 border-b border-safera-border/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text tracking-tight mt-3 mb-4">
              Explore Our Digital Products
            </h2>
            <p className="text-gray-text text-base">
              Each product addresses a different challenge while contributing to a shared mission of empowering women through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Cohop */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-safera-border/80 shadow-sm hover:shadow-xl rounded-3xl p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-dark-text">Cohop</h3>
                </div>
                
                <h4 className="text-lg font-bold text-primary-purple tracking-tight leading-snug mb-4">
                  Travel. Explore. Safer. Together.
                </h4>
                
                <p className="text-gray-text text-sm md:text-base leading-relaxed mb-8">
                  A verified travel community helping women discover destinations, connect with fellow travellers, and explore confidently through trusted recommendations and local communities.
                </p>
              </div>

              <Link
                href="/products#cohop"
                className="inline-flex items-center gap-1.5 font-semibold text-sm text-primary-purple hover:text-primary-purple/80 group/link mt-auto self-start"
              >
                Visit Cohop
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Card 2: Maira */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-safera-border/80 shadow-sm hover:shadow-xl rounded-3xl p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-secondary-purple">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-dark-text">Maira</h3>
                </div>
                
                <h4 className="text-lg font-bold text-secondary-purple tracking-tight leading-snug mb-4">
                  A Place Where Women Can Simply Be Honest.
                </h4>
                
                <p className="text-gray-text text-sm md:text-base leading-relaxed mb-8">
                  A private AI-powered platform where women can seek guidance, share lived experiences, ask questions anonymously, and receive meaningful support from both technology and community.
                </p>
              </div>

              <Link
                href="/products#maira"
                className="inline-flex items-center gap-1.5 font-semibold text-sm text-secondary-purple hover:text-secondary-purple/80 group/link mt-auto self-start"
              >
                Visit Maira
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Coming Soon Teaser */}
          <div className="mt-16 text-center border-t border-safera-border/50 pt-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-gray-text bg-white border border-safera-border self-start">
              Coming Soon
            </span>
            <p className="text-gray-text text-sm mt-3">
              More women-first products are already in development.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR PRINCIPLES */}
      <section className="py-20 md:py-28 bg-white border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Standards</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text tracking-tight mt-3">
              What Guides Every Product
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Principle 1 */}
            <div className="p-6 rounded-2xl border border-safera-border/60 bg-white hover:border-primary-purple/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple mb-5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2">Built on Trust</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Everything starts with creating safer, more reliable experiences.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-6 rounded-2xl border border-safera-border/60 bg-white hover:border-primary-purple/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2">Women-First by Design</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Built around real experiences, not assumptions.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-6 rounded-2xl border border-safera-border/60 bg-white hover:border-primary-purple/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple mb-5">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2">Privacy by Default</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Technology should protect people before collecting data.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-6 rounded-2xl border border-safera-border/60 bg-white hover:border-primary-purple/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple mb-5">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-dark-text text-base mb-2">Community Creates Confidence</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Support grows stronger when women help women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FUTURE VISION */}
      <section className="py-20 md:py-32 bg-white relative">
        {/* Subtle background abstract shape */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
          <div className="w-[800px] h-[300px] bg-gradient-to-tr from-primary-purple/5 to-secondary-purple/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Future</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text tracking-tight mt-3 mb-6">
            Building What's Next.
          </h2>
          <p className="text-gray-text text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Cohop and Maira are only the beginning. Safera Technologies is building an ecosystem of thoughtful digital products focused on helping women travel confidently, connect safely, and navigate everyday life with greater support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-7 py-4 text-base font-semibold text-white bg-primary-purple hover:bg-primary-purple/90 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-primary-purple/15 active:scale-[0.98]"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
