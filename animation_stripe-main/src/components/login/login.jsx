"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid credentials");
        setLoading(false);
        return;
      }

      router.replace("/dashboard");
    } catch (err) {
      console.log(err);
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

      {/* Foreground Content */}
      <div className="relative z-10 bg-white bg-opacity-80 p-12 w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-700">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-lg">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="border border-gray-300 rounded-lg py-3 px-5 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg py-3 px-5 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
          />

          <button
            type="submit"
            disabled={loading}
            className={`py-3 px-5 text-lg rounded-lg text-white bg-gradient-to-l from-pink-400 to-red-600 ${
              loading ? "bg-pink-300 cursor-not-allowed" : " hover:bg-pink-700"
            } transition duration-300`}
          >
            {loading ? "Logging in..." : "Login"}
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
    <Link href="/register" className=" text-blue-700">
      Resister
    </Link>
  </div></div>
        
  
        </form>
      </div>
    </div>
  );
}
