"use client";
import BubbleBackground from "./cardbackground";

function BuiltForGrowth() {
  return (
    <section className="bg-[#edf6fd] py-10 px-4 mt-20">
      <div className="max-w-3xl mx-60 ">
        <p className="text-indigo-600 font-semibold text-lg mb-8 mt-20">
          Built for growth
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Take your start-up further, faster
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed text-xl">
          Startups build on Stripe to launch faster, adapt as they grow, and
          automate workflows to do more with less. Build your own API-based
          integration or use our low- to no-code solutions.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 py-16 bg-[#edf6fd] mx-40">
        {/* Card 1 */}
        <div className="relative bg-white p-1 rounded-2xl shadow-md mt-30 overflow-hidden">
          <div className="relative z-10">
            <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden">
              <BubbleBackground />
              <div className="flex w-2/3 h-50 ml-20 relative z-10">
                <img src="/atlas.png" alt="Atlas" />
              </div>
            </div>
            <div className="mt-6 p-4">
              <div className="flex items-center gap-2">
                <img
                  src="/atlas-logo.png"
                  alt="Atlas"
                  className="h-10 w-23 rounded-sm"
                />
              </div>
              <h2 className="text-xl font-bold mt-2">Incorporate your company</h2>
              <p className="text-gray-500 text-lg mt-1 mb-4">
                Form a legal entity, issue stock, and start accepting payments.
              </p>
              <a href="#" className="text-blue-600 font-medium mt-2 inline-block">
                Learn about Atlas →
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white p-1 rounded-2xl shadow-md mb-40 overflow-hidden">
          <div className="relative z-10">
            <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden">
              <BubbleBackground />
              <div className="flex flex-row w-full md:w-1/3 gap-6 relative z-10">
                <img
                  src="/payment.png"
                  alt="Top Image"
                  className="rounded-lg shadow-md mb-10 ml-5"
                />
                <img
                  src="/pay.png"
                  alt="Bottom Image"
                  className="rounded-lg shadow-md mt-10 ml-20"
                />
              </div>
            </div>
            <div className="mt-6 p-4">
              <div className="flex items-center gap-2">
                <img
                  src="/payment-logo.png"
                  alt="Payment"
                  className="h-10 w-40 rounded-sm"
                />
              </div>
              <h2 className="text-2xl font-bold mt-2">Validate your idea</h2>
              <p className="text-gray-500 text-lg mb-4 mt-4">
                Test your product idea by launching payments with little to no
                code.
              </p>
              <a href="#" className="text-blue-600 font-medium mt-2 inline-block">
                Learn about payment →
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white p-1 rounded-2xl shadow-md -mt-1 overflow-hidden">
          <div className="relative z-10">
            <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden">
              <BubbleBackground />
              <div className="flex w-2/3 h-50 ml-20 relative z-10">
                <img src="/invoice.png" alt="Invoice" />
              </div>
            </div>
            <div className="mt-6 p-4">
              <div className="flex items-center gap-2">
                <img
                  src="/atlas-logo.png"
                  alt="Atlas"
                  className="h-10 w-20 rounded-sm"
                />
              </div>
              <h2 className="text-xl font-bold mt-2">Incorporate your company</h2>
              <p className="text-gray-500 text-lg mt-1 mb-4">
                Form a legal entity, issue stock, and start accepting payments.
              </p>
              <a href="#" className="text-blue-600 font-medium mt-2 inline-block">
                Learn about Atlas →
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white p-1 rounded-2xl shadow-md -mt-40 mb-40 overflow-hidden">
          <div className="relative z-10">
            <div className="bg-gray-100 rounded-xl p-4 relative overflow-hidden">
              <BubbleBackground />
              <div className="flex w-2/3 h-50 ml-20 relative z-10">
                <img src="/pay.png" alt="Payment" />
              </div>
            </div>
            <div className="mt-6 p-4">
              <div className="flex items-center gap-2">
                <img
                  src="/atlas-logo.png"
                  alt="Atlas"
                  className="h-10 w-20 rounded-sm"
                />
              </div>
              <h2 className="text-xl font-bold mt-2">Incorporate your company</h2>
              <p className="text-gray-500 text-lg mt-1 mb-4">
                Form a legal entity, issue stock, and start accepting payments.
              </p>
              <a href="#" className="text-blue-600 font-medium mt-2 inline-block">
                Learn about Atlas →
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default BuiltForGrowth;
