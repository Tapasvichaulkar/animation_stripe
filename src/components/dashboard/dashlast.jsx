"use client";
import { PieChart, Pie, Cell } from "recharts";
import {
  FaFacebookF,
  FaYoutube,
  FaSpotify,
  FaSkype,
} from "react-icons/fa";

const pieData = [
  { name: "Facebook", value: 33 },
  { name: "Youtube", value: 33 },
  { name: "Google", value: 34 },
];

const COLORS = ["#1A56DB", "#8DB3FF", "#E5EDFF"];

const transactions = [
  {
    name: "Terry P. Camacho",
    avatar: "/ICON1.png",
    amount: "+450.00",
    status: "Paid",
    statusColor: "bg-green-500",
  },
  {
    name: "John L. Foster",
    avatar: "/ICON2.png",
    amount: "+450.00",
    status: "Due",
    statusColor: "bg-yellow-400",
  },
  {
    name: "John C. Adams",
    avatar: "/ICON3.png",
    amount: "+450.00",
    status: "Cancel",
    statusColor: "bg-red-500",
  },
  {
    name: "Weston P. Thomas",
    avatar: "/ICON4.png",
    amount: "+450.00",
    status: null,
  },
];

const budgets = [
  {
    name: "Facebook Ads",
    icon: <FaFacebookF className="text-blue-600" />,
    value: 75,
    color: "bg-blue-600",
  },
  {
    name: "Youtube Premium",
    icon: <FaYoutube className="text-red-600" />,
    value: 25,
    color: "bg-green-500",
  },
  {
    name: "Spotify Music",
    icon: <FaSpotify className="text-green-500" />,
    value: 50,
    color: "bg-fuchsia-500",
  },
  {
    name: "Skype Premium",
    icon: <FaSkype className="text-sky-500" />,
    value: 45,
    color: "bg-red-500",
  },
];

export default function Graph() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#d9ecfc]  mx-20">
      {/* Statistics */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Statistics</h2>
        <div className="flex justify-center">
          <PieChart width={200} height={200}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              stroke="none"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex justify-center mt-4 space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-700 rounded-full" />
            <span>Facebook</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-300 rounded-full" />
            <span>Youtube</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-100 rounded-full" />
            <span>Google</span>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Transaction History</h2>
          <a href="#" className="text-blue-600 text-sm">See more</a>
        </div>
        <div className="space-y-4">
          {transactions.map((tx, idx) => (
            <div key={idx} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-4">
                <img src={tx.avatar} alt={tx.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">{tx.name}</div>
                  <div className="text-sm text-gray-500">5 January 2021 at 10.15 pm</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{tx.amount}</div>
                {tx.status && (
                  <span className={`text-white text-xs px-2 py-1 rounded-full ${tx.statusColor}`}>
                    {tx.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals Budget */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Goals Budget</h2>
        <div className="space-y-5">
          {budgets.map((budget, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  {budget.icon}
                  <span className="font-medium">{budget.name}</span>
                </div>
                <span className="text-sm text-gray-500">{budget.value} / 100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${budget.color} h-2 rounded-full`} style={{ width: `${budget.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
