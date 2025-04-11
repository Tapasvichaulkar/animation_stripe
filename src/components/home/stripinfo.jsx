'use client';

import { FaCode, FaCubes, FaPlug, FaComments } from 'react-icons/fa';

const StripeInfoCards = () => {
  const cards = [
    {
      icon: <FaCode className="text-sky-400 text-3xl" />,
      title: 'Use Stripe with your stack',
      desc: 'We offer client and server libraries in everything from React and PHP to .NET and iOS.',
      link: 'See libraries',
    },
    {
      icon: <FaComments className="text-sky-400 text-3xl" />,
      title: 'Try no-code options',
      desc: 'Customize and deploy payments interfaces directly from the Stripe Dashboard.',
      link: 'Explore no-code',
    },
    {
      icon: <FaPlug className="text-sky-400 text-3xl" />,
      title: 'Explore pre-built integrations',
      desc: 'Connect Stripe to over a hundred tools including Adobe, Salesforce, and Xero.',
      link: 'Browse App Marketplace',
    },
    {
      icon: <FaCubes className="text-sky-400 text-3xl" />,
      title: 'Build on Stripe Apps',
      desc: 'Create an app just for your team or for the millions of businesses on Stripe.',
      link: 'Learn about Apps',
    },
  ];

  return (
    <div className="bg-[#0a2540] py-12 px-6 md:px-16 text-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-20">
        {cards.map((card, idx) => (
          <div key={idx} className="space-y-4 border-l border-sky-600 pl-6">
            <div>{card.icon}</div>
            <h3 className="font-semibold text-lg">{card.title}</h3>
            <p className="text-sm text-slate-300">{card.desc}</p>
            <a href="#" className="text-sky-400 font-medium hover:underline">
              {card.link} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StripeInfoCards;
