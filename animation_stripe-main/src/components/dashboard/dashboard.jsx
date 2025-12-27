import Head from "next/head";
import Graph from "./dashlast";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="min-h-screen bg-[#d9ecfc] p-6 ">
        {/* Header */}
        <div className="mb-6 mx-20">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome Stripe Dashboard</p>
        </div>

        {/* Stats + Expenses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-20">
          {/* Stats Box */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "432568",
                  label: "Last Balance",
                  icon: "💼",
                  bg: "bg-blue-600",
                },
                {
                  value: "245860",
                  label: "Hold Balance",
                  icon: "💰",
                  bg: "bg-pink-600",
                },
                {
                  value: "25.35",
                  label: "Current Rate",
                  icon: "📈",
                  bg: "bg-green-600",
                },
                {
                  value: "22.56",
                  label: "Bounce Rate",
                  icon: "📉",
                  bg: "bg-rose-600",
                },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center bg-gray-100 p-4 rounded-lg">
                  <div className={`text-white p-3 rounded-full ${stat.bg} mr-4 text-xl`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expenses Chart Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Expenses</h2>
            <div className="h-60 bg-blue-200 rounded-lg flex items-center justify-center text-blue-700 font-semibold">
              <img src="expenses.png"/>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mx-20">
  {/* Unpaid Bills */}
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Unpaid Bills</h2>
    <div className="text-sm text-gray-700 space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-400">Service</span>
        <span className="font-medium">Youtube Chanel</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Issued</span>
        <span className="font-medium">March 17, 2021</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Payment Due</span>
        <span className="font-medium">17 Days</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Paid</span>
        <span className="font-medium">0.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Amount to pay</span>
        <span className="font-medium text-green-600">$532.69</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Payment Method</span>
        <span className="font-medium">Paypal</span>
      </div>
    </div>
  </div>

  {/* Debit Cards */}
  <div className="flex flex-col gap-6 ">
    {/* Visa Card */}
    <div className="bg-black text-white p-6 rounded-lg shadow flex flex-col justify-between ">
      <div>
        <h3 className="text-sm">Debit Card</h3>
        <p className="text-xl tracking-widest font-semibold mt-4">1234 5678 7890 9875</p>
      </div>
      <div className="flex justify-between items-end mt-6">
        <p className="font-semibold">Tapasvi chaulkar</p>
        <p className="text-sm">EXP: <span className="font-bold">12/21</span></p>
      </div>
    
    </div>

    {/* Payoneer Card */}
    <div className="bg-white text-black p-6 rounded-lg shadow flex flex-col justify-between">
      <div>
        <h3 className="text-sm text-gray-600">Debit Card</h3>
        <p className="text-xl tracking-widest font-semibold mt-4">1234 5678 7890 9875</p>
      </div>
      <div className="flex justify-between items-end mt-6">
        <p className="font-semibold">Tapasvi chaulkar</p>
        <p className="text-sm">EXP: <span className="font-bold">12/21</span></p>
      </div>
      
    </div>
  </div>

  {/* Balance Details */}
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Balance Details</h2>
    <p className="text-sm text-gray-500">Total Balance</p>
    <p className="text-3xl font-bold text-gray-800 mt-2">$221,478</p>

    <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
      <div className="bg-blue-600 text-white p-4 rounded-lg">
        <p>Last Month</p>
        <p className="text-lg font-semibold">$42,678</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
        <p>Expenses</p>
        <p className="text-lg font-semibold">$1,798</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
        <p>Taxes</p>
        <p className="text-lg font-semibold">$255.25</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
        <p>Debt</p>
        <p className="text-lg font-semibold">$365,478</p>
      </div>
    </div>
  </div>
</div>

<Graph/>
      </div>
    </>
  );
}
