'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/bmw.jpg',
    text: 'Learn why BMW chose Stripe to power e-commerce and payments',
    logo: '/bmwlogo.png',
  },
  {
    image: '/amazon2.jpg',
    text: 'Amazon simplifies cross-border payments with Stripe',
    logo: '/amazon-logo.png',
  },
  {
    image: '/maersk.jpg',
    text: 'Simplifying the supply chain with Maersk',
    logo: '/maersk-logo.png',
  },
  {
    image: '/twio.jpg',
    text: 'See how Twilio increased authorization rates by 10% with Stripe',
    logo: '/twilio-logo.png',
  },
];

export default function BmwSliderSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col px-4 md:px-20 py-16 bg-white items-center ml-50">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full items-center  ">
        {/* Left Column */}
        <div className="w-full md:w-1/3 space-y-8">
          <div className="border-l-2 border-blue-600 pl-4">
            <h3 className="text-xl font-bold">Millions</h3>
            <p className="text-gray-500 text-sm">BMW owners using ConnectedDrive Store</p>
          </div>
          <div className="border-l-2 border-blue-600 pl-4">
            <h3 className="text-xl font-bold">350+</h3>
            <p className="text-gray-500 text-sm">US dealerships</p>
          </div>
          <div className="border-l-2 border-blue-600 pl-4">
            <h3 className="font-semibold">Products used</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-3 h-3 rounded-full" />
                <span className="text-gray-700">Payments</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 w-3 h-3 rounded-full" />
                <span className="text-gray-700">Connect</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="w-full md:w-2/3 relative rounded-xl overflow-hidden shadow-lg h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue/30 backdrop flex items-end p-6">
                <p className="text-white text-xl font-semibold">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logos Row - Centered Below */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-50 pt-10 mt-10 mr-20">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.logo}
            alt={`Logo ${index}`}
            className={`h-12 mx-auto transition-all duration-500 ${
              current === index ? 'grayscale-0 scale-110' : 'grayscale opacity-60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
