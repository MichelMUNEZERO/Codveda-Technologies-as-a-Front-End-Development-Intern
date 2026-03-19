import React from "react";

export default function Header() {
  return (
    <div>
      <header
        className="bg-gray-800 text-white"
        style={{ position: "relative", zIndex: 10 }}
      >
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold">
            <img
              src="/Photo/Logo.png"
              alt="Logo"
              className="w3-circle h-10 w-10 inline-block mr-2"
            />
          </a>

          <ul className="flex space-x-20">
            <li className="hover:text-gray-400">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="/tour">Tour</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="/service">Service</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Message
          </button>
        </nav>
      </header>
      <main>
        <section
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/Photo/pexels-pixabay-415980.jpg')" }}
        >
          <div className=""></div>
          <div className="container mx-auto py-20 text-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                EXPLORE LUXURY TRAVEL LIKE NEVER BEFORE
              </h2>
              <p className="text-lg text-gray-700">
                Where will your story take you? We turn travel dreams into
                memories that last a lifetime
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Message
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
