"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#800000]/80 shadow-md animate-slideDown">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="text-2xl font-bold text-[#FFFDD0] cursor-pointer hover:text-[#FFF5C3] transition-all duration-300"
        >
          GlobalTrek
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-8 text-[#FFFDD0]">
          <NavItem label="Home" path="/" router={router} />
          <NavItem label="Destination" path="/destination" router={router} />
          <NavItem label="Guide Booking" path="/guidebooking" router={router} />

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-xl bg-[#FFFDD0]/30 text-[#660000] placeholder-[#660000] backdrop-blur-sm focus:outline-none shadow-inner transition-all duration-300 hover:bg-[#FFFDD0]/50"
          />

          {/* Login Button */}
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 bg-[#800000] hover:bg-[#990000] text-[#FFFDD0] rounded-xl transition-all duration-300 relative overflow-hidden ripple-effect"
          >
            Login
          </button>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        /* Slide down animation for navbar */
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }

        /* Water ripple hover effect for nav items */
        .watery-effect {
          position: absolute;
          width: 120%;
          height: 120%;
          left: -10%;
          top: -10%;
          background: radial-gradient(circle, rgba(255,255,255,0.4) 10%, transparent 60%);
          opacity: 0;
          transform: scale(0);
          transition: transform 0.5s ease-out, opacity 0.5s;
          border-radius: 50%;
          pointer-events: none;
        }

        .nav-item:hover .watery-effect {
          opacity: 1;
          transform: scale(1.5);
        }

        /* Ripple effect for buttons */
        .ripple-effect::after {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          background: white;
          opacity: 0.5;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            transform: scale(25);
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
}

/* ---------------- Navbar Item Component ---------------- */
function NavItem({ label, path, router }) {
  return (
    <div
      onClick={() => router.push(path)}
      className="relative cursor-pointer nav-item px-2 py-1 text-lg transition-all duration-300"
    >
      {label}
      <span className="watery-effect"></span>
    </div>
  );
}
