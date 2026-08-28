/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface GiftBoxProps {
  id?: string;
  isOpen: boolean;
  onClick: () => void;
  isIdleBouncing?: boolean;
  boxColor?: 'pink' | 'roseGold';
  label?: string;
  disabled?: boolean;
}

export const GiftBox: React.FC<GiftBoxProps> = ({
  id = 'gift-box',
  isOpen,
  onClick,
  isIdleBouncing = false,
  boxColor = 'pink',
  label,
  disabled = false,
}) => {
  const isPink = boxColor === 'pink';

  return (
    <div className="flex flex-col items-center justify-center" id={id}>
      <motion.button
        type="button"
        disabled={disabled || isOpen}
        onClick={onClick}
        whileHover={!isOpen && !disabled ? { scale: 1.06, y: -4 } : {}}
        whileTap={!isOpen && !disabled ? { scale: 0.94 } : {}}
        animate={
          isIdleBouncing && !isOpen
            ? {
                y: [0, -10, 0],
                rotate: [0, -2, 2, 0],
                transition: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
            : {}
        }
        className={`relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center select-none focus:outline-none transition-all duration-300 ${
          !isOpen && !disabled ? 'cursor-pointer hover:drop-shadow-xl' : ''
        }`}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Box Body Gradient */}
            <linearGradient id={`boxGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isPink ? '#FDA4AF' : '#F472B6'} />
              <stop offset="100%" stopColor={isPink ? '#F43F5E' : '#E11D48'} />
            </linearGradient>

            {/* Lid Gradient */}
            <linearGradient id={`lidGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isPink ? '#FECDD3' : '#FBCFE8'} />
              <stop offset="100%" stopColor={isPink ? '#FB7185' : '#F43F5E'} />
            </linearGradient>

            {/* Gold Ribbon Gradient */}
            <linearGradient id={`goldRibbon-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Inner Box Shadow */}
            <linearGradient id={`innerShadow-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#881337" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#881337" stopOpacity="0.3" />
            </linearGradient>

            <filter id={`boxShadow-${id}`} x="-20%" y="-10%" width="140%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#F43F5E" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Soft Ground Shadow */}
          <ellipse cx="100" cy="180" rx="65" ry="12" fill="#F43F5E" fillOpacity="0.15" />

          {/* OPEN INTERIOR (Shown when lid flies off) */}
          {isOpen && (
            <g id="box-interior">
              {/* Dark inside hollow */}
              <rect x="35" y="80" width="130" height="90" rx="14" fill="url(#innerShadow-gift-box)" />
              {/* Inner glowing sparkles */}
              <circle cx="70" cy="110" r="3" fill="#FDE047" className="animate-ping" />
              <circle cx="130" cy="100" r="2.5" fill="#FFFBEB" className="animate-pulse" />
              <circle cx="100" cy="125" r="3.5" fill="#FDE047" className="animate-ping" />
            </g>
          )}

          {/* BOX BASE CONTAINER */}
          <g filter={`url(#boxShadow-${id})`}>
            {/* Box Body */}
            <rect
              x="35"
              y="90"
              width="130"
              height="85"
              rx="16"
              fill={`url(#boxGrad-${id})`}
              stroke="#FFF1F2"
              strokeWidth="2.5"
            />

            {/* Vertical Gold Ribbon on Body */}
            <rect
              x="87"
              y="90"
              width="26"
              height="85"
              fill={`url(#goldRibbon-${id})`}
            />
            {/* Fine gold shimmer lines */}
            <line x1="100" y1="90" x2="100" y2="175" stroke="#FEF3C7" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* BOX LID & BOW (Animated open or closed) */}
          <motion.g
            id={`box-lid-${id}`}
            animate={
              isOpen
                ? {
                    y: -110,
                    x: -25,
                    rotate: -38,
                    opacity: 0,
                    scale: 1.15,
                  }
                : {
                    y: 0,
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }
            }
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 15,
              duration: 0.65,
            }}
          >
            {/* Lid Base */}
            <rect
              x="26"
              y="68"
              width="148"
              height="30"
              rx="10"
              fill={`url(#lidGrad-${id})`}
              stroke="#FFF1F2"
              strokeWidth="2.5"
            />

            {/* Vertical Ribbon across Lid */}
            <rect
              x="87"
              y="68"
              width="26"
              height="30"
              fill={`url(#goldRibbon-${id})`}
            />

            {/* BIG GOLDEN RIBBON BOW ON TOP */}
            <g id="ribbon-bow">
              {/* Left Loop */}
              <path
                d="M100 68 C80 40 45 42 60 62 C70 70 95 68 100 68 Z"
                fill={`url(#goldRibbon-${id})`}
                stroke="#B45309"
                strokeWidth="1"
              />
              <path
                d="M95 65 C85 48 62 48 70 60"
                stroke="#FEF3C7"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Right Loop */}
              <path
                d="M100 68 C120 40 155 42 140 62 C130 70 105 68 100 68 Z"
                fill={`url(#goldRibbon-${id})`}
                stroke="#B45309"
                strokeWidth="1"
              />
              <path
                d="M105 65 C115 48 138 48 130 60"
                stroke="#FEF3C7"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Center Bow Knot */}
              <circle
                cx="100"
                cy="67"
                r="9"
                fill="#FBBF24"
                stroke="#D97706"
                strokeWidth="1.5"
              />
              <circle cx="98" cy="65" r="3" fill="#FFFBEB" />
            </g>
          </motion.g>
        </svg>

        {/* Small sparkling stars while closed */}
        {!isOpen && (
          <>
            <motion.span
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute top-2 right-4 text-yellow-400 text-sm"
            >
              ✦
            </motion.span>
            <motion.span
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2.3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-4 left-3 text-pink-400 text-xs"
            >
              ✨
            </motion.span>
          </>
        )}
      </motion.button>

      {/* Label under box */}
      {label && !isOpen && (
        <motion.div
          animate={isIdleBouncing ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-2 px-3.5 py-1 rounded-full bg-rose-100/90 text-rose-700 text-xs sm:text-sm font-medium tracking-wide shadow-sm border border-rose-200/60"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};
