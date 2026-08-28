/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Upload, RefreshCw } from 'lucide-react';

export const KeychainDisplay: React.FC = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [customImg, setCustomImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Primary image is your uploaded file: IMG_20260828_091832-1.jpg
  const productPhotos = [
    '/IMG_20260828_091832-1.jpg',
    'IMG_20260828_091832-1.jpg',
    '/zenitsu_main.jpg',
    '/zenitsu_front_0.jpg',
    '/zenitsu_front_1.jpg',
    '/zenitsu_front_2.jpg',
  ];

  // Check if a custom uploaded image was cached locally
  useEffect(() => {
    try {
      const saved = localStorage.getItem('rakhi_zenitsu_keychain_img');
      if (saved) {
        setCustomImg(saved);
      }
    } catch (e) {
      console.debug('LocalStorage not available', e);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomImg(result);
          try {
            localStorage.setItem('rakhi_zenitsu_keychain_img', result);
          } catch (err) {
            console.debug('Could not cache file', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentSource = customImg || productPhotos[photoIndex] || '/IMG_20260828_091832-1.jpg';

  const handleImgError = () => {
    if (!customImg && photoIndex < productPhotos.length - 1) {
      setPhotoIndex((prev) => prev + 1);
    }
  };

  const cycleNextAngle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImg(null);
    setPhotoIndex((prev) => (prev + 1) % productPhotos.length);
  };

  return (
    <motion.div
      initial={{ scale: 0.3, y: 80, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 17,
        delay: 0.15,
      }}
      className="relative flex flex-col items-center justify-center p-3 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-amber-300 shadow-2xl w-64 sm:w-72 max-w-xs overflow-hidden group"
    >
      {/* Golden aura background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/70 via-yellow-50/40 to-transparent pointer-events-none" />

      {/* Sparkle icons around frame */}
      <span className="absolute top-2 left-3 text-amber-500 text-lg animate-ping">✨</span>
      <span className="absolute top-4 right-3 text-rose-500 text-base animate-pulse">💖</span>
      <span className="absolute bottom-3 right-4 text-amber-400 text-sm">⚡</span>

      <div className="relative w-full aspect-[4/5] flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 via-neutral-900 to-black border border-amber-200/50 shadow-inner">
        <img
          src={currentSource}
          alt="Demon Slayer Zenitsu Chibi Keychain"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover sm:object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
          onError={handleImgError}
        />

        {/* Action buttons on hover */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={cycleNextAngle}
            className="p-1.5 rounded-lg bg-black/60 text-white/80 hover:text-white hover:bg-black/80 backdrop-blur-sm text-xs flex items-center gap-1"
            title="Switch View / Angle"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-1.5 rounded-lg bg-black/60 text-white/80 hover:text-white hover:bg-black/80 backdrop-blur-sm text-xs flex items-center gap-1"
            title="Upload Custom Photo"
          >
            <Upload className="w-3.5 h-3.5" />
          </button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      <div className="mt-2.5 text-center flex items-center justify-center gap-1.5">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold tracking-wide border border-amber-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Zenitsu Demon Slayer Keychain
        </span>
      </div>
    </motion.div>
  );
};
