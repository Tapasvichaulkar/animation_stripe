"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { useRouter } from "next/navigation";

export default function Login() {
 const router = useRouter();

  return (
    
    <div>
    <nav className="px-10 py-3 flex items-center justify-between  z-50 relative">
        {/* Logo */}
        <div className="text-red-600 text-2xl font-bold cursor-pointer mx-40" onClick={() => router.push('/')}>
          stripe
        </div>

        {/* Menu */}
        <ul className=" text-red-600 hidden md:flex gap-6 font-semibold  text-lg items-center mx-30">     
        <div className="text-red-600  font-bold cursor-pointer " onClick={() => router.push('/')}>
          Home
        </div>
    
          <li className="cursor-pointer hover:text-gray-200" onClick={() => router.push('/about')}>
           About
          </li>
          <button className="text-red-600 cursor-pointer flex items-center gap-1" onClick={() => router.push('/login')}>
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
     
     
    <div className="relative grid place-items-center h-screen overflow-hidden -mt-15">
      {/* Background Video */}
     
     
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 [clip-path:polygon(0_100%,0_95%,100%_35%,100%_100%)]"
        src="/background.mp4"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 max-w-6xl w-full bg-[#fffdff] rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.1)] p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-lg text-gray-900">Have questions, opportunities, or feedback? I’d love to hear from you.</p>

          <div className="space-y-3 text-lg">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-600" />
              <a href="mailto:tapasvichaulkar@gmail.com" className="text-blue-400">tapasvichaulkar@gmail.com </a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-red-600" />
              +91 7385841171
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-600" />
              panvel , mumbai
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mt-6 mb-2">Follow me on social media</h2>
            <div className="flex space-x-4 text-2xl">
              <FaWhatsapp />
              <FaLinkedin />
              <FaGithub />
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex items-center justify-center">
  <video
    src="/contactUs.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full max-w-md"
  />
</div>

      </div>
</div></div>

      );
}
