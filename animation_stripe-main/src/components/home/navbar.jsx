'use client';

import React from 'react';
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const router = useRouter();

  return (
    <>
          {/* Navbar */}
          <nav className="px-10 py-4 flex items-center justify-between  z-50 relative">
          {/* Logo */}
          <div className="text-white text-2xl font-bold cursor-pointer mx-40" onClick={() => router.push('/')}>
            stripe
          </div>
  
          {/* Menu */}
          <ul className="hidden md:flex gap-6 font-semibold text-white text-lg items-center mx-30">
            
           
            <li className="cursor-pointer hover:text-gray-200" onClick={() => router.push('/dashboard')}>
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
        </>
  );
}
