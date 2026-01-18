"use client";

import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { SiRazorpay, SiStripe } from "react-icons/si";

export default function PaymentBox() {
  const handleGPayClick = () => {
    // Replace with your GPay redirect link
    window.location.href = "https://pay.google.com";
  };

  return (
    <>
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 [clip-path:polygon(0_0,100%_0,100%_40%,0_75%)]"
        src="/background.mp4"
        autoPlay
        muted
        loop
      />

      {/* Main content */}
      <div className="relative z-10 max-w-lg mx-auto p-6 bg-white rounded-xl shadow-xl mt-20">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Quick & Secure Payments
        </h1>
        <p className="text-xl text-pink-600 font-semibold text-center mb-4">
          Unlock Instant Access for Only $19.99
        </p>

        {/* Pay with Google Pay Button */}
        <button
          onClick={handleGPayClick}
          className="w-full bg-orange-400 text-white font-bold py-3 mt-6 rounded-xl shadow-lg hover:bg-orange-500 transform transition-all hover:scale-105"
        >
          Pay with Google Pay
        </button>

        {/* GPay Caption */}
        <p className="text-center text-sm text-gray-700 mt-2">
          Fast, Secure, and Easy Transactions
        </p>

        {/* Payment Methods Section */}
        <div className="mt-6 bg-white rounded-xl p-5 shadow-md">
          <div className="text-center text-lg font-bold text-gray-700 mb-4">
            Trusted Payment Methods
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            <FaCreditCard className="text-4xl text-red-600 transform transition-all hover:text-red-500 hover:scale-110" />
            <FaPaypal className="text-4xl text-blue-600 transform transition-all hover:text-blue-500 hover:scale-110" />
            <SiRazorpay className="text-4xl text-teal-500 transform transition-all hover:text-teal-400 hover:scale-110" />
            <SiStripe className="text-4xl text-purple-700 transform transition-all hover:text-purple-600 hover:scale-110" />
          </div>
        </div>

        {/* Chat Support */}
        <a
          href="https://wa.me/9876543210"
          className="w-full block bg-pink-500 text-white text-center font-bold py-3 mt-6 rounded-xl shadow-lg hover:bg-pink-400 transform transition-all hover:scale-105"
        >
          Need Help? Chat with Support 💬
        </a>
      </div>
    </>
  );
}
