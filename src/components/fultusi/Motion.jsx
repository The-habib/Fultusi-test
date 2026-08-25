import React from 'react';
import { motion } from 'framer-motion';

export function PosterEntrance({ children, className = '', rotate = 0, y = 80 }) {
  return (
    <motion.div
      className={className}
      initial={{ y, rotate: rotate - 2, opacity: 0 }}
      whileInView={{ y: 0, rotate, opacity: 1 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 14 }}
    >
      {children}
    </motion.div>
  );
}

export function Marquee({ children, className = '' }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-flex animate-marquee will-change-transform">
        <span className="px-4">{children}</span>
        <span className="px-4" aria-hidden>{children}</span>
      </div>
    </div>
  );
}