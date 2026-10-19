import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, ArrowRight, Check, Clock, Sparkles } from 'lucide-react';

export default function PricingCalculator({ onGetStarted }) {
  const [selectedService, setSelectedService] = useState('ppt');
  const [count, setCount] = useState(10);
  const [urgency, setUrgency] = useState('standard'); // standard (24-48h) or express (within 12h)
  const navigate = useNavigate();

  // Pricing formula logic
  const calculateEstimate = () => {
    let baseRate = 30; // per unit
    let minFee = 299;

    if (selectedService === 'ppt') {
      baseRate = 35; // per slide
      minFee = 299;
    } else if (selectedService === 'report') {
      baseRate = 45; // per page
      minFee = 499;
    } else if (selectedService === 'handwritten') {
      baseRate = 25; // per page
      minFee = 199;
    } else if (selectedService === 'lab') {
      baseRate = 50; // per experiment/exercise
      minFee = 249;
    }

    let total = Math.max(minFee, count * baseRate);
    if (urgency === 'express') {
      total = Math.round(total * 1.35);
    }
    return total;
  };

  const getUnitLabel = () => {
    switch (selectedService) {
      case 'ppt': return 'Slides';
      case 'report': return 'Pages';
      case 'handwritten': return 'Handwritten Pages';
      case 'lab': return 'Experiments / Exercises';
      default: return 'Units';
    }
  };

  const getServiceRoute = () => {
    switch (selectedService) {
      case 'ppt': return '/services/ppt-design';
      case 'report': return '/services/project-reports';
      case 'handwritten': return '/services/handwritten-assignments';
      case 'lab': return '/services/lab-records';
      default: return '/';
    }
  };

  return (
    <section className="pt-4 sm:pt-6 pb-16 bg-gradient-to-b from-white to-[#FAF9FE] border-t border-slate-100/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-[0_15px_40px_rgba(101,70,245,0.08)] relative overflow-hidden">
          
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#6546F5]/10 via-[#B7F3D0]/20 to-transparent rounded-bl-full pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF0FE] text-[#6546F5] text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" /> Instant Estimate Tool
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111936]">
              Calculate Your Task Estimate in Seconds
            </h3>
            <p className="text-sm text-[#64708A] mt-2">
              Pick your task type and requirements to see an upfront, transparent quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Options Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Service Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  1. Select Task Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'ppt', label: 'PPT Slides' },
                    { id: 'report', label: 'Project Report' },
                    { id: 'handwritten', label: 'Handwritten' },
                    { id: 'lab', label: 'Lab Records' }
                  ].map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        selectedService === srv.id
                          ? 'bg-[#6546F5] text-white shadow-sm shadow-[#6546F5]/30'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                      }`}
                    >
                      {srv.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for Count */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Volume: {count} {getUnitLabel()}
                  </label>
                  <span className="text-xs font-bold text-[#6546F5] bg-[#EEF0FE] px-2.5 py-0.5 rounded-full">
                    {count} {getUnitLabel()}
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="40"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#6546F5]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>Min: 3</span>
                  <span>Average: 15-20</span>
                  <span>Max: 40+</span>
                </div>
              </div>

              {/* Deadline Urgency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  3. Deadline Speed
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setUrgency('standard')}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      urgency === 'standard'
                        ? 'border-[#6546F5] bg-purple-50/40 ring-1 ring-[#6546F5]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#111936]">Standard Timeline</span>
                      {urgency === 'standard' && <Check className="w-3.5 h-3.5 text-[#6546F5]" />}
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">24 to 48 Hours</span>
                  </button>

                  <button
                    onClick={() => setUrgency('express')}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      urgency === 'express'
                        ? 'border-[#6546F5] bg-purple-50/40 ring-1 ring-[#6546F5]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#111936]">Express Urgent</span>
                      {urgency === 'express' && <Check className="w-3.5 h-3.5 text-[#6546F5]" />}
                    </div>
                    <span className="text-[11px] text-[#6546F5] font-semibold block mt-1">Within 8 - 12 Hours</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#111936] to-[#1E293B] rounded-3xl p-7 text-white shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Instant Quote
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> All-Inclusive
                  </span>
                </div>

                <div className="my-4">
                  <span className="text-xs text-slate-400">Estimated Total:</span>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1 flex items-baseline gap-1">
                    <span>₹{calculateEstimate()}</span>
                    <span className="text-xs font-normal text-slate-400">/ net</span>
                  </div>
                </div>

                <div className="space-y-2 py-4 border-y border-slate-700/80 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Delivery Target:</span>
                    <span className="font-semibold text-white">
                      {urgency === 'express' ? 'Today (Express)' : 'Tomorrow (Standard)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Revisions:</span>
                    <span className="font-semibold text-emerald-400">Free within 48h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Plagiarism Check:</span>
                    <span className="font-semibold text-white">Included</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                <button
                  onClick={() => onGetStarted ? onGetStarted() : navigate(getServiceRoute())}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#6546F5] hover:bg-[#5335E2] text-white font-bold text-sm shadow-md shadow-[#6546F5]/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Proceed with Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate(getServiceRoute())}
                  className="w-full py-2.5 text-center text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  View full service specifications &rarr;
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
