'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedGrid = () => {
  const boxesRef = useRef([]);
  const linesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const totalLines = linesRef.current.length;

    const lineToBoxMap = {
      0: [0, 1], 1: [1, 2], 2: [2, 3],
      3: [0, 4], 4: [1, 5], 5: [2, 6], 6: [3, 7],
      7: [4, 5], 8: [5, 6], 9: [6, 7],
      10: [4, 8], 11: [5, 9], 12: [6, 10], 13: [7, 11],
      14: [8, 9], 15: [9, 10], 16: [10, 11],
      17: [8, 12], 18: [9, 13], 19: [10, 14], 20: [11, 15],
      21: [12, 13], 22: [13, 14], 23: [14, 15],
    };

    const shuffledIndexes = Array.from({ length: totalLines }, (_, i) => i).sort(() => 0.5 - Math.random());

    shuffledIndexes.forEach((lineIndex, i) => {
      const line = linesRef.current[lineIndex];
      const [boxA, boxB] = lineToBoxMap[lineIndex] || [];

      if (line) {
        tl.to(line, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        }, `+=${i === 0 ? 0.5 : 0.4}`);
      }

      if (boxesRef.current[boxA] && boxesRef.current[boxB]) {
        tl.to([boxesRef.current[boxA], boxesRef.current[boxB]], {
          backgroundColor: '#6366f1',
          scale: 1.2,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          duration: 0.4,
          ease: 'back.out(1.7)',
        }).to([boxesRef.current[boxA], boxesRef.current[boxB]], {
          backgroundColor: '#e5e7eb',
          scale: 1,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          duration: 0.4,
          ease: 'power1.inOut',
        }, '+=0.5');
      }

      if (line) {
        tl.to(line, {
          opacity: 0,
          duration: 0.2,
        });
      }
    });

  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br bg-[#eff5fa]overflow-hidden">
      {/* Lines */}
      <svg className="absolute w-[400px] h-[400px]" viewBox="0 0 400 400">
        {[
          [50, 50, 150, 50], [150, 50, 250, 50], [250, 50, 350, 50],
          [50, 50, 50, 150], [150, 50, 150, 150], [250, 50, 250, 150], [350, 50, 350, 150],
          [50, 150, 150, 150], [150, 150, 250, 150], [250, 150, 350, 150],
          [50, 150, 50, 250], [150, 150, 150, 250], [250, 150, 250, 250], [350, 150, 350, 250],
          [50, 250, 150, 250], [150, 250, 250, 250], [250, 250, 350, 250],
          [50, 250, 50, 350], [150, 250, 150, 350], [250, 250, 250, 350], [350, 250, 350, 350],
          [50, 350, 150, 350], [150, 350, 250, 350], [250, 350, 350, 350],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#9ca3af"
            strokeWidth="2"
            opacity="0"
          />
        ))}
      </svg>

      {/* Grid of styled boxes */}
      <div className="grid grid-cols-4 gap-10 z-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (boxesRef.current[i] = el)}
            className="w-20 h-20 bg-gray-300 rounded-2xl text-gray-800 font-semibold flex items-center justify-center shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGrid;



