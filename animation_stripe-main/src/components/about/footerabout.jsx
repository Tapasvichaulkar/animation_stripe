function Footerabout() {
    return (
      <footer className="mt-24 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#">Payments</a></li>
              <li><a href="#">Billing</a></li>
              <li><a href="#">Connect</a></li>
              <li><a href="#">Identity</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#">Docs</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Stay up to date</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="px-4 py-2 rounded-md bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        <div className="border-t border-gray-200 dark:border-neutral-800 py-6 px-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footerabout;
  