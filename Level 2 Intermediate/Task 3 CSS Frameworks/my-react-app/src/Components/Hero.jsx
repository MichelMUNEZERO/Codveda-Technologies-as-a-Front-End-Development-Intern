import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
        <header className="flex flex-wrap items-center justify-between gap-6 mb-16">
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium uppercase tracking-widest text-stone-500">
            <a href="#" className="hover:text-stone-900 transition">
              Home
            </a>
            <a href="#" className="hover:text-stone-900 transition">
              Tours
            </a>
            <a href="#" className="hover:text-stone-900 transition">
              Service
            </a>
            <a href="#" className="hover:text-stone-900 transition">
              Blog
            </a>
            <a href="#" className="hover:text-stone-900 transition">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-widest text-stone-400">
              Message
            </span>
            <svg
              className="w-4 h-4 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </header>

        <div className="max-w-3xl mt-8 md:mt-12">
          <h1 className="text-5xl md:text-7xl lg:text-7xl leading-tight md:leading-[1.1] font-serif font-light text-stone-900">
            EXPLORE LUXURY
            <br />
            TRAVEL LIKE NEVER
            <br />
            <span className="italic font-serif font-light tracking-wide">
              BEFORE
            </span>
          </h1>
        </div>

        <div className="mt-8 md:mt-10 mb-16 md:mb-20">
          <span className="text-sm uppercase tracking-[0.25em] text-stone-400 border-b border-stone-200 pb-1">
            Explore offerings
          </span>
        </div>

        <div className="w-full bg-white search-card-shadow rounded-3xl px-7 py-8 md:py-10 md:px-10 mb-20 hover-lift transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-400 font-medium">
                Destination
              </label>
              <div className="text-lg font-medium text-stone-800 border-b border-stone-200 pb-2 flex items-center justify-between">
                Tokyo, Japan
                <svg
                  className="w-4 h-4 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-400 font-medium">
                Travel style
              </label>
              <div className="text-lg font-medium text-stone-800 border-b border-stone-200 pb-2 flex items-center justify-between">
                Urban Explorer
                <svg
                  className="w-4 h-4 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-400 font-medium">
                Dates
              </label>
              <div className="text-lg font-medium text-stone-800 border-b border-stone-200 pb-2 flex items-center justify-between">
                10-26 September
                <svg
                  className="w-4 h-4 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-400 font-medium">
                Travelers
              </label>
              <div className="text-lg font-medium text-stone-800 border-b border-stone-200 pb-2 flex items-center justify-between">
                2 adults
                <svg
                  className="w-4 h-4 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div>
              <button className="w-full bg-stone-900 hover:bg-stone-800 text-white text-base tracking-widest uppercase font-medium py-4 px-6 rounded-2xl transition duration-200 shadow-md hover:shadow-xl">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-stone-300 text-xs tracking-widest mt-16 border-t border-stone-100 pt-6">
          <span>LUXURY TRAVEL · BEYOND EXPECTATION</span>
        </div>
      </div>
    </div>
  );
}
