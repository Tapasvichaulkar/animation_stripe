
import AnimatedGrid from "./animation";


// pages/sticky-layout.tsx
export default function StickyLayout() {
    return (
        <div className="flex h-screen bg-[#eff5fa] ">
            {/* Scrollable Left Section */}
            <div className="w-1/2 overflow-y-scroll scrollbar-hidden p-10 ml-50 mt-20 bg-[#eff5fa] font-sans">
                <h1 className="text-lg font-bold text-blue-600">Modular Solutions</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    A fully integrated suite of financial and payments products.
                </p>
                <p className="text-gray-600 mt-8 text-xl ">
                    Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
                </p>

                <h1 className="text-lg  mt-50 font-bold text-blue-600">Payments</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    Accept and optimise payments, globally  </p>
                <p className="text-gray-600 mt-8 text-xl ">
                    Increase authorisation rates, optimise your checkout conversion, and offer local payment methods in every market.     </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 mt-7 text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md ">
                    Start with Payments
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>
                <div className="text-sm text-gray-700 space-y-2 mt-20">
                    <div className="font-semibold text-gray-900">See also</div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Tax</span>
                        <span> for automating sales tax and VAT</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Radar</span>
                        <span> for fraud prevention and management</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Terminal</span>
                        <span> for custom in-person payments</span>
                    </div>
                </div>





                <h1 className="text-lg font-bold mt-50 text-blue-600">Billing</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    Capture recurring revenue    </p>
                <p className="text-gray-600 mt-8 text-xl ">
                    Support recurring business models, minimise churn, and automate finance operations.  </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 mt-7 text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md ">
                    Start with Biling
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>

                <div className="text-sm text-gray-700 space-y-2 mt-20">
                    <div className="font-semibold text-gray-900">See also</div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Invoicing</span>
                        <span> for invoice creation, collection, and tracking</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Revenue Recognition</span>
                        <span> for streamlined accrual accounting</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Sigma</span>
                        <span> for custom revenue reports</span>
                    </div>
                </div>
                <h1 className="text-lg font-bold mt-50 text-blue-600">Connect</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    Set up multi-party payments and payouts         </p>
                <p className="text-gray-600 mt-8 text-xl ">
                    Integrate payments into your platform or marketplace for end-to-end payments experiences.  </p>

                <button className="bg-indigo-600 hover:bg-indigo-700 mt-7 text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md ">
                    Start with Connect
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>
                <div className="text-sm text-gray-700 mt-20 space-y-2">
                    <div className="font-semibold text-gray-900">See also</div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Terminal</span>
                        <span> for custom in-person payments</span>
                    </div>

                    <div>
                        <span className="text-indigo-600 font-medium hover:underline cursor-pointer">Instant Payouts</span>
                        <span> for fast payments to users</span>
                    </div>

                    <div>
                        <span className="text-gray-900 font-semibold hover:underline cursor-pointer">Payment Elements</span>
                        <span> for customisable UIs</span>
                    </div>
                </div>

                <h1 className="text-lg font-bold mt-50 text-blue-600">Issuing</h1>
                <p className="text-6xl mt-10 font-bold text-gray-800">
                    Build a fintech offering with banking-as-a-service   </p>
                <p className="text-gray-600 mt-8 text-xl ">
                    Launch, manage, and scale a commercial card programme without any setup fees.    </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 mt-7 text-white font-semibold px-3 py-1 rounded-full inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md ">
                    Start with Issuing
                    <span className="text-white text-xl transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>










            </div>

            {/* Sticky Right Section */}
            <div className="w-1/2 sticky top-0 h-screen p-10 bg-[#eff5fa]">

                <AnimatedGrid />
            </div>
        </div>
    );
}
