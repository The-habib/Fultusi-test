import React from 'react';
import { motion } from 'framer-motion';
import { PosterEntrance } from './Motion';
import { PencilCharacter, ArrowDoodle, XDoodle } from './Characters';

const stats = [
  { label: 'POSITION', value: 'The One' },
  { label: 'LOCATION', value: 'Wherever you are' },
  { label: 'EXPERIENCE', value: 'Not required' },
  { label: 'QUALIFICATIONS', value: 'Being Fultusi' },
  { label: 'SALARY', value: 'Unlimited attention' },
];

export default function ThePosition() {
  return (
    <section id="position" className="relative bg-eggshell px-4 py-20">
      <PosterEntrance className="mx-auto max-w-3xl">
        <div className="flex items-end justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">sheet 02</span>
          <span className="rotate-2 font-hand text-base text-panic">a real job, probably</span>
        </div>
        <h2 className="mt-2 font-display text-[15vw] leading-[0.85] tracking-tight md:text-[8rem]">
          THE
          <br />
          POSITION
        </h2>
      </PosterEntrance>

      <div className="relative mx-auto mt-10 max-w-3xl">
        <span className="pointer-events-none absolute -top-10 -left-2 select-none font-display text-[40vw] leading-none text-panic/30 md:text-[16rem]">
          01
        </span>

        <div className="relative grid gap-4">
          {stats.map((st, i) => (
            <motion.div
              key={st.label}
              initial={{ x: i % 2 ? 60 : -60, opacity: 0, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 13, delay: i * 0.05 }}
              className="flex items-center justify-between gap-4 border-[5px] border-black bg-white px-4 py-4 shadow-sticker"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">{st.label}</span>
              <span className="text-right font-display text-2xl leading-tight md:text-4xl">{st.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-10 flex items-end justify-center">
          <div className="w-44 sm:w-52">
            <PencilCharacter />
          </div>
          <span className="absolute -right-1 top-2 max-w-[8rem] rotate-3 font-hand text-sm">
            highly qualified
            <ArrowDoodle className="mt-1 h-5 w-12" />
          </span>
        </div>
        <XDoodle className="absolute right-6 top-2 h-6 w-6" />
      </div>
    </section>
  );
}