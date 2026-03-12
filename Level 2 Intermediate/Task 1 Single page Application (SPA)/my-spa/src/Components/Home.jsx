import { MdFlight, MdStar, MdSupportAgent } from "react-icons/md";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            EXPLORE LUXURY TRAVEL LIKE NEVER BEFORE
          </h1>
          <p className="hero-subtitle">
            Where will your story take you? We turn travel dreams into memories
            that last a lifetime
          </p>
          <button className="btn-explore">Start Your Journey</button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-subtitle">
            Discover the world's most captivating places
          </p>

          <div className="featured-grid">
            <div className="featured-card">
              <img src="/pexels-pixabay-415708.jpg" alt="Paris" />
              <div className="card-content">
                <h3>Paris</h3>
                <p>The City of Light awaits</p>
              </div>
            </div>
            <div className="featured-card">
              <img src="/pexels-pixabay-415980.jpg" alt="Tokyo" />
              <div className="card-content">
                <h3>Tokyo</h3>
                <p>Modern meets tradition</p>
              </div>
            </div>
            <div className="featured-card">
              <img src="/pexels-pixabay-236296.jpg" alt="Santorini" />
              <div className="card-content">
                <h3>Santorini</h3>
                <p>Greek island paradise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">Why Travel With Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <MdFlight />
              </div>
              <h3>Expert Planning</h3>
              <p>Every detail carefully curated for your perfect journey</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <MdStar />
              </div>
              <h3>Luxury Experiences</h3>
              <p>Premium accommodations and exclusive access</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <MdSupportAgent />
              </div>
              <h3>24/7 Support</h3>
              <p>We're here for you every step of the way</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
