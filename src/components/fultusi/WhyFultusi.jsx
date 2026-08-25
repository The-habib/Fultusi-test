import React from 'react';
import { PosterEntrance } from './Motion';
import { TelescopeCharacter, HugCharacter, StarDoodle, Squiggle } from './Characters';

export default function WhyFultusi() {
  return (
    <section className="relative bg-eggshell px-4 py-20">
      <PosterEntrance className="mx-auto max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">sheet 03</span>
        <h2 className="mt-2 font-display text-[13vw] leading-[0.85] tracking-tight md:text-[7rem]">
          WHY KARIMA?
        </h2>
        <p className="mt-3 max-w-sm font-mono text-xs text-black/60">
          Three posters. One thesis. No further questions.
        </p>
      </PosterEntrance>

      <div className="mx-auto mt-10 max-w-3xl space-y-10">
        <PosterEntrance rotate={-1} className="relative overflow-hidden border-[6px] border-black bg-acid px-5 py-10 shadow-sticker">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">poster 01 / findings</span>
          <h3 className="mt-4 font-display text-[12vw] leading-[0.82] tracking-tight md:text-[5.5rem]">
            YOU MAKE
            <br />
            MY BRAIN
            <br />
            <span className="inline-block -rotate-3 text-panic">LAG.</span>
          </h3>
          <div className="mt-6 flex items-center gap-3">
            <Squiggle className="h-5 w-24" />
            <span className="font-hand text-base">loading… 99%</span>
          </div>
          <StarDoodle className="absolute -right-3 -top-3 h-12 w-12 rotate-12" />
        </PosterEntrance>

        <PosterEntrance rotate={1} className="relative overflow-hidden border-[6px] border-black bg-white px-5 py-16 shadow-sticker">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">poster 02 / evidence</span>
          <div className="relative mt-4 min-h-[260px]">
            <div className="absolute right-0 top-0 w-40 opacity-90">
              <TelescopeCharacter />
            </div>
            <h3 className="max-w-[14rem] font-display text-[8vw] leading-[0.9] tracking-tight md:text-[3.4rem]">
              YOU ARE
              <br />
              WEIRDLY EASY
              <br />
              TO MISS.
            </h3>
            <span className="absolute bottom-0 left-0 max-w-[10rem] rotate-2 font-hand text-sm text-panic">
              (which is the problem)
            </span>
          </div>
        </PosterEntrance>

        <PosterEntrance rotate={-1} className="relative overflow-hidden border-[6px] border-black bg-panic px-5 py-10 text-black shadow-sticker">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">poster 03 / conclusion</span>
          <div className="relative mt-4 flex flex-col items-center">
            <div className="w-56">
              <HugCharacter />
            </div>
            <h3 className="-mt-6 text-center font-display text-[11vw] leading-[0.85] tracking-tight md:text-[5rem]">
              UNFORTUNATELY,
              <br />
              I LIKE
              <br />
              YOU.
            </h3>
          </div>
        </PosterEntrance>
      </div>
    </section>
  );
}