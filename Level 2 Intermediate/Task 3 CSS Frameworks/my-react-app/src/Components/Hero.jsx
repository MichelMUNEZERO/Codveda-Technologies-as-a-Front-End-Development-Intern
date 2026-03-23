import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const destinationCards = [
    {
      title: "Explore Our Destinations",
      subtitle: "Popular Destinations",
      description: "Discover the world with our curated travel experiences.",
      details: "Check out some of our most requested travel locations.",
      image: "/Photo/pexels-pixabay-236296.jpg",
      days: "7 days",
      nights: "5 nights",
      price: "From $1,299",
    },
    {
      title: "Island Escape",
      subtitle: "Tropical Favorites",
      description: "Relax on pristine beaches with premium resort stays.",
      details: "Perfect for honeymooners and luxury-seeking travelers.",
      image: "/Photo/pexels-navneet-shanu-202773-672630.jpg",
      days: "6 days",
      nights: "4 nights",
      price: "From $1,099",
    },
    {
      title: "Mountain Adventure",
      subtitle: "Nature Retreats",
      description: "Experience breathtaking trails and alpine landscapes.",
      details: "Ideal for adventure lovers and outdoor explorers.",
      image: "/Photo/pexels-rbrigant44-771881.jpg",
      days: "8 days",
      nights: "6 nights",
      price: "From $1,449",
    },
    {
      title: "City Break",
      subtitle: "Urban Highlights",
      description: "Dive into world-class dining, shopping, and culture.",
      details: "Great for quick getaways with unforgettable city vibes.",
      image: "/Photo/pexels-pixabay-415708.jpg",
      days: "5 days",
      nights: "4 nights",
      price: "From $899",
    },
    {
      title: "Desert Journey",
      subtitle: "Golden Dunes",
      description: "Explore stunning desert landscapes and luxury camps.",
      details: "Best for sunset safaris and cultural desert experiences.",
      image: "/Photo/pexels-pixabay-236296.jpg",
      days: "6 days",
      nights: "5 nights",
      price: "From $1,199",
    },
    {
      title: "European Classics",
      subtitle: "Historic Escapes",
      description: "Visit iconic landmarks and charming old-world cities.",
      details: "A perfect blend of history, art, and local cuisine.",
      image: "/Photo/pexels-navneet-shanu-202773-672630.jpg",
      days: "9 days",
      nights: "7 nights",
      price: "From $1,799",
    },
  ];
  const serviceCards = [
    {
      title: "Flight Booking",
      description:
        "Get the best routes and fares with our partner airlines worldwide.",
      image: "/Photo/Services%27s%20photo/Flight%20booking.jpg",
    },
    {
      title: "Hotel & Resort",
      description:
        "Stay in handpicked hotels and premium resorts for every budget.",
      image: "/Photo/Services's photo/Hotel & Resort.jpg",
    },
    {
      title: "Guided Tours",
      description:
        "Enjoy local experiences with expert guides and curated city tours.",
      image: "/Photo/Services%27s%20photo/Guided%20Tours.jpg",
    },
    {
      title: "Travel Support",
      description:
        "24/7 support for itinerary changes, visa help, and travel assistance.",
      image: "/Photo/Services%27s%20photo/Travel%20Support.jpg",
    },
  ];

  return (
    <div>
      <main
        className="relative min-h-screen bg-cover bg-center pt-44 sm:pt-40 md:pt-28"
        style={{
          backgroundImage: "url('/Photo/pexels-pixabay-415980.jpg')",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/20"
          aria-hidden="true"
        />

        <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] max-w-[1820px] -translate-x-1/2 rounded-2xl border border-cyan-900/40 bg-[#0b1621]/80 shadow-[0_20px_45px_rgba(2,14,23,0.55)] backdrop-blur-sm sm:top-4 sm:w-[calc(100%-2rem)]">
          <nav className="container relative mx-auto px-3 py-3 sm:px-4 md:py-4">
            {/* Mobile Navbar (< md) */}
            <div className="flex items-center justify-between gap-3 md:hidden">
              <a href="/" className="text-2xl font-bold">
                <img
                  src="/Photo/Logo.png"
                  alt="Logo"
                  className="h-10 w-10 inline-block mr-2 rounded-full"
                />
              </a>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-700/50 text-white transition hover:bg-cyan-900/30"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div
                id="mobile-nav"
                className="mt-3 rounded-xl border border-cyan-900/60 bg-[#08111b]/95 p-4 md:hidden"
              >
                <ul className="flex flex-col gap-3 text-base text-gray-100">
                  <li className="font-medium transition-colors hover:text-cyan-300">
                    <a href="/" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </a>
                  </li>
                  <li className="font-medium transition-colors hover:text-cyan-300">
                    <a href="#tour" onClick={() => setIsMenuOpen(false)}>
                      Tour
                    </a>
                  </li>
                  <li className="font-medium transition-colors hover:text-cyan-300">
                    <a href="#service" onClick={() => setIsMenuOpen(false)}>
                      Service
                    </a>
                  </li>
                  <li className="font-medium transition-colors hover:text-cyan-300">
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </a>
                  </li>
                </ul>

                <button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700">
                  Message
                </button>
              </div>
            )}

            {/* Desktop Navbar (>= md) */}
            <div className="hidden items-center justify-between gap-0 md:flex">
              <a href="/" className="text-2xl font-bold">
                <img
                  src="/Photo/Logo.png"
                  alt="Logo"
                  className="h-10 w-10 inline-block mr-2 rounded-full"
                />
              </a>

              <ul className="flex items-center justify-center gap-14 text-base text-gray-100">
                <li className="font-medium transition-colors hover:text-cyan-300">
                  <a href="/">Home</a>
                </li>
                <li className="font-medium transition-colors hover:text-cyan-300">
                  <a href="#tour">Tour</a>
                </li>
                <li className="font-medium transition-colors hover:text-cyan-300">
                  <a href="#service">Service</a>
                </li>
                <li className="font-medium transition-colors hover:text-cyan-300">
                  <a href="#contact">Contact</a>
                </li>
              </ul>

              <button className="rounded bg-blue-500 px-4 py-2 text-base font-bold text-white transition hover:bg-blue-700">
                Message
              </button>
            </div>
          </nav>
        </header>
        <div className="relative z-10 container mx-auto px-4 pt-12 pb-20 sm:px-6 sm:pt-16 md:pt-20 md:pb-24">
          <div className="max-w-5xl space-y-6 text-left text-white sm:space-y-8">
            <h2 className="text-4xl font-bold uppercase leading-[1.05] tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
              EXPLORE LUXURY TRAVEL LIKE NEVER BEFORE
            </h2>
            <p className="max-w-4xl text-lg text-gray-100 sm:text-2xl md:text-3xl">
              Where will your story take you? We turn travel dreams into
              memories that last a lifetime
            </p>
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-2.5 text-base font-bold text-white transition hover:bg-white hover:text-[#0b1621] sm:px-8 sm:py-3 sm:text-lg md:text-2xl">
              Explore offerings
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
        <section className="relative z-10">
          <div className="relative mx-auto mt-10 max-w-[1820px] rounded-2xl border border-cyan-900/40 bg-[#0b1621]/80 p-3 shadow-[0_20px_45px_rgba(2,14,23,0.55)] sm:p-4 md:mt-20 md:p-6">
            <form className="grid gap-4 rounded-xl bg-[#02070d]/95 p-4 md:grid-cols-[1fr_1fr_1fr_1fr_150px] md:items-end md:p-5">
              <div className="space-y-2">
                <label
                  htmlFor="destination"
                  className="block text-lg font-semibold text-gray-100 sm:text-xl md:text-2xl"
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
                  className="block text-lg font-semibold text-gray-100 sm:text-xl md:text-2xl"
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
                  className="block text-lg font-semibold text-gray-100 sm:text-xl md:text-2xl"
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
                  className="block text-lg font-semibold text-gray-100 sm:text-xl md:text-2xl"
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
                className="h-12 w-full rounded-lg bg-gray-100 px-6 text-lg font-semibold text-[#0e2f4a] transition hover:bg-white md:w-auto md:text-xl"
              >
                Search
              </button>
            </form>
          </div>

          <button
            type="button"
            className="absolute bottom-6 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#13a9b1] text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
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
      <section
        id="tour"
        className="scroll-mt-28 bg-[#06111b] px-4 py-14 sm:px-6 md:py-16"
      >
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-cyan-800/40 bg-[#0b1621]/70 p-6 text-center shadow-[0_14px_35px_rgba(2,14,23,0.4)] backdrop-blur-sm sm:mb-10 sm:p-8">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Destinations
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Explore our amazing destinations and create unforgettable memories.
          </p>
        </div>
        <div className="mx-auto max-w-[1820px]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {destinationCards.map((card) => (
              <article
                key={card.subtitle}
                className="flex h-full flex-col justify-between space-y-6 rounded-2xl border border-cyan-900/40 bg-[#0b1621]/80 bg-cover bg-center p-6 shadow-[0_20px_45px_rgba(2,14,23,0.55)] transition duration-300 hover:-translate-y-1 hover:border-cyan-500/70 hover:shadow-[0_28px_55px_rgba(2,14,23,0.65)] sm:p-7"
                style={{
                  backgroundImage: `linear-gradient(rgba(2, 14, 23, 0.78), rgba(2, 14, 23, 0.78)), url(${card.image})`,
                }}
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">
                    {card.title}
                  </h2>
                  <p className="text-gray-300">{card.description}</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    {card.subtitle}
                  </h3>
                  <p className="text-gray-300">{card.details}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white sm:text-base">
                  <span className="rounded-full border border-cyan-700/60 px-3 py-1.5">
                    {card.days}
                  </span>
                  <span className="rounded-full border border-cyan-700/60 px-3 py-1.5">
                    {card.nights}
                  </span>
                  <span className="rounded-full border border-cyan-700/60 px-3 py-1.5">
                    {card.price}
                  </span>
                </div>

                <button className="h-12 w-full rounded-lg bg-gray-100 px-6 text-lg font-semibold text-[#0e2f4a] shadow-[0_10px_24px_rgba(2,14,23,0.35)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white hover:shadow-[0_16px_30px_rgba(2,14,23,0.5)] active:translate-y-0 active:scale-100">
                  Book Now
                </button>
              </article>
            ))}
          </div>
          <button className="mx-auto mt-8 flex w-fit items-center justify-center rounded-xl bg-gradient-to-r from-[#13a9b1] to-[#0f8a8f] px-7 py-3 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(8,106,112,0.35)] transition duration-300 hover:-translate-y-0.5 hover:from-[#16bcd3] hover:to-[#10a0a6] hover:shadow-[0_16px_28px_rgba(8,106,112,0.45)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#06111b]">
            View More ...
          </button>
        </div>
      </section>

      <section
        id="service"
        className="scroll-mt-28 bg-[#04101a] px-4 py-14 sm:px-6 md:py-16"
      >
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-cyan-800/40 bg-[#0b1621]/70 p-6 text-center shadow-[0_14px_35px_rgba(2,14,23,0.4)] backdrop-blur-sm sm:mb-10 sm:p-8">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Everything you need for a smooth trip, from planning to arrival.
          </p>
        </div>

        <div className="mx-auto max-w-[1820px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-cyan-900/40 bg-[#0b1621]/80 bg-cover bg-center p-6 shadow-[0_20px_45px_rgba(2,14,23,0.55)] transition duration-300 hover:-translate-y-1 hover:border-cyan-500/70 hover:shadow-[0_28px_55px_rgba(2,14,23,0.65)]"
                style={{
                  backgroundImage: `linear-gradient(rgba(2, 14, 23, 0.76), rgba(2, 14, 23, 0.76)), url("${service.image}")`,
                }}
              >
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-300">{service.description}</p>
                <button className="mt-6 h-11 rounded-lg bg-gray-100 px-5 text-base font-semibold text-[#0e2f4a] shadow-[0_10px_24px_rgba(2,14,23,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_30px_rgba(2,14,23,0.5)]">
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 bg-[#06111b] px-4 py-14 sm:px-6 md:py-16"
      >
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-cyan-800/40 bg-[#0b1621]/70 p-6 text-center shadow-[0_14px_35px_rgba(2,14,23,0.4)] backdrop-blur-sm sm:mb-10 sm:p-8">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Contact
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Plan your next getaway with us. Send a message and our team will get
            back to you quickly.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1820px] gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-cyan-900/40 bg-[#0b1621]/80 p-6 shadow-[0_20px_45px_rgba(2,14,23,0.55)] sm:p-8">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Let&apos;s Plan Your Journey
            </h3>
            <p className="mt-3 text-gray-300">
              Tell us your destination ideas, dates, and travel style.
            </p>

            <form className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="h-12 rounded-lg border border-gray-600 bg-[#23272d] px-4 text-base text-gray-100 outline-none transition focus:border-cyan-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="h-12 rounded-lg border border-gray-600 bg-[#23272d] px-4 text-base text-gray-100 outline-none transition focus:border-cyan-500"
              />
              <input
                type="text"
                placeholder="Destination of Interest"
                required
                className="h-12 rounded-lg border border-gray-600 bg-[#23272d] px-4 text-base text-gray-100 outline-none transition focus:border-cyan-500"
              />
              <textarea
                rows="4"
                placeholder="Your message"
                required
                className="rounded-lg border border-gray-600 bg-[#23272d] px-4 py-3 text-base text-gray-100 outline-none transition focus:border-cyan-500"
              />

              <button
                type="submit"
                className="h-12 rounded-lg bg-gray-100 px-6 text-lg font-semibold text-[#0e2f4a] shadow-[0_10px_24px_rgba(2,14,23,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_30px_rgba(2,14,23,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-cyan-900/40 bg-[#0b1621]/80 p-6 shadow-[0_20px_45px_rgba(2,14,23,0.55)] sm:p-8">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Contact Details
            </h3>

            <div className="mt-6 space-y-4 text-gray-200">
              <p className="rounded-xl border border-cyan-800/30 bg-[#08111b]/80 p-4">
                Email: support@luxetravel.com
              </p>
              <p className="rounded-xl border border-cyan-800/30 bg-[#08111b]/80 p-4">
                Phone: +1 (800) 555-2048
              </p>
              <p className="rounded-xl border border-cyan-800/30 bg-[#08111b]/80 p-4">
                Address: 125 Ocean Avenue, Miami, FL 33101
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
