import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FairEnoughCharacter, StarDoodle, ArrowDoodle } from './Characters';

export default function TheProposal({ onYes }) {
  const [stage, setStage] = useState('idle'); // idle | no

  return (
    <section className="relative min-h-[100svh] bg-eggshell px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[16vw] leading-none tracking-tight md:text-[9rem]"
        >
          SO…
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.1 }}
          className="mt-4 font-display text-[12vw] leading-[0.85] tracking-tight md:text-[6.5rem]"
        >
          WILL YOU GO
          <br />
          OUT WITH ME?
        </motion.h2>

        <div className="mt-12 flex flex-col items-center gap-6">
          <motion.button
            onClick={onYes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={stage === 'no' ? { scale: 1.12 } : { rotate: [-1, 1, -1] }}
            transition={stage === 'no' ? { type: 'spring', stiffness: 200 } : { rotate: { repeat: Infinity, duration: 0.8 } }}
            className="grid h-44 w-[78%] place-items-center rounded-[14px] border-[7px] border-black bg-acid font-display text-6xl text-black shadow-sticker md:h-52 md:text-7xl"
          >
            YES
          </motion.button>

          <motion.button
            onClick={() => setStage('no')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="border-[4px] border-black bg-eggshell px-8 py-3 font-display text-xl text-black shadow-sticker-sm"
          >
            NO
          </motion.button>
        </div>

        <AnimatePresence>
          {stage === 'no' && (
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 90, damping: 12 }}
              className="relative mx-auto mt-14 max-w-md"
            >
              <div className="relative mx-auto w-44">
                <FairEnoughCharacter />
                <span className="absolute left-1/2 top-3 w-[170px] -translate-x-1/2 text-center font-hand text-lg leading-tight text-black">
                  fair enough.
                </span>
              </div>
              <p className="mt-4 text-center font-display text-3xl">Want to reconsider?</p>
              <div className="mt-2 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
                <ArrowDoodle className="h-5 w-10" /> the big green one ↑
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <StarDoodle className="absolute right-6 top-10 h-10 w-10 rotate-12" />
      </div>
    </section>
  );
}