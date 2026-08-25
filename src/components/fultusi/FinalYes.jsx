import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CelebrationCharacter, StarDoodle, Squiggle } from './Characters';

function Starburst({ className }) {
  const spikes = 16;
  const points = Array.from({ length: spikes * 2 }, (_, i) => {
    const ang = (Math.PI / spikes) * i - Math.PI / 2;
    const r = i % 2 === 0 ? 114 : 46;
    return `${120 + r * Math.cos(ang)},${120 + r * Math.sin(ang)}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 240 240" className={className} aria-hidden>
      <polygon points={points} fill="#FF4D00" stroke="#000" strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}

export default function FinalYes({ onRestart }) {
  useEffect(() => {
    const colors = ['#C0FF00', '#000000', '#FF4D00', '#F5F5F0'];
    confetti({ particleCount: 130, spread: 110, startVelocity: 48, origin: { y: 0.5 }, colors, scalar: 1.25 });
    const end = Date.now() + 2600;
    const tick = () => {
      confetti({ particleCount: 7, angle: 60, spread: 60, startVelocity: 55, origin: { x: 0, y: 0.75 }, colors });
      confetti({ particleCount: 7, angle: 120, spread: 60, startVelocity: 55, origin: { x: 1, y: 0.75 }, colors });
      if (Date.now() < end) requestAnimationFrame(tick);
    };
    tick();
    const t1 = setTimeout(() => confetti({ particleCount: 90, spread: 130, origin: { y: 0.3 }, colors }), 220);
    const t2 = setTimeout(() => confetti({ particleCount: 90, spread: 130, origin: { y: 0.36 }, colors }), 760);
    const sprinkle = setInterval(() => {
      confetti({ particleCount: 16, spread: 80, startVelocity: 26, origin: { y: 0.18 }, colors, gravity: 0.9, scalar: 0.9, ticks: 200 });
    }, 1100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(sprinkle); };
  }, []);

  return (
    <motion.section
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 12 }}
      className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-acid px-4 py-20"
    >
      {/* camera flash pop */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 bg-eggshell"
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      />

      {/* bursting star behind YES */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[150vw] max-w-[620px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          <Starburst className="w-full" />
        </motion.div>
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-[11vw] leading-none tracking-tight text-black md:text-6xl"
        >
          YOU SAID
        </motion.p>

        <motion.h1
          initial={{ scale: 0.3, rotate: -6, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 170, damping: 10 }}
          className="font-display text-[30vw] leading-[0.8] tracking-[-0.02em] text-black md:text-[16rem]"
        >
          YES!!!
        </motion.h1>

        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 0.85, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          className="my-4 w-40 sm:w-44"
        >
          <CelebrationCharacter />
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: -14, opacity: 0 }}
          animate={{ scale: 1, rotate: -8, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 170, damping: 8, delay: 0.5 }}
          className="border-[5px] border-black bg-eggshell px-5 py-2 shadow-sticker"
        >
          <span className="block font-display text-2xl leading-none tracking-tight text-black md:text-3xl">APPLICATION APPROVED</span>
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-black/60">file no. 001 • hire complete</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 font-display text-[12vw] leading-none tracking-tight text-black md:text-[6rem]"
        >
          KARIMA + ME
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-5 max-w-sm font-hand text-xl text-black"
        >
          Okay, now I have to figure out where we're going.
        </motion.p>

        <button
          onClick={onRestart}
          className="mt-10 border-[4px] border-black bg-eggshell px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-black shadow-sticker-sm transition-transform hover:scale-105"
        >
          ↺ experience it again
        </button>
      </div>

      <StarDoodle className="absolute left-5 top-16 h-10 w-10 rotate-12" />
      <StarDoodle className="absolute right-6 top-24 h-12 w-12 -rotate-12" fill="#000" />
      <StarDoodle className="absolute right-10 bottom-32 h-9 w-9 rotate-6" />
      <Squiggle className="absolute bottom-16 left-8 h-6 w-28" />
      <span className="absolute left-8 top-1/2 -rotate-6 font-hand text-3xl text-black">wow</span>
      <span className="absolute bottom-28 right-9 rotate-12 font-hand text-2xl text-black">finally</span>
    </motion.section>
  );
}