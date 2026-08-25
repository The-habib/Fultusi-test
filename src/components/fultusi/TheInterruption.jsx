import React from 'react';
import { motion } from 'framer-motion';

export default function TheInterruption() {
  return (
    <section className="relative bg-eggshell px-4 py-32">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-[18vw] leading-[0.9] tracking-tight md:text-[10rem]"
        >
          OKAY.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-[12vw] leading-[0.9] tracking-tight md:text-[6rem]"
        >
          ENOUGH GAMES.
        </motion.p>

        <div className="mt-20 space-y-2">
          {['KARIMA,', 'I LIKE YOU.', 'A LOT.'].map((t, i) => (
            <motion.p
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.25 }}
              className="font-display text-[10vw] leading-[0.95] tracking-tight md:text-[5rem]"
            >
              {t}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}