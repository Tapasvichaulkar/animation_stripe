"use client";

import { useState } from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { SiRazorpay, SiStripe } from "react-icons/si";

export default function PaymentBox() {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [message, setMessage] = useState("");

  // Dummy GPay redirect
  const handleGPayClick = () => {
    window.location.href = "https://pay.google.com";
  };

  // Handle form submission
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!amount || !cardNumber) return alert("Enter amount and card/UPI number");

    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, cardNumber }),
      });

      const data = await res.json();
      setMessage(data.message);
      setAmount("");
      setCardNumber("");
    } catch (err) {
      console.log(err);
      setMessage("Payment failed. Try again!");
    }
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
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Quick & Secure Payments
        </h1>
        <p className="text-xl text-pink-600 font-semibold text-center mb-4">
          Unlock Instant Access for Only $19.99
        </p>

        {/* Payment Form */}
        <form onSubmit={handlePayment} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="text"
            placeholder="Card / UPI Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Pay Now
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
        )}

        {/* GPay Button */}
        <button
          onClick={handleGPayClick}
          className="w-full bg-orange-400 text-white font-bold py-3 mt-6 rounded-xl shadow-lg hover:bg-orange-500 transform transition-all hover:scale-105"
        >
          Pay with Google Pay
        </button>
        <p className="text-center text-sm text-gray-700 mt-2">
          Fast, Secure, and Easy Transactions
        </p>

        {/* Trusted Payment Methods */}
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
