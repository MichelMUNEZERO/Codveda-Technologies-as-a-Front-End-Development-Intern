const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Elite Travel Experiences</h1>
          <p className="tagline">Crafting Unforgettable Journeys Since 2010</p>
        </div>
      </div>

      <div className="container">
        <section className="about-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              What started as a passion for exploring hidden corners of the
              world has grown into partnerships with thousands of happy
              travelers. Since 2010, we've been dedicated to turning ordinary
              trips into extraordinary experiences.
            </p>
            <p>
              We believe travel isn't just about destinations—it's about the
              moments that take your breath away, the connections you make, and
              the memories that stay with you forever.
            </p>
          </div>
          <div className="story-image">
            <img
              src="/pexels-navneet-shanu-202773-672630.jpg"
              alt="Travel journey"
            />
          </div>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            To inspire and enable travelers to explore the world with
            confidence, comfort, and joy. We're committed to sustainable tourism
            that respects local cultures and preserves the beauty of our planet
            for future generations.
          </p>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Destinations</p>
          </div>
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
