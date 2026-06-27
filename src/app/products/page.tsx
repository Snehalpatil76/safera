"use client";

import React from "react";
import Link from "next/link";
import { Compass, Heart, ArrowRight, ShieldCheck, CheckCircle2, MessageSquareText, HelpCircle, Users2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
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
    <div className="overflow-hidden bg-[#0B0B12] text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 border-b border-white/8">
        {/* Ambient background glow */}
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
              Our Products
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15]"
            >
              An Ecosystem Built <br className="hidden md:inline" />
              For Real Impact.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-text text-lg md:text-xl leading-relaxed mt-4"
            >
              We design and construct digital products focused on solving real-world challenges through trusted communities, artificial intelligence, and privacy-first engineering.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cohop Details Section */}
      <section id="cohop" className="py-24 md:py-36 bg-transparent border-b border-white/8 scroll-mt-20 relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          {/* Cohop Left - Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center text-primary-purple border border-primary-purple/15">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold tracking-wider text-primary-purple uppercase">Cohop</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Travel. Explore. Safer. Together.
            </h2>
            
            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              Cohop is a verified travel community that enables women to explore the world with confidence. Rather than traveling alone or navigating unverified reviews, Cohop connects travelers with verified peers and trusted local experts.
            </p>

            <ul className="flex flex-col gap-5 text-gray-text mt-4">
              <li className="flex gap-4 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-primary-purple shrink-0 mt-1" />
                <span><strong className="text-white">Verified Profiles:</strong> Strict background checks and identity verification for community integrity.</span>
              </li>
              <li className="flex gap-4 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-primary-purple shrink-0 mt-1" />
                <span><strong className="text-white">Trusted Recommendations:</strong> Travel itineraries and safety ratings created by and for women.</span>
              </li>
              <li className="flex gap-4 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-primary-purple shrink-0 mt-1" />
                <span><strong className="text-white">Local Hubs:</strong> Meet and connect with trusted local female guides and hosts in destination cities.</span>
              </li>
            </ul>
          </div>

          {/* Cohop Right - Mock Interface Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md glass-card rounded-3xl p-6 shadow-2xl relative border-white/8 hover:border-primary-purple/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary-purple/5 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="bg-[#15151E]/60 border border-white/8 rounded-2xl p-5 shadow-sm mb-5 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-purple/10 flex items-center justify-center text-primary-purple text-xs font-bold border border-primary-purple/25">
                      A
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        Ananya Sen
                        <ShieldCheck className="w-4 h-4 text-primary-purple" />
                      </h4>
                      <p className="text-[10px] text-gray-text">Verified Member since 2025</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-primary-purple bg-primary-purple/10 border border-primary-purple/20 px-2.5 py-1 rounded-full">
                    Shimla Trip
                  </span>
                </div>
                <p className="text-xs text-gray-text leading-relaxed">
                  &quot;Traveling with my Cohop group was the most empowering trip I&apos;ve had. The local guide verified by the platform was amazing!&quot;
                </p>
              </div>

              {/* Trip Cards Container */}
              <div className="bg-[#15151E]/60 border border-white/8 rounded-2xl p-5 shadow-sm relative z-10">
                <h5 className="text-[10px] font-bold text-gray-text uppercase tracking-widest mb-4">Popular Trusted Itineraries</h5>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-white/8 pb-3">
                    <div>
                      <h6 className="text-xs font-semibold text-white">Kerala Backwaters Exploration</h6>
                      <p className="text-[10px] text-gray-text mt-0.5">4.9 ★ (120 reviews) • 5 Days</p>
                    </div>
                    <Compass className="w-4 h-4 text-primary-purple" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-semibold text-white">Heritage & Culture in Jaipur</h6>
                      <p className="text-[10px] text-gray-text mt-0.5">4.8 ★ (98 reviews) • 3 Days</p>
                    </div>
                    <Compass className="w-4 h-4 text-primary-purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maira Details Section */}
      <section id="maira" className="py-24 md:py-36 bg-[#15151E]/20 border-b border-white/8 scroll-mt-20 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary-purple/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          {/* Maira Left - Mock Interface Card */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md glass-card rounded-3xl p-6 shadow-2xl relative border-white/8 hover:border-secondary-purple/20 transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-secondary-purple/5 rounded-full blur-[60px] pointer-events-none" />
              
              {/* Anonymous Question Mockup */}
              <div className="flex flex-col gap-5 relative z-10">
                <div className="bg-white/3 border border-white/5 rounded-2xl p-5 self-start max-w-[85%]">
                  <div className="flex items-center gap-2 text-gray-text text-[10px] font-bold tracking-widest uppercase mb-2">
                    <Users2 className="w-4 h-4 text-secondary-purple" />
                    Anonymous Ask
                  </div>
                  <p className="text-xs text-white leading-relaxed">
                    How do I negotiate a salary increase in a remote tech job where performance targets were surpassed, but the budget is rumored to be tight?
                  </p>
                </div>

                <div className="bg-secondary-purple/10 border border-secondary-purple/20 rounded-2xl p-5 self-end max-w-[85%]">
                  <div className="flex items-center gap-2 text-secondary-purple text-[10px] font-bold tracking-widest uppercase mb-2">
                    <MessageSquareText className="w-4 h-4" />
                    Maira AI guidance
                  </div>
                  <p className="text-xs text-white leading-relaxed">
                    Start by documenting your exact metrics. Frame the conversation around future value and market rate rather than budget rumors. We&apos;ve compiled 3 verified negotiation templates...
                  </p>
                </div>

                {/* Feedback Panel */}
                <div className="border border-dashed border-white/10 rounded-xl p-4 flex justify-between items-center bg-[#0B0B12]/40">
                  <span className="text-[10px] font-bold text-gray-text uppercase tracking-wider">Was this support helpful?</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-primary-purple/25 text-white border border-primary-purple/35 text-[10px] rounded-md font-bold hover:bg-primary-purple/40 transition-colors">Yes</button>
                    <button className="px-3 py-1 bg-white/5 text-gray-text border border-white/8 text-[10px] rounded-md font-bold hover:bg-white/10 transition-colors">No</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maira Right - Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-secondary-purple/10 flex items-center justify-center text-secondary-purple border border-secondary-purple/15">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold tracking-wider text-secondary-purple uppercase">Maira</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Place Where Women Can Simply Be Honest.
            </h2>

            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              Maira is a private, AI-powered support and advice platform. It provides a safe, anonymous space where women can ask complex professional, social, and personal questions, receiving objective guidance from both technology and seasoned peers.
            </p>

            <ul className="flex flex-col gap-5 text-gray-text mt-4">
              <li className="flex gap-4 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-secondary-purple shrink-0 mt-1" />
                <span><strong className="text-white">Absolute Anonymity:</strong> Strict privacy filters remove identifying metadata so you can seek guidance safely.</span>
              </li>
              <li className="flex gap-4 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-secondary-purple shrink-0 mt-1" />
                <span><strong className="text-white">AI Guidance:</strong> Highly tailored advice systems focused on professional negotiations, wellness, and career growth.</span>
              </li>
              <li className="flex gap-4 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-secondary-purple shrink-0 mt-1" />
                <span><strong className="text-white">Peer Verification:</strong> Community members can provide vetted peer-reviews and perspectives based on lived experience.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Products Teaser */}
      <section className="py-24 md:py-36 bg-transparent border-b border-white/8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-purple/3 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Pipeline</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 mb-6">
            Building What&apos;s Next
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-xl mx-auto mb-16">
            Cohop and Maira are just the foundations. Our team is actively researching and prototype testing new tools designed specifically for women&apos;s professional, lifestyle, and wellness needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-white/2 hover:border-primary-purple/20 hover:bg-white/5 transition-all duration-300 text-center">
              <HelpCircle className="w-8 h-8 text-primary-purple/80 mx-auto mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Professional Growth</h3>
              <p className="text-xs text-gray-text leading-relaxed">Tools focused on remote work safety, career pivots, and mentorship.</p>
            </div>
            <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-white/2 hover:border-primary-purple/20 hover:bg-white/5 transition-all duration-300 text-center">
              <HelpCircle className="w-8 h-8 text-primary-purple/80 mx-auto mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Financial Independence</h3>
              <p className="text-xs text-gray-text leading-relaxed">Encouraging confidence through curated educational tracks and security tools.</p>
            </div>
            <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-white/2 hover:border-primary-purple/20 hover:bg-white/5 transition-all duration-300 text-center">
              <HelpCircle className="w-8 h-8 text-primary-purple/80 mx-auto mb-4" />
              <h3 className="text-base font-bold text-white mb-2">Wellness Ecosystem</h3>
              <p className="text-xs text-gray-text leading-relaxed">Empowering women with verified health insights and decentralized support networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-44 bg-transparent text-center relative overflow-hidden">
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-primary-purple/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Help Us Design the Next Product
          </h2>
          <p className="text-gray-text text-base md:text-lg mb-12 max-w-xl mx-auto">
            Our products start with real conversations. Share your feedback, challenges, or tell us what features you want to see.
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
