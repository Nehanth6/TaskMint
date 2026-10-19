import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import TaskMintLogo from './TaskMintLogo';

export default function Navbar({ onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Home', action: () => { setMobileMenuOpen(false); if (location.pathname !== '/') navigate('/'); else window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { label: 'Services', action: () => handleNavClick('services-section') },
    { label: 'How It Works', action: () => handleNavClick('how-it-works-section') },
    { label: 'Reviews', action: () => handleNavClick('reviews-section') },
    { label: 'FAQ', action: () => handleNavClick('faq-section') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <TaskMintLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-[15px] font-medium text-[#111936]/80 hover:text-[#6546F5] transition-colors focus:outline-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3.5">
            <button
              onClick={() => onOpenAuth ? onOpenAuth('login') : navigate('/login')}
              className="px-5 py-2 text-[14px] font-semibold text-[#111936] hover:text-[#6546F5] bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => onOpenAuth ? onOpenAuth('register') : navigate('/get-started')}
              className="px-5 py-2 text-[14px] font-semibold text-white bg-[#6546F5] hover:bg-[#5335E2] rounded-full transition-all duration-200 shadow-md shadow-[#6546F5]/25 hover:shadow-lg hover:shadow-[#6546F5]/35 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#6546F5] hover:bg-purple-50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3.5 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-left text-base font-semibold text-slate-800 hover:text-[#6546F5] py-2 px-3 rounded-lg hover:bg-purple-50/60 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-2.5 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth ? onOpenAuth('login') : navigate('/login');
                }}
                className="w-full py-2.5 text-center font-semibold text-[#111936] bg-slate-50 border border-slate-200 rounded-xl"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth ? onOpenAuth('register') : navigate('/get-started');
                }}
                className="w-full py-2.5 text-center font-semibold text-white bg-[#6546F5] hover:bg-[#5335E2] rounded-xl shadow-md shadow-[#6546F5]/25"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
