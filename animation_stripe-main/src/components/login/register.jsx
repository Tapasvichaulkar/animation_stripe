"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const resUserexists = await fetch("/api/userexists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserexists.json();
      if (user) {
        setError("User already exists");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        setError("Registration failed");
      } else {
        const form = e.target;
        form.reset();
        router.push("/login");  
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative grid place-items-center h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 [clip-path:polygon(0_0,100%_0,100%_40%,0_75%)]"
        src="/background.mp4"
        autoPlay
        muted
        loop
      />

      {/* Foreground Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-white bg-opacity-80 p-10 w-full max-w-sm md:max-w-lg rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-pink-700">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-base">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border border-gray-300 rounded-lg py-2.5 px-4 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
          />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 rounded-lg py-2.5 px-4 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 rounded-lg py-2.5 px-4 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
          />

          <button
            type="submit"
            disabled={loading}
            className={`py-2.5 px-4 rounded-lg text-white text-base bg-gradient-to-l from-pink-400 to-red-600 ${
              loading ? "bg-pink-300 cursor-not-allowed" : "hover:bg-pink-700"
            } transition duration-300`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500 text-white text-sm py-2 px-4 rounded-md"
            >
              {error}
            </motion.div>
          )}

<div className="mt-2 flex justify-between items-center text-md">
  

  <div>
    <Link href="/" className=" text-blue-700">
      Back
    </Link>
  </div>

<div>
    Already have an account?{" "}
    <Link href="/login" className=" text-blue-700">
      Login
    </Link>
  </div></div>
        </form>
      </motion.div>
    </div>
  );
}
