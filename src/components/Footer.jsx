import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Clock, Shield, MapPin, Heart, ArrowUp } from 'lucide-react';
import TaskMintLogo from './TaskMintLogo';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + sectionId);
    }
  };

  return (
    <footer className="bg-[#111936] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              {/* White badge logo icon for dark footer */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center">
                <svg className="w-4 h-4 text-white -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 9l10 3 10-3-10-3z" fill="rgba(255,255,255,0.25)" />
                  <path d="M2 9l10 13 10-13" />
                  <path d="M12 12v10" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Task<span className="text-[#6546F5]">Mint</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your college task partner. We deliver polished PPTs, project reports, neat handwritten assignments, and lab records on time so you can conquer college stress-free.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> 100% Confidential
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-700">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> 24/7 Student Desk
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services-section')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('how-it-works-section')} className="hover:text-white transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('reviews-section')} className="hover:text-white transition-colors cursor-pointer">
                  Reviews & Quality
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('faq-section')} className="hover:text-white transition-colors cursor-pointer">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Services Routes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Academic Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/services/ppt-design" className="hover:text-white transition-colors">
                  PPT Design
                </Link>
              </li>
              <li>
                <Link to="/services/project-reports" className="hover:text-white transition-colors">
                  Project Reports
                </Link>
              </li>
              <li>
                <Link to="/services/handwritten-assignments" className="hover:text-white transition-colors">
                  Handwritten Assignments
                </Link>
              </li>
              <li>
                <Link to="/services/lab-records" className="hover:text-white transition-colors">
                  Lab Records
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Student Helpdesk
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6546F5]" />
                <span className="text-slate-300 text-xs">help@taskmint.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 text-xs">Response time &lt; 15 mins</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">Academic Tech Hub, Bangalore & Chennai Campus Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Academic Integrity & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} TaskMint Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 transition-colors">Terms of Service</span>
            <span className="hover:text-slate-200 transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-200 transition-colors">Academic Integrity Statement</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
