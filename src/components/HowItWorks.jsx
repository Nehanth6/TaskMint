import React from 'react';
import { Layers, FileUp, Calculator, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onGetStarted }) {
  const steps = [
    {
      number: '01',
      title: 'Select a Service',
      description: 'Choose whether you need a PPT slide deck, project report, handwritten assignment, or complete lab record.',
      icon: Layers,
      color: 'bg-purple-100 text-[#6546F5]',
      badge: 'Step 1'
    },
    {
      number: '02',
      title: 'Provide Requirements',
      description: 'Share your topic, guidelines, deadline, page count, formatting styles, or specific college rubrics.',
      icon: FileUp,
      color: 'bg-blue-100 text-[#3157F5]',
      badge: 'Step 2'
    },
    {
      number: '03',
      title: 'View the Price',
      description: 'Get an upfront, transparent cost calculation with zero hidden fees and a guaranteed completion timeline.',
      icon: Calculator,
      color: 'bg-amber-100 text-amber-600',
      badge: 'Step 3'
    },
    {
      number: '04',
      title: 'Place Order & Relax',
      description: 'Our academic specialists craft your task. You track progress live and receive ready-to-submit files on time.',
      icon: CheckCircle,
      color: 'bg-emerald-100 text-emerald-600',
      badge: 'Step 4'
    }
  ];

  return (
    <section id="how-it-works-section" className="py-20 relative bg-[#FAF9FE] border-y border-slate-100 scroll-mt-24">
      {/* Background ambient accents */}
      <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-[#FFE98A]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#B7F3D0]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF0FE] text-[#6546F5] text-xs font-bold uppercase tracking-wider mb-3">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111936] tracking-tight">
            How TaskMint Works
          </h2>
          <p className="mt-3 text-base text-[#64708A]">
            From assignment deadline panic to confident submission in four transparent steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(101,70,245,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top row with step number and badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#6546F5]/20 font-mono">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#111936] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64708A] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center text-xs font-semibold text-[#6546F5]">
                  <span>Student Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6546F5] hover:bg-[#5335E2] text-white font-semibold text-sm shadow-md shadow-[#6546F5]/25 hover:shadow-lg hover:shadow-[#6546F5]/35 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Start Your First Task Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
