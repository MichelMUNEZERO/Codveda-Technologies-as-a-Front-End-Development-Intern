import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Destinations from "./Components/Destinations";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              <img src="/Logo.png" alt="Elite Travel" />
              <span>Elite Travel</span>
            </Link>
            <ul className="nav-menu">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="nav-link">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <Link to="/contact" className="btn-contact">
              Book Now
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Elite Travel Experiences</h3>
              <p>Crafting unforgettable journeys since 2010</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/destinations">Destinations</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow Our Journey</h4>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Elite Travel Experiences. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
