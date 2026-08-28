/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Sparkles } from 'lucide-react';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const noteContent = `Hi ! Kiddo....

So....I am SORRY.......sorry for the things I did and you got hurt but never told me, sorry for every behaviour of mine that irritated or hurt you in any way and sorry for being this intolerable. 😕

I wish I would be more carefull with my actions.....maybe then things could be same as it was...♥️

And IK you will AGAIN be like 'bhaiyaa yaaar bar bar ekk hi chiz nahi bol sakti... get a life bro!!...' and this is exactly what I'm sorry for...for all this pareshani I ever gave you 😂

I just miss you a LOOOOT...
Take care gulabo♥️...bye👋🏻`;

export const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/45 backdrop-blur-sm transition-opacity"
            id="modal-backdrop"
          />

          {/* Letter Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20, rotate: 1 }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 24,
            }}
            id="heartfelt-note-modal"
            className="relative w-full max-w-lg bg-[#FFF9FA] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-rose-200/80 z-10 my-auto overflow-hidden"
            style={{
              backgroundImage: `radial-gradient(#FCE7F3 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          >
            {/* Washi Tape Strip at top */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 h-8 bg-amber-200/75 -rotate-2 rounded-sm shadow-sm border border-amber-300/60 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800/60 select-none">
                ✦ FOR SISTER ✦
              </span>
            </div>

            {/* Vintage Postal Stamp Decor at top right */}
            <div className="absolute top-4 right-14 w-11 h-13 border-2 border-dashed border-rose-300/80 rounded bg-rose-50/80 p-1 flex flex-col items-center justify-center pointer-events-none rotate-6">
              <Heart className="w-5 h-5 text-rose-400 fill-rose-300" />
              <span className="text-[8px] font-bold text-rose-500 mt-0.5">RAKHI</span>
            </div>

            {/* Close Button */}
            <button
              type="button"
              id="close-note-modal-btn"
              onClick={onClose}
              aria-label="Close Note"
              className="absolute top-4 right-4 p-2 rounded-full bg-rose-100/80 text-rose-700 hover:bg-rose-200 active:scale-95 transition-all cursor-pointer shadow-sm z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Subtitle */}
            <div className="flex items-center gap-2 mb-4 pt-2 border-b border-rose-200/60 pb-3">
              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-rose-800">
                  A Little Note for You
                </h3>
                <p className="text-xs text-rose-600/75 font-body">from your bro ✨</p>
              </div>
            </div>

            {/* Letter Content */}
            <div className="max-h-[60vh] overflow-y-auto pr-2 text-rose-950 font-handwriting text-xl sm:text-2xl leading-relaxed whitespace-pre-wrap selection:bg-rose-200">
              {noteContent}
            </div>

            {/* Bottom Footer Stamp */}
            <div className="mt-5 pt-3 border-t border-rose-200/60 flex items-center justify-between text-xs text-rose-500 font-body">
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-rose-500" /> Always here for you
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 rounded-full bg-rose-500 text-white font-medium text-xs hover:bg-rose-600 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                Close Note
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
