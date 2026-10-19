import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import HowItWorks from '../components/HowItWorks';
import WhyTaskMint from '../components/WhyTaskMint';
import PricingCalculator from '../components/PricingCalculator';
import ReviewsSection from '../components/ReviewsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function HomePage({ onOpenAuth }) {
  const handleExploreServices = () => {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBFF] flex flex-col selection:bg-[#6546F5]/15 selection:text-[#6546F5]">
      {/* Top Navbar */}
      <Navbar onOpenAuth={onOpenAuth} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section matching reference */}
        <Hero onExploreServices={handleExploreServices} />

        {/* 2. Four Service Cards matching bottom hero horizontal layout */}
        <ServiceCards />

        {/* 3. Interactive Pricing Estimator */}
        <PricingCalculator onGetStarted={() => onOpenAuth('register')} />

        {/* 4. How It Works Section */}
        <HowItWorks onGetStarted={() => onOpenAuth('register')} />

        {/* 5. Why TaskMint Section */}
        <WhyTaskMint />

        {/* 6. Reviews & Quality Standards Section */}
        <ReviewsSection />

        {/* 7. FAQ Section */}
        <FAQSection />

        {/* 8. Bottom CTA Banner */}
        <section className="py-20 bg-gradient-to-tr from-[#6546F5] via-[#5234E4] to-[#3157F5] text-white relative overflow-hidden">
          {/* Subtle playful decorative accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B7F3D0]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> Stop Stressing, Start Excelling
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
              Ready to Turn In Your Next Assignment on Time?
            </h2>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-8 font-normal">
              Join students who enjoy peaceful weekends while TaskMint crafts flawless PPTs, project reports, assignments and lab records.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenAuth('register')}
                className="px-8 py-4 rounded-full bg-white text-[#6546F5] hover:bg-slate-50 font-bold text-base shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Get Started for Free
              </button>
              <button
                onClick={handleExploreServices}
                className="px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-base border border-white/30 backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                Explore All Services
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#B7F3D0]" /> No upfront credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#B7F3D0]" /> Free revisions on request
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#B7F3D0]" /> Strict student confidentiality
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
