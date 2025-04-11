'use client';

import React from 'react';
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-orange-400 to-pink-600 text-white px-10 py-4 flex items-center justify-between shadow-md z-50">
      {/* Logo */}
      <div className="text-white text-2xl font-bold cursor-pointer" onClick={() => router.push('/')}>
        stripe
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 font-semibold text-white text-sm items-center">
       
        <li className="cursor-pointer hover:text-gray-200" onClick={() => router.push('/dashboard')}>
          about
        </li>
      </ul>

      {/* Right Buttons */}
      <div className="flex gap-4 items-center text-sm font-medium">
        <button className="hover:text-gray-200 flex items-center gap-1" onClick={() => router.push('/login')}>
          Sign in →
        </button>
        <button
          onClick={() => router.push('/contact')}
          className="bg-white text-orange-600 px-4 py-2 rounded-full hover:bg-gray-100 transition flex items-center gap-1"
        >
          Contact sales →
        </button>
      </div>
    </nav>
  );
}
