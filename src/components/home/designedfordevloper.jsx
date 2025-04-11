'use client'

import { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import ShinyText from './buttonanimation'

export default function HeroWithCode() {
  const codeLines = [
    "const stripe = require('stripe')('sk_test_BQokikJOvBi2HL4c');",
    '',
    'await stripe.paymentIntents.create({',
    '  amount: 2000,',
    "  currency: 'usd'",
    '});',
  ]

  return (
    <section className="min-h-screen bg-[#0a2540] text-white flex flex-col md:flex-row px-6 md:px-20 py-12">
      
      {/* Left Side Text */}
      <div className="flex-1 flex items-center mx-20">
        <div>
          <p className="text-cyan-400 font-semibold mb-2">Designed for developers</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <p>Ship faster with powerful and easy-to-use APIs</p>
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Save engineering time with unified payments functionality. We obsess over the maze of gateways,
            payments rails, and financial institutions that make up the global economic landscape so that your
            teams can build what you need on one platform.
          </p>
          <button className="bg-gradient-to-l from-[#0c7d9d] to-[#06069b] text-[#d3d2ee] font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition">
            < ShinyText   text="Read the docs →" speed={4}/>
          </button>
        </div>
      </div>

      {/* Right Side Code + Image */}
      <div className="flex-1 mt-10 md:mt-20 md:ml-16">
        <div className="bg-[#1b2b40] rounded-xl p-6 font-mono text-sm leading-relaxed shadow-lg">
          <TypeCodeBlock lines={codeLines} typingSpeed={30} />
        </div>
      </div>
    </section>
  )
}

// ✅ Character-by-character code typing + image reveal
function TypeCodeBlock({ lines, typingSpeed = 30 }) {
  const [displayed, setDisplayed] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTypingDone, setIsTypingDone] = useState(false)

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex <= lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayed(prev => prev + lines[lineIndex].charAt(charIndex))
          setCharIndex(prev => prev + 1)
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setDisplayed(prev => prev + '\n')
        setLineIndex(prev => prev + 1)
        setCharIndex(0)
      }
    } else {
      setIsTypingDone(true)
    }
  }, [charIndex, lineIndex, lines, typingSpeed])

  return (
    <>
      <pre className="whitespace-pre-wrap">
        {displayed}
        {!isTypingDone && <span className="animate-pulse">|</span>}
      </pre>

      {isTypingDone && (
        <div className="mt-6 transition-opacity duration-700 ease-in-out opacity-100">
          <img
            src="/code.png"
            alt="Typing Done"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      )}
    </>
  )
}
