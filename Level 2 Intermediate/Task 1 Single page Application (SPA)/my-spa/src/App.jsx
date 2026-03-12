import { useAppContext } from "./context/AppContext";
import Home from "./Components/Home";
import About from "./Components/About";
import Destinations from "./Components/Destinations";
import Contact from "./Components/Contact";

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
        <div className="footer-content">
          <div className="footer-section">
            <h3>Elite Travel Experiences</h3>
            <p>Crafting unforgettable journeys since 2010</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => navigateTo("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => navigateTo("destinations")}>
                  Destinations
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("about")}>About</button>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")}>Contact</button>
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
  );
}
export default App;
