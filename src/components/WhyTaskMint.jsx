import React from 'react';
import { DollarSign, Zap, BellRing, Award, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export default function WhyTaskMint() {
  const features = [
    {
      title: 'Clear & Upfront Pricing',
      description: 'Zero hidden surprises or post-order upsells. See the exact final cost based on slide count, page length, or deadline before placing your order.',
      icon: DollarSign,
      color: 'bg-emerald-100 text-emerald-700',
      badge: 'Budget Friendly'
    },
    {
      title: 'Convenient Ordering',
      description: 'Upload lecture slides, professors rubrics, rough notes, or hand-drawn sketches. Set your required format and ink color in less than 2 minutes.',
      icon: Zap,
      color: 'bg-amber-100 text-amber-700',
      badge: 'Fast Setup'
    },
    {
      title: 'Live Progress Updates',
      description: 'Stay relaxed with milestone alerts at outline, drafting, diagram insertion, and final formatting stages so you never have to guess.',
      icon: BellRing,
      color: 'bg-blue-100 text-[#3157F5]',
      badge: 'Real-time Tracking'
    },
    {
      title: 'Dual-Stage Quality Review',
      description: 'Every project is inspected for formatting adherence, spelling accuracy, diagram precision, citation formatting, and neatness before release.',
      icon: Award,
      color: 'bg-purple-100 text-[#6546F5]',
      badge: '100% Quality Check'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#B7F3D0]/40 text-[#065F46] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Built For Real College Life
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111936] tracking-tight">
            Why Students Rely on TaskMint
          </h2>
          <p className="mt-3 text-base text-[#64708A]">
            We understand strict college submission portals, picky professors, and crunch-time stress.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 rounded-3xl bg-[#FCFBFF] border border-slate-100/90 shadow-sm hover:shadow-md hover:border-purple-200/60 transition-all duration-300 flex items-start gap-5"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex-shrink-0 flex items-center justify-center`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#111936]">
                      {feature.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#64708A] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Commitments Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#6546F5]/5 via-[#3157F5]/5 to-[#B7F3D0]/10 border border-[#6546F5]/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#6546F5] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#6546F5]/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#111936]">The TaskMint Integrity & Confidentiality Pledge</h4>
              <p className="text-xs sm:text-sm text-[#64708A]">Your student identity, uploaded files, and completed assignments are never shared or resold.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#6546F5] bg-white px-4 py-2 rounded-full border border-purple-200 shadow-xs">
              100% Confidential
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shadow-xs">
              Free Revisions
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
