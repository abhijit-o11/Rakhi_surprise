/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export const Decorations: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" id="decorative-background">
      {/* Soft gradient background glow circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-100/60 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] rounded-full bg-rose-200/30 blur-3xl" />

      {/* Floating flower / motif 1 - Top Left */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 left-4 md:left-12 opacity-75"
      >
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="14" fill="#F59E0B" />
          <circle cx="50" cy="20" r="16" fill="#FB7185" fillOpacity="0.7" />
          <circle cx="50" cy="80" r="16" fill="#FB7185" fillOpacity="0.7" />
          <circle cx="20" cy="50" r="16" fill="#FB7185" fillOpacity="0.7" />
          <circle cx="80" cy="50" r="16" fill="#FB7185" fillOpacity="0.7" />
          <circle cx="28" cy="28" r="14" fill="#FDA4AF" fillOpacity="0.8" />
          <circle cx="72" cy="28" r="14" fill="#FDA4AF" fillOpacity="0.8" />
          <circle cx="28" cy="72" r="14" fill="#FDA4AF" fillOpacity="0.8" />
          <circle cx="72" cy="72" r="14" fill="#FDA4AF" fillOpacity="0.8" />
          <circle cx="50" cy="50" r="7" fill="#FFFBEB" />
        </svg>
      </motion.div>

      {/* Floating Bell / Ghungroo - Top Right */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-10 right-6 md:right-16 opacity-80"
      >
        <svg width="38" height="38" viewBox="0 0 80 80" fill="none">
          <path d="M40 10 C32 10 26 24 24 38 L20 54 C18 60 22 66 30 66 L50 66 C58 66 62 60 60 54 L56 38 C54 24 48 10 40 10 Z" fill="#F59E0B" />
          <path d="M30 66 C30 72 35 76 40 76 C45 76 50 72 50 66 Z" fill="#D97706" />
          <circle cx="40" cy="8" r="4" fill="#D97706" />
          <circle cx="36" cy="40" r="3" fill="#FEF3C7" />
          <circle cx="44" cy="48" r="2.5" fill="#FEF3C7" />
        </svg>
      </motion.div>

      {/* Little Thread Swirl - Bottom Left */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 left-6 md:left-20 opacity-60"
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 Q30 20 50 50 T90 50" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 4" fill="none" />
          <path d="M10 55 Q30 85 50 55 T90 55" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="50" cy="52" r="6" fill="#F43F5E" />
          <circle cx="50" cy="52" r="3" fill="#FDE047" />
        </svg>
      </motion.div>

      {/* Floating flower - Bottom Right */}
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-12 right-6 md:right-20 opacity-70"
      >
        <svg width="42" height="42" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="10" fill="#E11D48" />
          <circle cx="40" cy="20" r="12" fill="#FBBF24" fillOpacity="0.8" />
          <circle cx="40" cy="60" r="12" fill="#FBBF24" fillOpacity="0.8" />
          <circle cx="20" cy="40" r="12" fill="#FBBF24" fillOpacity="0.8" />
          <circle cx="60" cy="40" r="12" fill="#FBBF24" fillOpacity="0.8" />
          <circle cx="40" cy="40" r="5" fill="#FFFBEB" />
        </svg>
      </motion.div>

      {/* Small subtle sparkle stars in corners */}
      <motion.span
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-24 left-1/3 text-amber-400 text-lg select-none"
      >
        ✦
      </motion.span>
      <motion.span
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
        className="absolute top-36 right-1/4 text-rose-400 text-sm select-none"
      >
        ✨
      </motion.span>
      <motion.span
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-32 left-1/4 text-amber-500 text-base select-none"
      >
        ✦
      </motion.span>
    </div>
  );
};
