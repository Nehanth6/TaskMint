import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExploreServices }) {
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-26 pb-3 sm:pb-4 lg:pb-5 overflow-hidden">
      {/* Decorative Pastel Background Blobs matching Theme 3 in the reference */}
      {/* Left pastel yellow blob */}
      <div 
        className="absolute top-1/4 -left-16 w-72 h-72 rounded-full bg-[#FFE98A]/45 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Soft mint accent */}
      <div 
        className="absolute -top-10 left-1/4 w-64 h-64 rounded-full bg-[#B7F3D0]/30 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Large central purple/lavender halo behind students */}
      <div 
        className="absolute top-16 right-10 lg:right-24 w-[420px] h-[420px] rounded-full bg-[#ECE7FF]/70 blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Right pink pastel splash */}
      <div 
        className="absolute top-28 right-0 w-72 h-72 rounded-full bg-[#FCE7F3]/50 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-4 items-center">
          
          {/* Left Column: Badge, Headline, Description, CTA */}
          <div className="lg:col-span-6 xl:col-span-6 text-left z-10 flex flex-col items-start pr-0 lg:pr-2">
            
            {/* Badge: "Your College Task Partner" */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EEF0FE] text-[#524BF0] mb-3 shadow-xs">
              <span className="text-xs sm:text-[13px] font-semibold tracking-normal">
                Your College Task Partner
              </span>
            </div>

            {/* Headline: "Same Deadlines. Less Stress." */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black tracking-tight text-[#111936] leading-[1.1] mb-3">
              Same Deadlines. <br />
              <span className="text-[#6546F5]">
                Less Stress.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-[15px] text-[#64708A] max-w-md font-normal leading-relaxed mb-4 sm:mb-5">
              PPTs, project reports, handwritten assignments and lab records — done for you, so you can focus on what matters.
            </p>

            {/* Prominent Purple "Explore Services ->" Button */}
            <div className="mb-2 lg:mb-4">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#6546F5] text-white font-semibold text-sm shadow-md shadow-[#6546F5]/25 hover:bg-[#5335E2] hover:shadow-lg hover:shadow-[#6546F5]/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: The 3 College Students + Doodles + "Submit. Relax. Excel!" */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div className="relative w-full max-w-[460px] lg:max-w-[490px]">
              <img
                src="/images/hero-students.png"
                alt="Three college students smiling and giving thumbs-up for TaskMint academic services"
                width={1984}
                height={1010}
                fetchPriority="high"
                className="w-full h-auto object-contain select-none pointer-events-none"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
