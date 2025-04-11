// components/BubbleBackground.js
"use client";
import { motion } from "framer-motion";

const BubbleBackground = () => {
  const bubbles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
      {bubbles.map((_, i) => {
        const size = Math.random() * 500 + 20;
        const top = Math.random() * 300;
        const left = Math.random() * 300;
        const duration = Math.random() * 15 + 10;
        const color = `hsla(${Math.random() * 360}, 70%, 75%, 0.5)`;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-md"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              backgroundColor: color,
            }}
            animate={{
              y: ["0%", "-100%", "0%"],
              x: ["0%", "20%", "-10%", "0%"],
              rotate: [0, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default BubbleBackground;
