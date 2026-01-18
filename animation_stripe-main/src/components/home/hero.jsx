'use client';
import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const slides = [
    {
      video: '/sky1.mp4',
      title: 'Explore Underwater Wonders'
    },
    {
      video: '/sky2.mp4',
      title: 'Discover Mountain Peaks'
    },
    {
      video: '/sk3.mp4',
      title: 'Journey Through Cities'
    },
    {
      video: '/sky4.mp4',
      title: 'Experience Nature'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <video
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 bg-gradient-to-b from-blue-900/90 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push('/')}
            >
              <Globe className="w-8 h-8 text-white" />
              <span className="text-white text-xl font-bold">GlobalTrek</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => router.push('/360photo')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                360° Photo
              </button>
              <button 
                onClick={() => router.push('/360video')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                360° Video
              </button>
              <button 
                onClick={() => router.push('/photogallery')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Photogallery
              </button>
              <button 
                onClick={() => router.push('/about')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => router.push('/login')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-900/95 backdrop-blur-sm">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <button 
                onClick={() => {
                  router.push('/360photo');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white hover:text-blue-200 py-2"
              >
                360° Photo
              </button>
              <button 
                onClick={() => {
                  router.push('/360video');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white hover:text-blue-200 py-2"
              >
                360° Video
              </button>
              <button 
                onClick={() => {
                  router.push('/photogallery');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white hover:text-blue-200 py-2"
              >
                Photogallery
              </button>
              <button 
                onClick={() => {
                  router.push('/about');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white hover:text-blue-200 py-2"
              >
                About
              </button>
              <button 
                onClick={() => {
                  router.push('/login');
                  setMobileMenuOpen(false);
                }}
                className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-center"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-4rem)] px-4">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider" style={{ fontFamily: 'cursive' }}>
            GlobalTrek
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            A virtual journey around the world
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-3xl mb-16">
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-2xl">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-6 py-4 text-gray-800 text-lg focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 360° Photo Section Preview */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 to-transparent py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
            360° Photo Gallery
          </h2>
          <p className="text-white/80 text-center text-lg">
            Explore immersive panoramic views from around the globe
          </p>
        </div>
      </div>
    </div>
  );
}