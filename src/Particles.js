import React, { useMemo } from 'react';
import './Particles.css';

const NUM_DOTS = 30;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Particles() {
  // Genera posiciones y animaciones aleatorias solo una vez
  const dots = useMemo(() => (
    Array.from({ length: NUM_DOTS }).map((_, i) => {
      const size = random(8, 16);
      const left = random(0, 100); // %
      const top = random(0, 100); // %
      const duration = random(4, 9); // seg
      const delay = random(0, 5); // seg
      const blur = random(0, 5);
      return (
        <div
          key={i}
          className="totoro-dot"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: `${top}%`,
            filter: `blur(${blur}px)`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    })
  ), []);

  return <div className="totoro-particles">{dots}</div>;
} 