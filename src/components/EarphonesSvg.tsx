/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export const EarphonesSvg: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.4, y: 70, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 18,
        delay: 0.15,
      }}
      className="relative flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100 shadow-lg w-52 sm:w-60"
    >
      {/* Floating humorous sparkle */}
      <span className="absolute -top-3 -right-2 text-2xl animate-bounce">⚡</span>
      <span className="absolute -bottom-2 -left-2 text-xl">💧</span>

      <svg
        viewBox="0 0 200 180"
        className="w-full h-36 sm:h-40 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="earbudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="jackGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Tangled Wired Cables */}
        <path
          d="M 55 55 C 55 95, 80 120, 100 130 C 120 140, 140 100, 120 70 C 110 50, 140 50, 145 55"
          stroke="#94A3B8"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 100 130 C 100 150, 105 160, 115 165"
          stroke="#94A3B8"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cable Splitter bead */}
        <rect x="94" y="122" width="12" height="14" rx="4" fill="#64748B" />

        {/* Left Earbud */}
        <g id="left-earbud" transform="translate(0, 0)">
          {/* Stem */}
          <path d="M55 45 L55 58" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
          {/* Head */}
          <ellipse cx="55" cy="38" rx="14" ry="11" fill="url(#earbudGrad)" stroke="#94A3B8" strokeWidth="1.5" />
          <ellipse cx="62" cy="38" rx="5" ry="8" fill="#475569" />
          {/* 'L' mark */}
          <text x="46" y="41" fontSize="9" fontWeight="bold" fill="#64748B">L</text>
        </g>

        {/* Right Earbud */}
        <g id="right-earbud" transform="translate(0, 0)">
          {/* Stem */}
          <path d="M145 45 L145 58" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
          {/* Head */}
          <ellipse cx="145" cy="38" rx="14" ry="11" fill="url(#earbudGrad)" stroke="#94A3B8" strokeWidth="1.5" />
          <ellipse cx="138" cy="38" rx="5" ry="8" fill="#475569" />
          {/* 'R' mark */}
          <text x="146" y="41" fontSize="9" fontWeight="bold" fill="#64748B">R</text>
        </g>

        {/* 3.5mm Headphone Jack */}
        <g id="audio-jack" transform="translate(15, 0)">
          <rect x="100" y="156" width="6" height="14" rx="2" fill="#475569" />
          <rect x="101" y="170" width="4" height="10" fill="url(#jackGold)" />
          {/* Jack insulator rings */}
          <line x1="101" y1="173" x2="105" y2="173" stroke="#1E293B" strokeWidth="1" />
          <line x1="101" y1="176" x2="105" y2="176" stroke="#1E293B" strokeWidth="1" />
        </g>

        {/* Cute comedic sweat / sparkle lines */}
        <path d="M25 30 L15 25" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 42 L16 44" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
        <path d="M175 30 L185 25" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
        <path d="M172 42 L184 44" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest mt-1">
        3.5mm Jack • Vintage 100%
      </span>
    </motion.div>
  );
};
