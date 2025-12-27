const products = [
    {
      category: "Payments",
      items: [
        { name: "Payments", description: "Online payments", color: "from-cyan-500 to-blue-500", glow: "shadow-[0_4px_20px_rgba(34,211,238,0.4)]" },
        { name: "Terminal", description: "In-person and omnichannel payments", color: "from-purple-500 to-pink-500", glow: "shadow-[0_4px_20px_rgba(168,85,247,0.4)]" },
        { name: "Connect", description: "Payments for platforms", color: "from-emerald-500 to-green-500", glow: "shadow-[0_4px_20px_rgba(52,211,153,0.4)]" },
        { name: "Radar", description: "Fraud and risk management", color: "from-pink-500 to-purple-500", glow: "shadow-[0_4px_20px_rgba(236,72,153,0.4)]" },
        { name: "Climate", description: "Carbon removal", color: "from-green-400 to-lime-500", glow: "shadow-[0_4px_20px_rgba(132,204,22,0.4)]" },
        { name: "Identity", description: "Online identity verification", color: "from-fuchsia-500 to-pink-500", glow: "shadow-[0_4px_20px_rgba(232,121,249,0.4)]" },
        { name: "Financial Connections", description: "Connect users' financial accounts", color: "from-teal-500 to-blue-500", glow: "shadow-[0_4px_20px_rgba(20,184,166,0.4)]" },
        { name: "Crypto", description: "Accept, onramp, or pay out in crypto", color: "from-indigo-500 to-purple-600", glow: "shadow-[0_4px_20px_rgba(99,102,241,0.4)]" },
      ],
    },
    {
      category: "Finance Automation",
      items: [
        { name: "Billing", description: "Subscriptions and recurring payments", color: "from-yellow-400 to-orange-500", glow: "shadow-[0_4px_20px_rgba(251,191,36,0.4)]" },
        { name: "Tax", description: "Sales tax and VAT automation", color: "from-rose-400 to-pink-500", glow: "shadow-[0_4px_20px_rgba(251,113,133,0.4)]" },
        { name: "Revenue Recognition", description: "Accounting automation", color: "from-violet-500 to-fuchsia-500", glow: "shadow-[0_4px_20px_rgba(139,92,246,0.4)]" },
        { name: "Sigma", description: "Custom reports", color: "from-sky-500 to-blue-600", glow: "shadow-[0_4px_20px_rgba(56,189,248,0.4)]" },
        { name: "Data Pipeline", description: "Data warehouse sync", color: "from-red-400 to-pink-500", glow: "shadow-[0_4px_20px_rgba(248,113,113,0.4)]" },
        { name: "Atlas", description: "Startup incorporation", color: "from-amber-500 to-orange-600", glow: "shadow-[0_4px_20px_rgba(251,191,36,0.4)]" },
      ],
    },
    {
        category: "Banking as a service",
        items: [
          {
            name: "Issuing",
            description: "Card creation",
            color: "from-purple-500 to-pink-500",
            glow: "shadow-[0_4px_20px_rgba(168,85,247,0.4)]"
          },
          {
            name: "Treasury",
            description: "Building blocks for financial services",
            color: "from-teal-400 to-green-500",
            glow: "shadow-[0_4px_20px_rgba(45,212,191,0.4)]"
          },
          {
            name: "Capital",
            description: "Business financing",
            color: "from-green-500 to-emerald-500",
            glow: "shadow-[0_4px_20px_rgba(34,197,94,0.4)]"
          }
        ]
      },
      {
        category: "Prebuilt Components",
        items: [
          {
            name: "Payment Links",
            description: "No-code payments",
            color: "from-cyan-400 to-purple-500",
            glow: "shadow-[0_4px_20px_rgba(34,211,238,0.4)]"
          },
          {
            name: "Checkout",
            description: "Stripe-hosted checkout page",
            color: "from-purple-500 to-indigo-500",
            glow: "shadow-[0_4px_20px_rgba(139,92,246,0.4)]"
          },
          {
            name: "Elements",
            description: "Secure frontend UI components",
            color: "from-teal-400 to-indigo-400",
            glow: "shadow-[0_4px_20px_rgba(45,212,191,0.4)]"
          }
        ]
      }
      
  ];
  
  export default function ProductGrid() {
    return (
      <div className="px-6 py-12 max-w-7xl mx-auto">
        {products.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              {section.category.toUpperCase()}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 bg-white dark:bg-neutral-900 ${item.glow}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color}
                      flex items-center justify-center text-white font-bold text-lg`}
                  >
                    <span>{item.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-md font-medium text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  