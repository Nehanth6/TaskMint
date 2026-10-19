import React from 'react';
import { Link } from 'react-router-dom';
import { MonitorPlay, FileText, PenTool, ClipboardCheck, ArrowRight, Check } from 'lucide-react';

export const serviceData = [
  {
    id: 'ppt-design',
    title: 'PPT Design',
    description: 'Stand out with amazing presentations.',
    badge: 'From 8 hrs',
    feature: 'Custom slides & speaker notes',
    icon: MonitorPlay,
    iconBg: 'bg-[#F0EEFE]',
    iconColor: 'text-[#6546F5]',
    turnaround: 'From 8 hours',
    priceStarting: '₹299'
  },
  {
    id: 'project-reports',
    title: 'Project Reports',
    description: 'Get well-structured reports.',
    badge: 'IEEE / APA',
    feature: 'Formatted with citations & graphs',
    icon: FileText,
    iconBg: 'bg-[#FCE7F3]',
    iconColor: 'text-[#C026D3]',
    turnaround: 'From 12 hours',
    priceStarting: '₹499'
  },
  {
    id: 'handwritten-assignments',
    title: 'Handwritten Assignments',
    description: 'Neat, accurate and on time.',
    badge: 'Neat Ink',
    feature: 'Ruled/plain A4 & clear diagrams',
    icon: PenTool,
    iconBg: 'bg-[#FEF9C3]',
    iconColor: 'text-[#CA8A04]',
    turnaround: 'From 6 hours',
    priceStarting: '₹199'
  },
  {
    id: 'lab-records',
    title: 'Lab Records',
    description: 'Complete records with diagrams.',
    badge: 'With Diagrams',
    feature: 'Precise tables & step inferences',
    icon: ClipboardCheck,
    iconBg: 'bg-[#CCFBF1]',
    iconColor: 'text-[#0D9488]',
    turnaround: 'From 10 hours',
    priceStarting: '₹249'
  }
];

export default function ServiceCards() {
  return (
    <section id="services-section" className="relative z-20 pt-1 pb-6 sm:pb-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Four Service Cards arranged horizontally across the bottom of the hero section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {serviceData.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative bg-white rounded-3xl p-5 sm:p-6 border border-slate-100/90 shadow-[0_8px_24px_-4px_rgba(25,20,60,0.06)] hover:shadow-[0_18px_38px_-6px_rgba(101,70,245,0.16)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6546F5]"
              >
                <div>
                  {/* Top row: Pastel Icon Box + Quick Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-11 h-11 rounded-2xl ${service.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className={`w-5.5 h-5.5 ${service.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 group-hover:bg-[#EEF0FE] group-hover:text-[#6546F5] px-2.5 py-0.5 rounded-full border border-slate-100 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-bold text-[#111936] group-hover:text-[#6546F5] transition-colors mb-1.5 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#64708A] leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Quick Feature Pill */}
                  <div className="flex items-center gap-1.5 text-[11.5px] font-medium text-slate-600 bg-slate-50/80 px-2.5 py-1 rounded-lg">
                    <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                    <span className="truncate">{service.feature}</span>
                  </div>
                </div>

                {/* Bottom Row with Explore text and Circular Blue Arrow Button */}
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-50">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-[#6546F5] transition-colors">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#3157F5] group-hover:bg-[#6546F5] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:shadow-purple-500/30 transform group-hover:scale-105 transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
