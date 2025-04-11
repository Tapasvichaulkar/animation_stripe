import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Stripe Logo + Info */}
        <div className="w-full sm:w-1/5">
          <div className="font-bold text-xl mb-4">stripe</div>
          <p className="text-sm">🌍 India (English)</p>
        </div>

        {/* Products & Pricing */}
        <div className="w-full sm:w-1/5">
          <h3 className="font-semibold mb-2">Products & pricing</h3>
          <ul>
            <li>Products & pricing</li>
            <li>Pricing</li>
            <li>Atlas</li>
            <li>Billing</li>
            <li>Capital</li>
            <li>Checkout</li>
            <li>Climate</li>
            <li>Connect</li>
            <li>Data Pipeline</li>
            <li>Elements</li>
            <li>Financial Connections</li>
            <li>Identity</li>
            <li>Invoicing</li>
            <li>Issuing</li>
            <li>Link</li>
            <li>Payments</li>
            <li>Payment Links</li>
            <li>Payouts</li>
            <li>Radar</li>
            <li>Revenue Recognition</li>
            <li>Sigma</li>
            <li>Tax</li>
            <li>Terminal</li>
            <li>Treasury</li>
          </ul>

        </div>

        {/* Solutions */}
        <div className="w-full sm:w-1/5">
          <h3 className="font-semibold mb-2">Solutions</h3>
          <ul>
            <li>Solutions</li>
            <li>Startups</li>
            <li>Enterprises</li>
            <li>SaaS</li>
            <li>Retail</li>
            <li>Platforms</li>
            <li>E-Commerce</li>
            <li>Marketplaces</li>
            <li>Crypto</li>
            <li>Creator economy</li>
            <li>Embedded finance</li>
            <li>Global businesses</li>
            <li>Finance automation</li>
            <li>Integrations & custom solutions</li>
            <li>Stripe App Marketplace</li>
            <li>Partner ecosystem</li>
            <li>Professional services</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>API reference</li>
            <li>API status</li>
            <li>API changelog</li>
            <li>Stripe Apps</li>
          </ul>

        </div>

        {/* Resources */}
        <div className="w-full sm:w-1/5">
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul>
            <li>Resources</li>
            <li>Guides</li>
            <li>Customer stories</li>
            <li>Blog</li>
            <li>Annual conference</li>
            <li>Privacy & terms</li>
            <li>Prohibited & restricted businesses</li>
            <li>Licences</li>
            <li>Sitemap</li>
            <li>Cookie settings</li>
            <li>Company</li>
            <li>Jobs</li>
            <li>Newsroom</li>
            <li>Stripe Press</li>
            <li>Contact sales</li>
            <li>Support</li>
            <li>Get support</li>
            <li>Managed support plans</li>
          </ul>

        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        © 2025 Stripe Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
