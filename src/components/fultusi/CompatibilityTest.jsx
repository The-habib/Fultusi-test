import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PosterEntrance } from './Motion';
import { StarDoodle } from './Characters';

const questions = [
  {
    q: 'Who gets the hoodie?',
    options: [
      { label: 'ME', response: 'Bold. Possibly a lie.' },
      { label: 'KARIMA', response: 'Correct. The hoodie is hers now.' },
    ],
  },
  {
    q: 'Who is more annoying?',
    options: [
      { label: 'ME', response: 'Honest. I respect it.' },
      { label: 'KARIMA', response: 'Impossible. Reconsider.' },
      { label: 'BOTH', response: 'The only correct answer.' },
    ],
  },
  {
    q: 'Would you survive a date with me?',
    options: [
      { label: 'PROBABLY', response: 'Low bar. Accepted.' },
      { label: 'ABSOLUTELY', response: 'Confidence: noted.' },
      { label: "I'M ALREADY HERE", response: 'Then we are already winning.' },
    ],
  },
  {
    q: "Who's paying for coffee?",
    options: [
      { label: 'ME', response: 'Generous. Suspicious.' },
      { label: 'ALSO ME', response: 'I will fight you for the bill.' },
    ],
  },
];

export default function CompatibilityTest() {
  const [answers, setAnswers] = useState({});
  const allDone = questions.every((_, i) => answers[i] !== undefined);

  return (
    <section className="relative bg-black px-4 py-20 text-eggshell">
      <PosterEntrance className="mx-auto max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid">sheet 04 / examination</span>
        <h2 className="mt-2 font-display text-[13vw] leading-[0.85] tracking-tight text-acid md:text-[7rem]">
          FINAL
          <br />
          COMPATIBILITY
          <br />
          TEST
        </h2>
        <p className="mt-3 font-mono text-sm text-eggshell/70">This is extremely scientific.</p>
      </PosterEntrance>

      <div className="mx-auto mt-12 max-w-3xl space-y-8">
        {questions.map((qn, qi) => {
          const selected = answers[qi];
          return (
            <motion.div
              key={qi}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ type: 'spring', stiffness: 90, damping: 14 }}
              className="border-[5px] border-acid bg-black p-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center border-2 border-acid font-display text-lg text-acid">
                  {String(qi + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl leading-tight md:text-3xl">{qn.q}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {qn.options.map((opt) => {
                  const isSel = selected === opt.label;
                  return (
                    <motion.button
                      key={opt.label}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: opt.label }))}
                      whileHover={{ scale: 1.05, rotate: isSel ? 0 : 2 }}
                      whileTap={{ scale: 0.92 }}
                      animate={isSel ? { rotate: [0, -4, 4, 0] } : {}}
                      transition={{ duration: 0.4 }}
                      className={`border-[4px] px-5 py-3 font-display text-xl tracking-tight transition-colors ${
                        isSel
                          ? 'border-black bg-acid text-black'
                          : 'border-eggshell/60 bg-transparent text-eggshell hover:border-acid'
                      }`}
                    >
                      {opt.label}
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: -1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 inline-block border-[3px] border-black bg-acid px-3 py-1 font-hand text-base text-black"
                  >
                    {qn.options.find((o) => o.label === selected).response}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {allDone && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -3 }}
            animate={{ scale: 1, opacity: 1, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
            className="mx-auto mt-12 max-w-3xl border-[6px] border-acid bg-acid p-6 text-center text-black shadow-[10px_10px_0_0_#C0FF00]"
          >
            <StarDoodle className="mx-auto h-10 w-10" />
            <p className="mt-2 font-display text-4xl leading-none md:text-6xl">RESULTS: 100%</p>
            <p className="mt-1 font-hand text-xl">compatible (according to science)</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em]">keep going ↓</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}