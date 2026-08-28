/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { FileText, ArrowRight, Sparkles, Volume2, VolumeX, RotateCcw, Heart } from 'lucide-react';
import { ScreenState } from './types';
import { Decorations } from './components/Decorations';
import { RakhiSvg } from './components/RakhiSvg';
import { GiftBox } from './components/GiftBox';
import { EarphonesSvg } from './components/EarphonesSvg';
import { KeychainDisplay } from './components/KeychainDisplay';
import { NoteModal } from './components/NoteModal';
import { playPopSound, playSparkleSound, playChime } from './utils/sound';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('greeting');
  const [screen2BoxOpen, setScreen2BoxOpen] = useState(false);
  const [screen2ChosenBox, setScreen2ChosenBox] = useState<number | null>(null);
  const [screen3BoxOpen, setScreen3BoxOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Trigger celebration confetti
  const fireConfetti = (intense = false) => {
    try {
      if (intense) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F43F5E', '#FBBF24', '#FB7185', '#F59E0B', '#E11D48'],
        });
        setTimeout(() => {
          confetti({
            particleCount: 60,
            angle: 60,
            spread: 55,
            origin: { x: 0.1, y: 0.7 },
            colors: ['#F43F5E', '#FBBF24', '#FB7185'],
          });
          confetti({
            particleCount: 60,
            angle: 120,
            spread: 55,
            origin: { x: 0.9, y: 0.7 },
            colors: ['#F43F5E', '#FBBF24', '#FB7185'],
          });
        }, 200);
      } else {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#F43F5E', '#FBBF24', '#FB7185', '#F59E0B'],
        });
      }
    } catch (e) {
      console.debug('Confetti error', e);
    }
  };

  // Handle Rakhi Click -> Start loading animation
  const handleRakhiClick = () => {
    if (soundEnabled) playSparkleSound();
    setCurrentScreen('loading');
  };

  // Handle Screen 2 Gift Box Selection
  const handleScreen2BoxClick = (index: number) => {
    if (screen2BoxOpen) return;
    setScreen2ChosenBox(index);
    setScreen2BoxOpen(true);
    if (soundEnabled) playPopSound();
    fireConfetti(false);
  };

  // Handle Screen 3 Gift Box Opening
  const handleScreen3BoxClick = () => {
    if (screen3BoxOpen) return;
    setScreen3BoxOpen(true);
    if (soundEnabled) {
      playPopSound();
      setTimeout(playChime, 250);
    }
    fireConfetti(true);
  };

  // Open Note Modal
  const handleOpenNote = () => {
    if (soundEnabled) playSparkleSound();
    setIsNoteOpen(true);
  };

  // Restart Surprise Experience
  const handleRestart = () => {
    setScreen2BoxOpen(false);
    setScreen2ChosenBox(null);
    setScreen3BoxOpen(false);
    setIsNoteOpen(false);
    setCurrentScreen('greeting');
  };

  // Loading Screen Timer (~1.8 seconds duration)
  useEffect(() => {
    if (currentScreen === 'loading') {
      const timer = setTimeout(() => {
        setCurrentScreen('choose-box');
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <div
      id="rakshabandhan-app"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 py-6 sm:py-8 overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFF0F3] to-[#FFEBEF]"
    >
      {/* Subtle Festive Background Elements */}
      <Decorations />

      {/* Top Floating Controls Bar */}
      <header className="w-full max-w-2xl flex items-center justify-between z-20 px-2 sm:px-4">
        <div className="flex items-center gap-1.5 text-rose-800 font-heading text-xl select-none">
          <Heart className="w-4 h-4 fill-rose-400 text-rose-500 animate-pulse" />
          <span>For Gulabo</span>
        </div>

        <div className="flex items-center gap-2">
          {currentScreen !== 'greeting' && (
            <button
              type="button"
              onClick={handleRestart}
              title="Restart from beginning"
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-rose-100/90 hover:bg-rose-200 text-rose-700 text-xs font-medium transition-all shadow-sm cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Start Over</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'Mute audio' : 'Enable audio'}
            className="p-2 rounded-full bg-rose-100/80 hover:bg-rose-200 text-rose-700 transition-all shadow-sm cursor-pointer"
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-rose-400" />}
          </button>
        </div>
      </header>

      {/* MAIN INTERACTIVE SCREEN CONTAINER */}
      <main className="w-full max-w-2xl flex-1 flex flex-col items-center justify-center z-10 my-auto py-4">
        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* SCREEN 1: GREETING */}
          {/* ========================================================================= */}
          {currentScreen === 'greeting' && (
            <motion.section
              key="screen-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center text-center w-full px-2"
              id="screen-greeting"
            >
              {/* Salutation */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mb-2"
              >
                <span className="font-heading text-3xl sm:text-4xl text-rose-500 font-bold tracking-wide drop-shadow-sm">
                  Hey Gulab Jamun !!
                </span>
              </motion.div>

              {/* Main Decorative Greeting */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
                className="relative my-2 sm:my-4"
              >
                <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-rose-700 leading-tight drop-shadow-sm">
                  Happy Rakshabandhan 🎉
                </h1>
                
                {/* Decorative floating mini embellishments */}
                <span className="absolute -top-3 -right-2 text-2xl sm:text-3xl animate-bounce">
                  ✨
                </span>
                <span className="absolute -bottom-2 -left-3 text-2xl sm:text-3xl animate-pulse">
                  🌸
                </span>
              </motion.div>

              {/* Rakhi Call to Action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 sm:mt-8 flex flex-col items-center gap-3"
              >
                <p className="font-body text-sm sm:text-base font-medium text-rose-800/80 tracking-wide">
                  Click on this rakhi to proceed
                </p>

                {/* Pulsing Interactive Rakhi */}
                <div className="animate-pulse-glow hover:scale-105 transition-transform duration-300">
                  <RakhiSvg onClick={handleRakhiClick} size="large" />
                </div>

                <span className="text-xs text-rose-400 font-body animate-pulse mt-1">
                  (tap the rakhi 👆)
                </span>
              </motion.div>
            </motion.section>
          )}

          {/* ========================================================================= */}
          {/* TRANSITION / LOADING SCREEN */}
          {/* ========================================================================= */}
          {currentScreen === 'loading' && (
            <motion.section
              key="screen-loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center py-12"
              id="screen-loading"
            >
              {/* Spinning Central Rakhi Bead / Mandala */}
              <div className="relative flex items-center justify-center w-36 h-36">
                {/* Glowing Background Pulse */}
                <div className="absolute inset-0 rounded-full bg-rose-300/40 blur-xl animate-ping" />
                
                {/* Spinning central motif */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 w-28 h-28 flex items-center justify-center"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                    <defs>
                      <radialGradient id="loadingGold" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFFBEB" />
                        <stop offset="60%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#D97706" />
                      </radialGradient>
                    </defs>

                    {/* Lotus petals ring */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = 50 + Math.cos(rad) * 36;
                      const y = 50 + Math.sin(rad) * 36;
                      return (
                        <circle
                          key={`load-p-${i}`}
                          cx={x}
                          cy={y}
                          r="6"
                          fill="#FB7185"
                          stroke="#FBBF24"
                          strokeWidth="1.5"
                        />
                      );
                    })}

                    {/* Center Base */}
                    <circle cx="50" cy="50" r="32" fill="#E11D48" stroke="#FBBF24" strokeWidth="3" />
                    <circle cx="50" cy="50" r="22" fill="url(#loadingGold)" stroke="#FFFBEB" strokeWidth="2" />
                    
                    {/* Center OM symbol */}
                    <path
                      d="M46 48 C46 44 50 43 52 45 C54 46 54 49 51 51 C54 52 55 56 52 57 C49 58 46 56 46 54"
                      stroke="#7C2D12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path d="M52 46 Q56 47 56 50" stroke="#7C2D12" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                    <circle cx="54" cy="42.5" r="1.2" fill="#7C2D12" />
                  </svg>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <p className="font-heading text-2xl sm:text-3xl text-rose-700 font-bold">
                  Tying your virtual rakhi... ✨
                </p>
                <p className="font-body text-xs text-rose-500/80 mt-1 tracking-wide">
                  Fetching your special surprise
                </p>
              </motion.div>
            </motion.section>
          )}

          {/* ========================================================================= */}
          {/* SCREEN 2: CHOOSE A GIFT BOX */}
          {/* ========================================================================= */}
          {currentScreen === 'choose-box' && (
            <motion.section
              key="screen-choose-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center w-full px-2"
              id="screen-choose-gift-box"
            >
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl text-rose-700 font-bold mb-6 sm:mb-8"
              >
                Choose one to see your gift
              </motion.h2>

              {/* BOXES OR REVEAL VIEW */}
              {!screen2BoxOpen ? (
                /* Two identical cute gift boxes side by side */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 }}
                  className="flex flex-row items-center justify-center gap-6 sm:gap-12 my-2 sm:my-4"
                >
                  <GiftBox
                    id="gift-box-1"
                    isOpen={false}
                    onClick={() => handleScreen2BoxClick(1)}
                    isIdleBouncing={true}
                    label="Box 1 🎁"
                  />
                  <GiftBox
                    id="gift-box-2"
                    isOpen={false}
                    onClick={() => handleScreen2BoxClick(2)}
                    isIdleBouncing={true}
                    boxColor="roseGold"
                    label="Box 2 🎀"
                  />
                </motion.div>
              ) : (
                /* Popped open box with Wired Earphones revealed */
                <div className="flex flex-col items-center my-2 sm:my-4">
                  <div className="relative flex flex-col items-center">
                    {/* Earphones image rising out of box */}
                    <div className="relative z-20 -mb-10">
                      <EarphonesSvg />
                    </div>

                    {/* Opened Box Base */}
                    <div className="relative z-10">
                      <GiftBox
                        id="gift-box-opened"
                        isOpen={true}
                        onClick={() => {}}
                        disabled={true}
                      />
                    </div>
                  </div>

                  {/* Humorous punchline text */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="mt-4 max-w-md px-4"
                  >
                    <p className="font-heading text-2xl sm:text-3xl text-rose-800 font-bold leading-snug">
                      Congratulations! You got wired earphones cz your BRO is BROke 😭
                    </p>
                  </motion.div>

                  {/* Clickable line to proceed */}
                  <motion.button
                    type="button"
                    id="proceed-to-real-gift-btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    onClick={() => {
                      if (soundEnabled) playSparkleSound();
                      setCurrentScreen('real-gift');
                    }}
                    className="mt-6 inline-flex items-center gap-2 font-body text-sm sm:text-base font-semibold text-rose-600 hover:text-rose-700 underline underline-offset-4 decoration-rose-300 hover:decoration-rose-500 cursor-pointer group transition-all"
                  >
                    <span>I think there's more.... click to know what's there</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-rose-500" />
                  </motion.button>
                </div>
              )}
            </motion.section>
          )}

          {/* ========================================================================= */}
          {/* SCREEN 3: THE REAL GIFT */}
          {/* ========================================================================= */}
          {currentScreen === 'real-gift' && (
            <motion.section
              key="screen-real-gift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center w-full px-2"
              id="screen-the-real-gift"
            >
              {/* Header playful text */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6"
              >
                <h2 className="font-heading text-3xl sm:text-4xl text-rose-600 font-bold">
                  yeh bhi tera hi hai pagal....
                </h2>
              </motion.div>

              {/* Single Centered Gift Box with Idle Animation or Revealed Keychain */}
              <div className="flex flex-col items-center my-2">
                {!screen3BoxOpen ? (
                  <div className="flex flex-col items-center">
                    <GiftBox
                      id="real-gift-box"
                      isOpen={false}
                      onClick={handleScreen3BoxClick}
                      isIdleBouncing={true}
                      label="tap to open ✨"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    {/* Keychain Image rising out of the box */}
                    <div className="relative z-20 -mb-12">
                      <KeychainDisplay />
                    </div>

                    {/* Opened Box Base */}
                    <div className="relative z-10">
                      <GiftBox
                        id="real-gift-box-opened"
                        isOpen={true}
                        onClick={() => {}}
                        disabled={true}
                      />
                    </div>

                    {/* Text below keychain */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="mt-4 max-w-md px-4"
                    >
                      <p className="font-heading text-2xl sm:text-3xl text-rose-800 font-bold">
                        itna confuse kiya hai...fir yeh  toh banta hai..
                      </p>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* NOTE BUTTON AT THE BOTTOM */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-4 flex flex-col items-center"
              >
                <button
                  type="button"
                  id="open-heartfelt-note-btn"
                  onClick={handleOpenNote}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-body font-semibold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer group"
                >
                  <span className="tracking-wider">NOTE -&gt;</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <FileText className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </div>
                </button>
                <span className="text-xs text-rose-500 font-body mt-1.5">
                  (A letter just for you 📝)
                </span>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* POPUP / MODAL: HEARTFELT HANDWRITTEN LETTER */}
      <NoteModal isOpen={isNoteOpen} onClose={() => setIsNoteOpen(false)} />

      {/* Sweet subtle footer */}
      <footer className="w-full max-w-md text-center text-xs text-rose-400/80 font-body py-2 z-10">
        <p>Rakshabandhan Special • Made with love for little sister ❤️</p>
      </footer>
    </div>
  );
}
