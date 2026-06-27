"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, ShieldAlert, Heart, EyeOff, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeClient() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  // Fade-in animation variants
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
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[95vh] flex items-center py-20 md:py-32 border-b border-white/8">
        {/* Subtle background abstract gradient blur */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-purple/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-slow-glow" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-slow-glow" />

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
                className="btn-premium-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold transition-all active:scale-[0.98] group"
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

          {/* Right Side: Premium Photographic Collage & Sync Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 flex justify-center w-full relative min-h-[480px] lg:min-h-[550px]"
          >
            {/* Ambient Purple glows */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary-purple/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-slow-glow" />
            <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-secondary-purple/10 rounded-full blur-[90px] pointer-events-none -z-10 animate-slow-glow" />

            <div className="relative w-full max-w-md h-full min-h-[450px] flex items-center justify-center">
              {/* Image 1: Cafe Workspace (linked to Maira) */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: -3,
                  scale: activeProduct === "maira" ? 1.05 : activeProduct === "cohop" ? 0.92 : 1,
                  filter: activeProduct === "cohop" ? "brightness(0.6) blur(2px)" : "brightness(1) blur(0px)",
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.4, ease: "easeOut" },
                  filter: { duration: 0.4 },
                }}
                className={`absolute top-0 left-0 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 ${
                  activeProduct === "maira"
                    ? "border-secondary-purple/50 shadow-secondary-purple/20 z-30"
                    : "border-white/10 z-10"
                }`}
              >
                <Image
                  src="/images/hero_cafe.png"
                  alt="Indian woman working in cafe"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12]/80 via-[#0B0B12]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[9px] font-bold text-secondary-purple bg-secondary-purple/15 border border-secondary-purple/25 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Maira AI Workspace
                  </span>
                </div>
              </motion.div>

              {/* Image 2: Travel (linked to Cohop) */}
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: 4,
                  scale: activeProduct === "cohop" ? 1.05 : activeProduct === "maira" ? 0.92 : 1,
                  filter: activeProduct === "maira" ? "brightness(0.6) blur(2px)" : "brightness(1) blur(0px)",
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  scale: { duration: 0.4, ease: "easeOut" },
                  filter: { duration: 0.4 },
                }}
                className={`absolute bottom-0 right-0 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 ${
                  activeProduct === "cohop"
                    ? "border-primary-purple/50 shadow-primary-purple/20 z-30"
                    : "border-white/10 z-20"
                }`}
              >
                <Image
                  src="/images/hero_travel.png"
                  alt="Indian woman traveling"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12]/80 via-[#0B0B12]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[9px] font-bold text-primary-purple bg-primary-purple/15 border border-primary-purple/25 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Cohop Travel
                  </span>
                </div>
              </motion.div>

              {/* Floating Interaction Badges in the Center */}
              <div className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 w-[85%] max-w-[270px]">
                {/* Cohop Badge */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  onMouseEnter={() => setActiveProduct("cohop")}
                  onMouseLeave={() => setActiveProduct(null)}
                  className={`glass-card p-4 rounded-2xl border cursor-pointer backdrop-blur-xl transition-all duration-300 ${
                    activeProduct === "cohop"
                      ? "border-primary-purple/40 bg-[#15151E]/95 shadow-[0_0_30px_rgba(139,92,246,0.3)] scale-[1.03]"
                      : "border-white/8 bg-[#15151E]/65 hover:border-white/20"
                  }`}
                >
                  <div className="flex justify-between items-center gap-3">
                    <div>
                      <h3 className="font-extrabold text-white text-xs tracking-wider flex items-center gap-1.5">
                        COHOP
                        <span className="text-[8px] bg-primary-purple/15 text-primary-purple px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                          Travel
                        </span>
                      </h3>
                      <p className="text-[10px] text-gray-text mt-1 leading-normal">
                        Safe commuting, hubs & verified travel matching.
                      </p>
                    </div>
                    <Compass className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeProduct === "cohop" ? "rotate-45 text-primary-purple scale-110" : "text-gray-text"}`} />
                  </div>
                </motion.div>

                {/* Maira Badge */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  onMouseEnter={() => setActiveProduct("maira")}
                  onMouseLeave={() => setActiveProduct(null)}
                  className={`glass-card p-4 rounded-2xl border cursor-pointer backdrop-blur-xl transition-all duration-300 ${
                    activeProduct === "maira"
                      ? "border-secondary-purple/40 bg-[#15151E]/95 shadow-[0_0_30px_rgba(168,85,247,0.3)] scale-[1.03]"
                      : "border-white/8 bg-[#15151E]/65 hover:border-white/20"
                  }`}
                >
                  <div className="flex justify-between items-center gap-3">
                    <div>
                      <h3 className="font-extrabold text-white text-xs tracking-wider flex items-center gap-1.5">
                        MAIRA
                        <span className="text-[8px] bg-secondary-purple/15 text-secondary-purple px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                          AI Support
                        </span>
                      </h3>
                      <p className="text-[10px] text-gray-text mt-1 leading-normal">
                        Anonymous sharing, guidance & wellness support.
                      </p>
                    </div>
                    <Heart className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeProduct === "maira" ? "scale-110 text-secondary-purple" : "text-gray-text"}`} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SUMMARY */}
      <section className="py-24 md:py-36 bg-transparent border-b border-white/8 relative overflow-hidden">
        {/* Soft decorative blur */}
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-slow-glow" />
        <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-secondary-purple/3 rounded-full blur-[100px] pointer-events-none -z-10 animate-slow-glow" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="flex flex-col gap-6">
              <motion.span variants={fadeInUp} className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Philosophy</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Built From <br />
                Real Conversations.
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex flex-col gap-5 text-gray-text text-base md:text-lg leading-relaxed mt-2">
                <p className="font-semibold text-white text-lg">
                  Safera Technologies builds technology by listening first.
                </p>
                <p>
                  Every product begins with understanding the everyday decisions, challenges, and experiences women navigate.
                </p>
                <p>
                  From safer travel to trusted communities and AI-powered support, we create products that solve meaningful problems through thoughtful technology.
                </p>
              </motion.div>
            </div>

            {/* Right: Premium Image */}
            <motion.div variants={fadeInUp} className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-purple/10 to-transparent opacity-60 z-10 pointer-events-none" />
              <Image
                src="/images/about_collaboration.png"
                alt="Indian women collaborating in a modern tech workspace"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12]/40 via-transparent to-transparent z-10" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: OUR PRODUCTS */}
      <section className="py-24 md:py-36 bg-[#15151E]/20 border-b border-white/8 relative">
        {/* Subtle grid layout background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-secondary-purple/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-slow-glow" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        >
          <motion.div variants={fadeInUp} className="max-w-2xl mb-20">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 mb-5">
              Explore Our Digital Products
            </h2>
            <p className="text-gray-text text-base md:text-lg max-w-xl">
              Each product addresses a different challenge while contributing to a shared mission of empowering women through technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Card 1: Cohop */}
            <motion.div variants={fadeInUp} className="product-card-premium rounded-3xl flex flex-col justify-between min-h-[520px] overflow-hidden group">
              {/* Image visual header */}
              <div className="relative w-full h-48 border-b border-white/5 overflow-hidden">
                <Image
                  src="/images/product_cohop_mockup.png"
                  alt="Cohop Travel mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15151E] via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15">
                      <Compass className="w-5 h-5 animate-spin-slow" />
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white">Cohop</h3>
                  </div>
                  
                  <h4 className="text-lg font-bold text-primary-purple tracking-tight leading-snug mb-3">
                    Travel. Explore. Safer. Together.
                  </h4>
                  
                  <p className="text-gray-text text-sm leading-relaxed mb-6">
                    A verified travel community helping women discover destinations, connect with fellow travellers, and explore confidently through trusted recommendations and local communities.
                  </p>
                </div>

                <a
                  href="https://cohop.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-primary-purple hover:text-white group/link mt-auto self-start transition-all"
                >
                  Visit Cohop
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Card 2: Maira */}
            <motion.div variants={fadeInUp} className="product-card-premium rounded-3xl flex flex-col justify-between min-h-[520px] overflow-hidden group">
              {/* Image visual header */}
              <div className="relative w-full h-48 border-b border-white/5 overflow-hidden">
                <Image
                  src="/images/product_maira_mockup.png"
                  alt="Maira AI support mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15151E] via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary-purple/10 flex items-center justify-center text-secondary-purple border border-secondary-purple/15">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white">Maira</h3>
                  </div>
                  
                  <h4 className="text-lg font-bold text-secondary-purple tracking-tight leading-snug mb-3">
                    A Place Where Women Can Simply Be Honest.
                  </h4>
                  
                  <p className="text-gray-text text-sm leading-relaxed mb-6">
                    A private AI-powered platform where women can seek guidance, share lived experiences, ask questions anonymously, and receive meaningful support from both technology and community.
                  </p>
                </div>

                <a
                  href="https://maira.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-secondary-purple hover:text-white group/link mt-auto self-start transition-all"
                >
                  Visit Maira
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Coming Soon Teaser */}
          <motion.div variants={fadeInUp} className="mt-20 text-center border-t border-white/8 pt-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-text bg-white/5 border border-white/8 tracking-wider uppercase">
              Coming Soon
            </span>
            <p className="text-gray-text text-sm md:text-base mt-4">
              More women-first products are already in development.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4: OUR PRINCIPLES */}
      <section className="py-24 md:py-36 bg-transparent border-b border-white/8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-purple/3 rounded-full blur-[120px] pointer-events-none -z-10 animate-slow-glow" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 md:px-12"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">Our Standards</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
              What Guides Every Product
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Principle 1 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl glass-card glass-card-hover shadow-xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Built on Trust</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Everything starts with creating safer, more reliable experiences.
              </p>
            </motion.div>

            {/* Principle 2 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl glass-card glass-card-hover shadow-xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Women-First by Design</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Built around real experiences, not assumptions.
              </p>
            </motion.div>

            {/* Principle 3 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl glass-card glass-card-hover shadow-xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Privacy by Default</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Technology should protect people before collecting data.
              </p>
            </motion.div>

            {/* Principle 4 */}
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl glass-card glass-card-hover shadow-xl flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple mb-6 border border-primary-purple/15">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-white text-lg mb-3">Community Confidence</h3>
              <p className="text-gray-text text-sm leading-relaxed">
                Support grows stronger when women help women.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: FUTURE VISION */}
      <section className="py-28 md:py-44 bg-transparent relative overflow-hidden">
        {/* Subtle background abstract shape */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
          <div className="w-[1000px] h-[400px] bg-gradient-to-tr from-primary-purple/10 to-secondary-purple/10 rounded-full blur-[140px] animate-slow-glow" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <motion.span variants={fadeInUp} className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Future</motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mt-4 mb-8 leading-tight">
            Building What&apos;s Next.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-text text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Cohop and Maira are only the beginning. Safera Technologies is building an ecosystem of thoughtful digital products focused on helping women travel confidently, connect safely, and navigate everyday life with greater support.
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
