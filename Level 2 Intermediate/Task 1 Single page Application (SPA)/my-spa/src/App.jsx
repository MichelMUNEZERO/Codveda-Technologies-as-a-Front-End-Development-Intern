import { useAppContext } from "./context/AppContext";
import Home from "./Components/Home";
import About from "./Components/About";
import Destinations from "./Components/Destinations";
import Contact from "./Components/Contact";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function App() {
  const { currentPage, navigateTo } = useAppContext();

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "destinations":
        return <Destinations />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <button onClick={() => navigateTo("home")} className="logo">
            <img src="/Logo.png" alt="Elite Travel" />
            <span>Elite Travel</span>
          </button>
          <ul className="nav-menu">
            <li>
              <button
                onClick={() => navigateTo("home")}
                className={`nav-link ${currentPage === "home" ? "active" : ""}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("destinations")}
                className={`nav-link ${
                  currentPage === "destinations" ? "active" : ""
                }`}
              >
                Destinations
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("about")}
                className={`nav-link ${currentPage === "about" ? "active" : ""}`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("contact")}
                className={`nav-link ${
                  currentPage === "contact" ? "active" : ""
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
          <button onClick={() => navigateTo("contact")} className="btn-contact">
            Book Now
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">{renderPage()}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img src="/Logo.png" alt="Elite Travel" className="footer-logo" />
              <h3>Elite Travel</h3>
            </div>
            <p className="footer-brand-text">
              We&apos;ve been crafting unforgettable journeys since 2010. What
              started as a passion for exploring hidden corners of the world has
              grown into partnerships with thousands of happy travelers.
            </p>

            <h4 className="footer-subheading footer-follow-heading">
              Follow Our Journey
            </h4>
            <div className="footer-social-icons">
              <a href="#" aria-label="Facebook" className="footer-social-icon">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-icon">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="footer-social-icon">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => navigateTo("home")}>Home</button>
              </li>
              <li>
                <a href="#">Tours</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")}>Contact</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Popular Destinations</h4>
            <ul>
              <li>
                <a href="#">Maldives</a>
              </li>
              <li>
                <a href="#">Tokyo, Japan</a>
              </li>
              <li>
                <a href="#">Paris, France</a>
              </li>
              <li>
                <a href="#">Dubai, UAE</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMail />
                <a href="mailto:michelmunezero@gmail.com">
                  michelmunezero@gmail.com
                </a>
              </li>
              <li>
                <FiPhone />
                <a href="tel:+250780197780">+250 780 197 780</a>
              </li>
              <li>
                <FiMapPin />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Elite Travel Experiences. All rights reserved.</p>
          <div className="footer-policy-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
