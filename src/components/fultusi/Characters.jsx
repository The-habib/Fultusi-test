import React from 'react';

export const INK = '#000000';
export const ACID = '#C0FF00';
export const PANIC = '#FF4D00';
export const EGG = '#F5F5F0';

// base stroke style (fill:'none'); for filled shapes put fill AFTER the spread
const s = (extra = {}) => ({
  stroke: INK,
  strokeWidth: 7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
  ...extra,
});

/* ---------- CHARACTERS ---------- */

export function RecruiterCharacter() {
  return (
    <svg viewBox="0 0 320 400" className="w-full h-full overflow-visible" role="img" aria-label="A wobbly recruiter searching through a magnifying glass">
      <ellipse cx="112" cy="372" rx="20" ry="9" fill={INK} />
      <ellipse cx="214" cy="372" rx="20" ry="9" fill={INK} />
      <path d="M125 312 L112 366" {...s()} />
      <path d="M205 312 L214 366" {...s()} />
      <path d="M66 168 C60 96 120 56 162 58 C214 60 258 104 256 176 C254 250 210 314 160 312 C104 310 70 244 66 168 Z" {...s()} fill={EGG} />
      <path d="M72 176 L34 212" {...s()} />
      <path d="M250 168 L286 132" {...s()} />
      <path d="M262 150 L246 168" {...s({ strokeWidth: 10 })} />
      <circle cx="300" cy="108" r="40" {...s()} fill={ACID} fillOpacity={0.35} />
      <circle cx="128" cy="156" r="32" {...s()} fill="#fff" />
      <circle cx="196" cy="156" r="32" {...s()} fill="#fff" />
      <g style={{ transform: 'translate(var(--eye-x, 0px), var(--eye-y, 0px))' }}>
        <circle cx="136" cy="162" r="11" fill={INK} />
        <circle cx="204" cy="162" r="11" fill={INK} />
      </g>
      <path d="M138 224 Q162 214 186 224" {...s()} />
      <path d="M108 120 L150 128" {...s({ strokeWidth: 6 })} />
      <path d="M176 128 L216 120" {...s({ strokeWidth: 6 })} />
    </svg>
  );
}

export function PencilCharacter() {
  return (
    <svg viewBox="0 0 320 400" className="w-full h-full overflow-visible" role="img" aria-label="A character holding a giant pencil">
      <ellipse cx="120" cy="372" rx="20" ry="9" fill={INK} />
      <ellipse cx="200" cy="372" rx="20" ry="9" fill={INK} />
      <path d="M132 312 L120 366" {...s()} />
      <path d="M192 312 L200 366" {...s()} />
      <path d="M80 170 C80 110 120 70 160 70 C200 70 240 110 240 170 C240 240 200 312 160 312 C120 312 80 240 80 170 Z" {...s()} fill={EGG} />
      <g transform="rotate(-34 160 160)">
        <rect x="140" y="-40" width="40" height="220" {...s()} fill={PANIC} />
        <rect x="140" y="-40" width="40" height="40" fill={INK} />
        <path d="M140 180 L180 180 L160 224 Z" {...s()} fill={EGG} />
        <rect x="140" y="50" width="40" height="14" fill={INK} />
      </g>
      <path d="M86 176 L128 150" {...s()} />
      <path d="M234 176 L192 150" {...s()} />
      <path d="M112 150 L142 160" {...s({ strokeWidth: 7 })} />
      <path d="M178 160 L208 150" {...s({ strokeWidth: 7 })} />
      <path d="M138 214 L186 214" {...s()} />
      <path d="M140 209 l8 -7 M156 209 l8 -7 M172 209 l8 -7" {...s({ strokeWidth: 5 })} />
    </svg>
  );
}

export function TelescopeCharacter() {
  return (
    <svg viewBox="0 0 320 400" className="w-full h-full overflow-visible" role="img" aria-label="A character searching through a telescope">
      <ellipse cx="120" cy="372" rx="20" ry="9" fill={INK} />
      <ellipse cx="208" cy="372" rx="20" ry="9" fill={INK} />
      <path d="M132 312 L120 366" {...s()} />
      <path d="M196 312 L208 366" {...s()} />
      <path d="M82 172 C82 112 122 72 162 72 C202 72 242 112 242 172 C242 242 202 312 162 312 C122 312 82 242 82 172 Z" {...s()} fill={EGG} />
      <g transform="rotate(-26 230 120)">
        <rect x="206" y="40" width="48" height="150" rx="10" {...s()} fill={ACID} />
        <rect x="206" y="40" width="48" height="22" fill={INK} />
        <circle cx="230" cy="190" r="26" {...s({ strokeWidth: 8 })} />
      </g>
      <path d="M236 176 L262 150" {...s()} />
      <path d="M120 150 L146 156" {...s({ strokeWidth: 7 })} />
      <circle cx="196" cy="156" r="10" fill={INK} />
      <circle cx="162" cy="216" r="10" {...s({ strokeWidth: 6 })} />
    </svg>
  );
}

