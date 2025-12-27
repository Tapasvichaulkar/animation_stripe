"use client";
import React from 'react';

import { useRouter } from "next/navigation";// ✅ Correct for pages router
import Orb from './animation';

export default function HeroSection() {
    const router = useRouter();

  return (
    <div>
      <nav className="px-10 py-4 flex items-center justify-between bg-[#0a192f] z-50 relative">
        <div
          className="text-white text-2xl font-bold cursor-pointer mx-40"
          onClick={() => router.push('/')}
        >
          stripe
        </div>

        <ul className="hidden md:flex gap-6 font-semibold text-white text-lg items-center mx-30">
          <li
            className="cursor-pointer hover:text-gray-200"
            onClick={() => router.push('/')}
          >
            Home
          </li>
          <button
            className="hover:text-gray-200 cursor-pointer flex items-center gap-1"
            onClick={() => router.push('/login')}
          >
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

      <div className="w-full h-[600px] relative flex items-center justify-center bg-[#0a192f]">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
        <div className="absolute text-white text-6xl font-semibold text-center">
          About us
        </div>
      </div>
    </div>
  );
}
