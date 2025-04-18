'use client';

import React, { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background Video with Half Diagonal Cut */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 [clip-path:polygon(0_0,100%_0,100%_40%,0_75%)]"
        src="/background.mp4"
        autoPlay
        muted
        loop
      />

      {/* Navbar */}
      <nav className="px-10 py-4 flex items-center justify-between  z-50 relative">
        {/* Logo */}
        <div className="text-white text-2xl font-bold cursor-pointer mx-40" onClick={() => router.push('/')}>
          stripe
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 font-semibold text-white text-lg items-center mx-30">         
          <li className="cursor-pointer hover:text-gray-200" onClick={() => router.push('/about')}>
           About
          </li>
          <button className="hover:text-gray-200 cursor-pointer flex items-center gap-1" onClick={() => router.push('/login')}>
            Sign in 
          </button>
          <button
            onClick={() => router.push('/contact')}
            className="bg-white text-red-600 cursor-pointer px-4 py-2 rounded-full hover:bg-gray-100 transition flex items-center gap-1"
          >
            Contact sales 
          </button>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 pt-32 gap-12">
        {/* Text Section */}
        <div className="max-w-2xl text-center md:text-left ml-40 -mt-20">
          <span className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-md">
            Preview
          </span>

          <h1 className="mt-6 text-4xl md:text-7xl font-bold leading-tight tracking-tight text-black font-sans">
            Financial infrastructure <br className="hidden md:block" />
            to grow your revenue
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md">
            Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
          </p>

          {/* Animated Button */}
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="mt-6 px-5 py-2 bg-black backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-md flex items-center gap-2 transition duration-300 hover:bg-red-200 cursor-pointer"
          >
            Request an invite
            <AnimatePresence mode="wait">
              {hovered ? (
                <motion.span
                  key="arrow-right"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              ) : (
                <motion.span
                  key="arrow-short"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  &gt;
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full h-[600px] flex items-center justify-center space-x-10">
          <div className="w-[320px] h-[500px] rounded-3xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/mobile.png"
              alt="Mobile UI"
              width={320}
              height={500}
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="w-[320px] h-[500px] rounded-3xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/dashboard.png"
              alt="Dashboard UI"
              width={600}
              height={550}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
