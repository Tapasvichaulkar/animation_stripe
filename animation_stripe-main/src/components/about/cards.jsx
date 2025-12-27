// pages/index.js
import React from 'react';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-start justify-start p-6 ">
      {/* Header Section - Aligned Left */}
      <div className="mb-12 mx-60 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-lg md:text-xl mb-6">
          Explore our guides and examples to integrate Stripe.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Get started with payments
          </button>
          <button className="border border-white hover:border-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Explore all products
          </button>
        </div>
      </div>

      {/* Sections without boxes - Aligned Left */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-60">
        {/* Section 1: No-code */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-4">No-code</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Sell and get paid online</li>
            <li>Invoice clients and customers</li>
            <li>Set up recurring payments</li>
          </ul>
        </div>

        {/* Section 2: Stripe-hosted */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-4">Stripe-hosted</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Use a prebuilt checkout page</li>
            <li>Set up the customer portal</li>
          </ul>
        </div>

        {/* Section 3: For developers */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-4">For developers</h2>
          <ul className="space-y-2 text-gray-300">
            <li>API reference</li>
            <li>Development quickstart</li>
            <li>Browse our sample projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;