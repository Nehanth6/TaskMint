import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskMintLogo({ size = 'default', clickable = true }) {
  const content = (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Brand Icon: Vibrant cyan/teal paper-plane/leaf icon matching the reference */}
      <div className="relative flex items-center justify-center">
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0EA5E9] to-[#38BDF8] flex items-center justify-center shadow-sm shadow-sky-200 group-hover:scale-105 transition-transform">
          {/* Origami folded leaf/plane geometry */}
          <svg
            className="w-5 h-5 text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 9l10 3 10-3-10-3z" fill="rgba(255,255,255,0.25)" />
            <path d="M2 9l10 13 10-13" />
            <path d="M12 12v10" />
          </svg>
        </div>
        {/* Subtle mint dot accent */}
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#10B981] rounded-full ring-2 ring-white"></span>
      </div>

      {/* Brand Text */}
      <div className="flex items-baseline">
        <span className="text-[22px] font-extrabold tracking-tight text-[#111936]">
          Task<span className="text-[#6546F5]">Mint</span>
        </span>
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6546F5] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
