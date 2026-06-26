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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark-text leading-tight">
              An Ecosystem Built <br className="hidden md:inline" />
              For Real Impact.
            </h1>
            <p className="text-gray-text text-lg md:text-xl leading-relaxed">
              We design and construct digital products focused on solving real-world challenges through trusted communities, artificial intelligence, and privacy-first engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cohop Details Section */}
      <section id="cohop" className="py-20 md:py-28 bg-white border-b border-safera-border/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Cohop Left - Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-soft-lavender flex items-center justify-center text-primary-purple">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-sm font-extrabold tracking-wider text-primary-purple uppercase">Cohop</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text tracking-tight">
              Travel. Explore. Safer. Together.
            </h2>
            
            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              Cohop is a verified travel community that enables women to explore the world with confidence. Rather than traveling alone or navigating unverified reviews, Cohop connects travelers with verified peers and trusted local experts.
            </p>

            <ul className="flex flex-col gap-4 text-gray-text mt-2">
              <li className="flex gap-3 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-primary-purple shrink-0 mt-0.5" />
                <span><strong>Verified Profiles:</strong> Strict background checks and identity verification for community integrity.</span>
              </li>
              <li className="flex gap-3 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-primary-purple shrink-0 mt-0.5" />
                <span><strong>Trusted Recommendations:</strong> Travel itineraries and safety ratings created by and for women.</span>
              </li>
              <li className="flex gap-3 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-primary-purple shrink-0 mt-0.5" />
                <span><strong>Local Hubs:</strong> Meet and connect with trusted local female guides and hosts in destination cities.</span>
              </li>
            </ul>
          </div>

          {/* Cohop Right - Mock Interface Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-soft-lavender/30 border border-safera-border/80 rounded-3xl p-6 shadow-sm">
              <div className="bg-white border border-safera-border/60 rounded-2xl p-5 shadow-sm mb-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-primary-purple/10 flex items-center justify-center text-primary-purple text-xs font-bold">
                      A
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark-text flex items-center gap-1">
                        Ananya Sen
                        <ShieldCheck className="w-3 h-3 text-primary-purple" />
                      </h4>
                      <p className="text-[10px] text-gray-text">Verified Member since 2025</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-primary-purple bg-soft-lavender px-2 py-0.5 rounded-full">
                    Shimla Trip
                  </span>
                </div>
                <p className="text-xs text-gray-text leading-relaxed">
                  "Traveling with my Cohop group was the most empowering trip I've had. The local guide verified by the platform was amazing!"
                </p>
              </div>

              {/* Trip Cards Container */}
              <div className="bg-white border border-safera-border/60 rounded-2xl p-5 shadow-sm">
                <h5 className="text-[11px] font-bold text-gray-text uppercase tracking-wider mb-3">Popular Trusted Itineraries</h5>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-safera-border/40 pb-2.5">
                    <div>
                      <h6 className="text-xs font-semibold text-dark-text">Kerala Backwaters Exploration</h6>
                      <p className="text-[10px] text-gray-text mt-0.5">4.9 ★ (120 reviews) • 5 Days</p>
                    </div>
                    <Compass className="w-3.5 h-3.5 text-primary-purple" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-semibold text-dark-text">Heritage & Culture in Jaipur</h6>
                      <p className="text-[10px] text-gray-text mt-0.5">4.8 ★ (98 reviews) • 3 Days</p>
                    </div>
                    <Compass className="w-3.5 h-3.5 text-primary-purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maira Details Section */}
      <section id="maira" className="py-20 md:py-28 bg-soft-lavender/10 border-b border-safera-border/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Maira Left - Mock Interface Card */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md bg-white border border-safera-border/80 rounded-3xl p-6 shadow-md">
              {/* Anonymous Question Mockup */}
              <div className="flex flex-col gap-4">
                <div className="bg-zinc-50 border border-safera-border/60 rounded-2xl p-4 self-start max-w-[85%]">
                  <div className="flex items-center gap-1.5 text-gray-text text-[10px] font-semibold tracking-wider uppercase mb-1.5">
                    <Users2 className="w-3.5 h-3.5 text-secondary-purple" />
                    Anonymous Ask
                  </div>
                  <p className="text-xs text-dark-text leading-relaxed">
                    How do I negotiate a salary increase in a remote tech job where performance targets were surpassed, but the budget is rumored to be tight?
                  </p>
                </div>

                <div className="bg-soft-lavender/35 border border-primary-purple/10 rounded-2xl p-4 self-end max-w-[85%]">
                  <div className="flex items-center gap-1.5 text-secondary-purple text-[10px] font-semibold tracking-wider uppercase mb-1.5">
                    <MessageSquareText className="w-3.5 h-3.5" />
                    Maira AI guidance
                  </div>
                  <p className="text-xs text-dark-text leading-relaxed">
                    Start by documenting your exact metrics. Frame the conversation around future value and market rate rather than budget rumors. We've compiled 3 verified negotiation templates...
                  </p>
                </div>

                {/* Feedback Panel */}
                <div className="border border-dashed border-safera-border/80 rounded-xl p-3 flex justify-between items-center">
                  <span className="text-[10px] font-medium text-gray-text">Was this support helpful?</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-soft-lavender text-primary-purple text-[10px] rounded-md font-bold">Yes</span>
                    <span className="px-2 py-1 bg-zinc-100 text-gray-text text-[10px] rounded-md font-bold">No</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maira Right - Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-secondary-purple">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-sm font-extrabold tracking-wider text-secondary-purple uppercase">Maira</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text tracking-tight">
              A Place Where Women Can Simply Be Honest.
            </h2>

            <p className="text-gray-text text-base md:text-lg leading-relaxed">
              Maira is a private, AI-powered support and advice platform. It provides a safe, anonymous space where women can ask complex professional, social, and personal questions, receiving objective guidance from both technology and seasoned peers.
            </p>

            <ul className="flex flex-col gap-4 text-gray-text mt-2">
              <li className="flex gap-3 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-secondary-purple shrink-0 mt-0.5" />
                <span><strong>Absolute Anonymity:</strong> Strict privacy filters remove identifying metadata so you can seek guidance safely.</span>
              </li>
              <li className="flex gap-3 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-secondary-purple shrink-0 mt-0.5" />
                <span><strong>AI Guidance:</strong> Highly tailored advice systems focused on professional negotiations, wellness, and career growth.</span>
              </li>
              <li className="flex gap-3 items-start text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-secondary-purple shrink-0 mt-0.5" />
                <span><strong>Peer Verification:</strong> Community members can provide vetted peer-reviews and perspectives based on lived experience.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Products Teaser */}
      <section className="py-20 md:py-28 bg-white border-b border-safera-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-bold text-primary-purple tracking-widest uppercase">The Pipeline</span>
          <h2 className="text-3xl font-extrabold text-dark-text tracking-tight mt-3 mb-6">
            Building What's Next
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-xl mx-auto mb-12">
            Cohop and Maira are just the foundations. Our team is actively researching and prototype testing new tools designed specifically for women's professional, lifestyle, and wellness needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl border border-dashed border-safera-border/80 bg-zinc-50/20 text-center">
              <HelpCircle className="w-6 h-6 text-gray-text/75 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-dark-text mb-1">Professional Growth</h3>
              <p className="text-xs text-gray-text leading-relaxed">Tools focused on remote work safety, career pivots, and mentorship.</p>
            </div>
            <div className="p-6 rounded-2xl border border-dashed border-safera-border/80 bg-zinc-50/20 text-center">
              <HelpCircle className="w-6 h-6 text-gray-text/75 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-dark-text mb-1">Financial Independence</h3>
              <p className="text-xs text-gray-text leading-relaxed">Encouraging confidence through curated educational tracks and security tools.</p>
            </div>
            <div className="p-6 rounded-2xl border border-dashed border-safera-border/80 bg-zinc-50/20 text-center">
              <HelpCircle className="w-6 h-6 text-gray-text/75 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-dark-text mb-1">Wellness Ecosystem</h3>
              <p className="text-xs text-gray-text leading-relaxed">Empowering women with verified health insights and decentralized support networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text tracking-tight mb-6">
            Help Us Design the Next Product
          </h2>
          <p className="text-gray-text text-base md:text-lg mb-8 max-w-xl mx-auto">
            Our products start with real conversations. Share your feedback, challenges, or tell us what features you want to see.
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
