import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RecruiterCharacter, ArrowDoodle, StarDoodle } from './Characters';

export default function OpeningPoster({ onStart }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let raf;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = wrap.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / Math.max(r.width, 1);
        const dy = (e.clientY - cy) / Math.max(r.height, 1);
        const max = 11;
        const clamp = (v) => Math.max(-max, Math.min(max, v));
        wrap.style.setProperty('--eye-x', `${clamp(dx * 30)}px`);
        wrap.style.setProperty('--eye-y', `${clamp(dy * 30)}px`);
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-eggshell">
      <div className="flex items-center justify-between bg-black px-4 py-3 text-eggshell">
        <span className="font-display text-3xl tracking-tight leading-none">URGENT.</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">file no. 001 / karima</span>
      </div>

      <div className="flex items-center gap-2 px-4 pt-5">
        <span className="h-2 w-2 bg-panic" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">one position available</span>
      </div>

      <div className="relative px-4 pt-2">
        <h1 className="font-display text-[26vw] leading-[0.82] tracking-[-0.02em] text-black select-none">
          KARIMA
        </h1>
        <div ref={wrapRef} className="pointer-events-none absolute -right-2 top-20 w-44 sm:w-52 md:w-64">
          <RecruiterCharacter />
        </div>
      </div>

      <div className="relative z-10 px-4 pt-2 max-w-md">
        <p className="font-mono text-sm leading-relaxed">
          Applications are now open.
          <br />
          Unfortunately, there is only one candidate.
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-3 px-4 pb-16 pt-10">
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.93 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ rotate: { repeat: Infinity, duration: 0.5, ease: 'easeInOut' } }}
          className="relative grid h-40 w-40 place-items-center rounded-full border-[6px] border-black bg-acid text-center font-display text-xl leading-tight text-black shadow-sticker"
        >
          START
          <br />
          APPLICATION
          <span className="absolute -right-3 -top-3 rotate-12 font-hand text-sm">press me</span>
        </motion.button>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
          <ArrowDoodle className="h-5 w-10" />
          scroll, or tap
        </div>
      </div>

      <StarDoodle className="absolute left-4 top-44 h-8 w-8 rotate-12" />
      <span className="absolute bottom-40 left-6 -rotate-4 font-hand text-base text-panic">only 1 spot!!</span>
    </section>
  );
}