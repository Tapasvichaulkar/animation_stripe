'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function IntezHero() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 [clip-path:polygon(0_0,100%_0,100%_40%,0_75%)]"
        src="/background.mp4"
        autoPlay
        muted
        loop
      />

      {/* Gradient Overlay (Optional for readability) */}
      <div className="absolute inset-0 "></div>

      {/* Content Wrapper */}
      <div className="relative z-20">
        {/* Navbar */}
        <nav className="px-10 py-3 flex items-center justify-between z-50">
          {/* Logo */}
          <div
            className="text-2xl font-bold cursor-pointer mx-40 text-white"
            onClick={() => router.push('/')}
          >
            stripe
          </div>

          {/* Menu */}
          <ul className="hidden md:flex gap-6 font-semibold text-lg items-center mx-30">
            <div
              className="font-bold cursor-pointer text-white"
              onClick={() => router.push('/')}
            >
              Home
            </div>

            <li
              className="cursor-pointer hover:text-gray-400 text-white"
              onClick={() => router.push('/about')}
            >
              About
            </li>

            <button
              onClick={() => router.push('/contact')}
              className="bg-white cursor-pointer px-4 py-2 rounded-full hover:bg-gray-100 transition flex items-center gap-1 text-red-600"
            >
              Contact sales
            </button>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-6 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Online payment <br /> management dashboard
              </h2>
              <p className="mt-6 text-gray-600 text-lg">
                Intez is the complete UX & UI dashboard for online payment. Here included balance,
                bill, invoice, and all user setting pages including profile, application, activity,
                payment method, API, sign in & sign up etc.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="/intez.jpg"
                  alt="Dashboard preview"
                  width={800}
                  height={500}
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating Buy Button */}
          <div className="absolute top-8 right-8 mt-10">
            <button
              onClick={() => router.push('/payment')}
              className="flex items-center bg-black text-white font-medium py-2 px-6 rounded-xl shadow-md hover:bg-gray-900 transition"
            >
              buy
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
 