export function HugCharacter() {
  return (
    <svg viewBox="0 0 360 400" className="w-full h-full overflow-visible" role="img" aria-label="A character hugging a giant letter U">
      <path d="M120 60 L120 230 C120 300 240 300 240 230 L240 60" {...s({ strokeWidth: 10 })} fill={ACID} />
      <ellipse cx="180" cy="300" rx="70" ry="50" {...s()} fill={EGG} />
      <path d="M112 300 C70 270 70 180 120 170" {...s()} />
      <path d="M248 300 C290 270 290 180 240 170" {...s()} />
      <path d="M150 296 q14 14 28 0" {...s({ strokeWidth: 6 })} />
      <path d="M182 296 q14 14 28 0" {...s({ strokeWidth: 6 })} />
      <circle cx="146" cy="312" r="8" fill={PANIC} opacity={0.6} />
      <circle cx="214" cy="312" r="8" fill={PANIC} opacity={0.6} />
      <path d="M160 322 q20 16 40 0" {...s({ strokeWidth: 6 })} />
      <path d="M300 90 l6 14 l14 6 l-14 6 l-6 14 l-6 -14 l-14 -6 l14 -6 Z" {...s({ strokeWidth: 4 })} fill={PANIC} />
    </svg>
  );
}

export function FairEnoughCharacter() {
  return (
    <svg viewBox="0 0 320 420" className="w-full h-full overflow-visible" role="img" aria-label="A character holding a sign">
      <ellipse cx="120" cy="392" rx="20" ry="9" fill={INK} />
      <ellipse cx="208" cy="392" rx="20" ry="9" fill={INK} />
      <path d="M132 332 L120 386" {...s()} />
      <path d="M196 332 L208 386" {...s()} />
      <path d="M82 192 C82 132 122 92 162 92 C202 92 242 132 242 192 C242 262 202 332 162 332 C122 332 82 262 82 192 Z" {...s()} fill={EGG} />
      <path d="M90 200 L70 120" {...s()} />
      <path d="M234 200 L250 120" {...s()} />
      <path d="M160 120 L160 60" {...s({ strokeWidth: 8 })} />
      <rect x="70" y="10" width="180" height="70" rx="6" {...s({ strokeWidth: 6 })} fill={ACID} />
      <path d="M120 176 L146 182" {...s({ strokeWidth: 6 })} />
      <path d="M178 182 L204 176" {...s({ strokeWidth: 6 })} />
      <path d="M150 232 L176 232" {...s()} />
    </svg>
  );
}

export function CelebrationCharacter() {
  return (
    <svg viewBox="0 0 320 400" className="w-full h-full overflow-visible" role="img" aria-label="A celebrating character">
      <path d="M132 300 L110 350" {...s()} />
      <path d="M196 300 L218 348" {...s()} />
      <ellipse cx="104" cy="352" rx="18" ry="8" fill={INK} />
      <ellipse cx="224" cy="350" rx="18" ry="8" fill={INK} />
      <path d="M80 150 C80 96 120 60 162 60 C204 60 244 96 244 158 C244 230 204 300 162 300 C120 300 80 230 80 150 Z" {...s()} fill={ACID} />
      <path d="M84 168 L40 110" {...s()} />
      <path d="M240 168 L284 108" {...s()} />
      <path d="M284 108 L284 60" {...s({ strokeWidth: 6 })} />
      <path d="M284 60 L312 70 L284 80 Z" {...s({ strokeWidth: 4 })} fill={PANIC} />
      <path d="M118 156 q16 16 32 0" {...s({ strokeWidth: 7 })} />
      <path d="M174 156 q16 16 32 0" {...s({ strokeWidth: 7 })} />
      <path d="M134 200 q28 26 56 0" {...s({ strokeWidth: 7 })} />
      <circle cx="110" cy="186" r="9" fill={PANIC} opacity={0.7} />
      <circle cx="214" cy="186" r="9" fill={PANIC} opacity={0.7} />
    </svg>
  );
}

/* ---------- DOODLES ---------- */

export function ArrowDoodle({ className }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 30 C30 10 60 10 88 30" />
      <path d="M88 30 L70 22 M88 30 L74 40" />
    </svg>
  );
}

export function XDoodle({ className, color = INK }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round">
      <path d="M14 14 L46 46 M46 14 L14 46" />
    </svg>
  );
}

export function StarDoodle({ className, fill = PANIC }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      <path d="M30 6 L36 24 L54 24 L40 36 L46 54 L30 44 L14 54 L20 36 L6 24 L24 24 Z" fill={fill} stroke={INK} strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

export function Squiggle({ className }) {
  return (
    <svg viewBox="0 0 120 30" className={className} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round">
      <path d="M4 15 C16 2 24 28 36 15 C48 2 56 28 68 15 C80 2 88 28 100 15 C106 8 112 18 116 15" />
    </svg>
  );
}

export function UnderlineDoodle({ className }) {
  return (
    <svg viewBox="0 0 200 24" className={className} fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round">
      <path d="M6 14 C40 4 80 22 120 10 C150 2 180 16 194 8" />
    </svg>
  );
}