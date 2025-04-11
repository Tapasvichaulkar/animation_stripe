'use client'
import React from 'react'
import { motion } from 'framer-motion'

const circles = Array.from({ length: 20 })

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {circles.map((_, index) => {
        const size = Math.random() * 100 + 50
        const duration = Math.random() * 10 + 10
        const top = Math.random() * 100
        const left = Math.random() * 100
        const color = `hsl(${Math.random() * 360}, 70%, 70%)`

        return (
          <motion.div
            key={index}
            className="absolute rounded-full opacity-50 blur-md"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              backgroundColor: color,
            }}
            animate={{
              y: ['0%', '-100%', '0%'],
              x: ['0%', '10%', '-10%', '0%'],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </div>
  )
}

export default AnimatedBackground;
