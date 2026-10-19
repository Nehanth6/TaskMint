import React, { useState } from 'react';
import { Star, Shield, RefreshCw, Clock, CheckCircle2, MessageSquare, HeartHandshake } from 'lucide-react';

export default function ReviewsSection() {
  const [feedbackCategory, setFeedbackCategory] = useState('all');

  const standards = [
    {
      title: 'Formatting & Rubric Guarantee',
      description: 'Your deliverable strictly follows your provided fonts, margin sizes, slide templates, IEEE/APA citation style, or lab manual format.',
      icon: CheckCircle2,
      badge: 'Standard #1'
    },
    {
      title: 'Free Prompt Revision Policy',
      description: 'If any guideline from your original order prompt is missed or requires adjustment, revisions are completed free of charge within 24 hours.',
      icon: RefreshCw,
      badge: 'Revision Guarantee'
    },
    {
      title: 'Deadline Adherence Commitment',
      description: 'We agree on an exact delivery hour upfront. If we fail to deliver by your committed deadline, you receive an immediate refund credit.',
      icon: Clock,
      badge: 'On-Time Pledge'
    },
    {
      title: 'Strict Academic Privacy',
      description: 'We do not publicly index student submissions, nor do we resell or republish assignments. Your identity and documents remain strictly private.',
      icon: Shield,
      badge: '100% Private'
    }
  ];

  return (
    <section id="reviews-section" className="py-20 bg-[#FCFBFF] border-t border-slate-100 scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE98A]/50 text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" /> Quality Assurance & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111936] tracking-tight">
            Our Quality Benchmarks & Reviews Policy
          </h2>
          <p className="mt-3 text-base text-[#64708A]">
            We prioritize transparency and academic integrity above all else. Here is our direct service commitment to every student.
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-7 border border-slate-100/90 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#6546F5] bg-[#EEF0FE] px-2.5 py-1 rounded-full inline-block mb-4">
                    {item.badge}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#6546F5] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#111936] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64708A] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] font-semibold text-slate-500 ml-1">Platform standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Student Feedback & Rating Policy Note */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF0FE] text-[#6546F5] flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#111936]">Verified Post-Delivery Feedback</h4>
              <p className="text-xs sm:text-sm text-[#64708A] mt-1 max-w-2xl">
                Only students with verified order completion can rate assignments. We never fabricate testimonials or post misleading claims. Your ratings directly determine which specialized writers and designers handle upcoming batches.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              100% Genuine Student Reviews
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
