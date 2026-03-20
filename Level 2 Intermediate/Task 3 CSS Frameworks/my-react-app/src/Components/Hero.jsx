import React from "react";

export default function Header() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center pt-28"
      style={{
        backgroundImage: "url('/Photo/pexels-pixabay-415980.jpg')",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/20"
        aria-hidden="true"
      />

      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-[1820px] -translate-x-1/2 rounded-2xl border border-cyan-900/40 bg-[#0b1621]/80 shadow-[0_20px_45px_rgba(2,14,23,0.55)] backdrop-blur-sm">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold">
            <img
              src="/Photo/Logo.png"
              alt="Logo"
              className="h-10 w-10 inline-block mr-2 rounded-full"
            />
          </a>

          <ul className="flex space-x-20 text-gray-100">
            <li className="font-medium transition-colors hover:text-cyan-300">
              <a href="/">Home</a>
            </li>
            <li className="font-medium transition-colors hover:text-cyan-300">
              <a href="/tour">Tour</a>
            </li>
            <li className="font-medium transition-colors hover:text-cyan-300">
              <a href="/service">Service</a>
            </li>
            <li className="font-medium transition-colors hover:text-cyan-300">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Message
          </button>
        </nav>
      </header>
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-24">
        <div className="max-w-5xl space-y-8 text-left text-white">
          <h2 className=" text font-bold uppercase leading-[1.05] tracking-wide md:text-5xl">
            EXPLORE LUXURY TRAVEL LIKE NEVER BEFORE
          </h2>
          <p className="text-2xl text-gray-100 md:text-3xl">
            Where will your story take you? We turn travel dreams into memories
            that last a lifetime
          </p>
          <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-lg font-bold text-white transition hover:bg-white hover:text-[#0b1621] md:text-2xl">
            Explore offerings
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
      <section className="relative z-10">
        <div className="relative mx-auto mt-20 max-w-[1820px] rounded-2xl border border-cyan-900/40 bg-[#0b1621]/80 p-4 shadow-[0_20px_45px_rgba(2,14,23,0.55)] md:p-6">
          <form className="grid gap-4 rounded-xl bg-[#02070d]/95 p-4 md:grid-cols-[1fr_1fr_1fr_1fr_150px] md:items-end md:p-5">
            <div className="space-y-2">
              <label
                htmlFor="destination"
                className="block text-2xl font-semibold text-gray-100"
              >
                Destination
              </label>
              <select
                name="destination"
                id="destination"
                defaultValue="tokyo"
                className="h-12 w-full rounded-lg border border-gray-600 bg-[#23272d] px-4 text-lg font-medium text-gray-100 outline-none transition focus:border-cyan-500"
              >
                <option value="tokyo">Tokyo, Japan</option>
                <option value="paris">Paris, France</option>
                <option value="new-york">New York, USA</option>
                <option value="dubai">Dubai, UAE</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="travel-style"
                className="block text-2xl font-semibold text-gray-100"
              >
                Travel style
              </label>
              <select
                name="travel-style"
                id="travel-style"
                defaultValue="urban"
                className="h-12 w-full rounded-lg border border-gray-600 bg-[#23272d] px-4 text-lg font-medium text-gray-100 outline-none transition focus:border-cyan-500"
              >
                <option value="urban">Urban Explorer</option>
                <option value="luxury">Luxury Escape</option>
                <option value="adventure">Adventure</option>
                <option value="wellness">Wellness Retreat</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="dates"
                className="block text-2xl font-semibold text-gray-100"
              >
                Dates
              </label>
              <select
                name="dates"
                id="dates"
                defaultValue="10-26-september"
                className="h-12 w-full rounded-lg border border-gray-600 bg-[#23272d] px-4 text-lg font-medium text-gray-100 outline-none transition focus:border-cyan-500"
              >
                <option value="10-26-september">10-26 September</option>
                <option value="1-8-october">1-8 October</option>
                <option value="9-16-october">9-16 October</option>
                <option value="17-24-october">17-24 October</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="travelers"
                className="block text-2xl font-semibold text-gray-100"
              >
                Travelers
              </label>
              <select
                name="travelers"
                id="travelers"
                defaultValue="2-adults"
                className="h-12 w-full rounded-lg border border-gray-600 bg-[#23272d] px-4 text-lg font-medium text-gray-100 outline-none transition focus:border-cyan-500"
              >
                <option value="2-adults">2 adults</option>
                <option value="1-adult">1 adult</option>
                <option value="2-adults-1-child">2 adults, 1 child</option>
                <option value="2-adults-2-children">
                  2 adults, 2 children
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="h-12 rounded-lg bg-gray-100 px-6 text-xl font-semibold text-[#0e2f4a] transition hover:bg-white"
            >
              Search
            </button>
          </form>
        </div>

        <button
          type="button"
          className="absolute bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#13a9b1] text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
          aria-label="Layers"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2 3 7l9 5 9-5-9-5Z" />
            <path d="m3 12 9 5 9-5" />
            <path d="m3 17 9 5 9-5" />
          </svg>
        </button>
      </section>
    </main>
  );
}
