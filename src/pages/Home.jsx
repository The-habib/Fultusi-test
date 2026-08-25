import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PaperGrain from '@/components/fultusi/PaperGrain';
import OpeningPoster from '@/components/fultusi/OpeningPoster';
import ThePosition from '@/components/fultusi/ThePosition';
import WhyFultusi from '@/components/fultusi/WhyFultusi';
import CompatibilityTest from '@/components/fultusi/CompatibilityTest';
import TheInterruption from '@/components/fultusi/TheInterruption';
import TheProposal from '@/components/fultusi/TheProposal';
import FinalYes from '@/components/fultusi/FinalYes';
import { Marquee } from '@/components/fultusi/Motion';

export default function Home() {
  const [yes, setYes] = useState(false);

  const scrollToPosition = useCallback(() => {
    document.getElementById('position')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const restart = useCallback(() => {
    setYes(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="relative min-h-[100svh] overflow-x-hidden bg-eggshell text-black">
      <PaperGrain />

      <AnimatePresence mode="wait">
        {yes ? (
          <motion.div key="yes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FinalYes onRestart={restart} />
          </motion.div>
        ) : (
          <motion.div key="exp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <OpeningPoster onStart={scrollToPosition} />
            <ThePosition />
            <Marquee className="border-y-[6px] border-black bg-black py-2 font-display text-3xl text-acid">
              KARIMA • KARIMA • KARIMA • KARIMA •
            </Marquee>
            <WhyFultusi />
            <CompatibilityTest />
            <TheInterruption />
            <TheProposal onYes={() => { setYes(true); window.scrollTo({ top: 0 }); }} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}