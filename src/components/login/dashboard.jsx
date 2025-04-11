"use client";
import { signOut } from "next-auth/react";
export default function Dashboard() {
  return (
    <div className="grid place-items-center h-screen" >
        <div className ="shadow-lg p-8 bg-zince-300 flex flex-col gap-2 my-6">
            <div>
            Name: <span className="font-bold">Rani </span>
            </div>
            <div>
                Email:<span className="font-bold">rani@gmail.com</span>
            </div>
            <button 
            onClick={()=>signOut({callbackUrl:"/"} )}
            className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300 cursor-pointer">Logout</button>

        </div>
    </div>
  )
}
