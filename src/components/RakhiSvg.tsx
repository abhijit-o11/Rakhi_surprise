/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface RakhiSvgProps {
  onClick?: () => void;
  isSpinning?: boolean;
  size?: 'normal' | 'large' | 'icon';
}

export const RakhiSvg: React.FC<RakhiSvgProps> = ({
  onClick,
  isSpinning = false,
  size = 'normal',
}) => {
  const isLarge = size === 'large';
  const isIcon = size === 'icon';

  return (
    <div
      id="rakhi-interactive-element"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center select-none ${
        onClick ? 'cursor-pointer group' : ''
      }`}
    >
      <svg
        viewBox="0 0 360 140"
        className={`${
          isIcon ? 'w-32 h-14' : isLarge ? 'w-72 sm:w-80 h-32' : 'w-64 sm:w-72 h-28'
        } transition-transform duration-300 ${
          onClick ? 'group-hover:scale-105 group-active:scale-95' : ''
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="gemGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>
          <linearGradient id="threadRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
          <linearGradient id="goldThread" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <filter id="rakhiGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* LEFT THREAD WITH BEADS */}
        <g id="rakhi-left-thread">
          {/* Main silk thread */}
          <path
            d="M20 70 Q 70 60, 140 70"
            stroke="url(#threadRed)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Entwined gold thread */}
          <path
            d="M20 68 Q 70 78, 140 68"
            stroke="url(#goldThread)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="4 3"
          />
          {/* Left Tassel */}
          <path d="M20 70 L5 62 M20 70 L4 70 M20 70 L5 78" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Golden beads along left thread */}
          <circle cx="50" cy="66" r="4.5" fill="url(#goldThread)" stroke="#B45309" strokeWidth="0.8" />
          <circle cx="75" cy="68" r="6" fill="#F43F5E" stroke="#881337" strokeWidth="1" />
          <circle cx="100" cy="67" r="5" fill="url(#goldThread)" stroke="#B45309" strokeWidth="0.8" />
          <circle cx="125" cy="70" r="6.5" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
        </g>

        {/* RIGHT THREAD WITH BEADS */}
        <g id="rakhi-right-thread">
          {/* Main silk thread */}
          <path
            d="M220 70 Q 290 60, 340 70"
            stroke="url(#threadRed)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Entwined gold thread */}
          <path
            d="M220 68 Q 290 78, 340 68"
            stroke="url(#goldThread)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="4 3"
          />
          {/* Right Tassel */}
          <path d="M340 70 L355 62 M340 70 L356 70 M340 70 L355 78" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />

          {/* Golden beads along right thread */}
          <circle cx="235" cy="70" r="6.5" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
          <circle cx="260" cy="67" r="5" fill="url(#goldThread)" stroke="#B45309" strokeWidth="0.8" />
          <circle cx="285" cy="68" r="6" fill="#F43F5E" stroke="#881337" strokeWidth="1" />
          <circle cx="310" cy="66" r="4.5" fill="url(#goldThread)" stroke="#B45309" strokeWidth="0.8" />
        </g>

        {/* CENTRAL MANDALA MEDALLION */}
        <g
          id="rakhi-center-medallion"
          className={isSpinning ? 'animate-spin origin-[180px_70px]' : ''}
          filter="url(#rakhiGlow)"
        >
          {/* Outer Sunburst Petals (Gold) */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 180 + Math.cos(rad) * 36;
            const y = 70 + Math.sin(rad) * 36;
            return (
              <circle
                key={`petal-gold-${i}`}
                cx={x}
                cy={y}
                r="4.5"
                fill="#FBBF24"
                stroke="#D97706"
                strokeWidth="1"
              />
            );
          })}

          {/* Outer Lotus Ring (Crimson / Pink) */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 180 + Math.cos(rad) * 26;
            const y = 70 + Math.sin(rad) * 26;
            return (
              <path
                key={`lotus-${i}`}
                d={`M${x} ${y} Q ${180 + Math.cos(rad) * 34} ${70 + Math.sin(rad) * 34}, ${
                  180 + Math.cos(rad + 0.3) * 26
                } ${70 + Math.sin(rad + 0.3) * 26}`}
                fill="#E11D48"
                stroke="#FFE4E6"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Floral Petal Base */}
          <circle cx="180" cy="70" r="30" fill="#BE123C" stroke="#FBBF24" strokeWidth="2.5" />
          
          {/* Inner Golden Ring */}
          <circle cx="180" cy="70" r="22" fill="#FB7185" stroke="#FDE68A" strokeWidth="2" strokeDasharray="3 2" />

          {/* Sacred Center Gem / Pearl */}
          <circle cx="180" cy="70" r="14" fill="url(#gemGlow)" stroke="#FFFBEB" strokeWidth="2" />
          
          {/* Small Om / Sacred Symbol Motif in center */}
          <path
            d="M176 68 C176 64 180 63 182 65 C184 66 184 69 181 71 C184 72 185 76 182 77 C179 78 176 76 176 74"
            stroke="#7C2D12"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M182 66 Q186 67 186 70"
            stroke="#7C2D12"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="184" cy="62.5" r="1" fill="#7C2D12" />
          <path
            d="M181 63.5 Q184 64.5 187 63.5"
            stroke="#7C2D12"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Center highlight gleam */}
          <circle cx="177" cy="66" r="2" fill="#FFFFFF" fillOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
};
