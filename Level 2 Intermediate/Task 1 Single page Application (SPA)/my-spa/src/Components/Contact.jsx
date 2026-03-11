import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>Ready to start your next adventure? We'd love to hear from you!</p>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <strong>📧 Email:</strong>
              <p>info@elitetravel.com</p>
            </div>
            <div className="info-item">
              <strong>📞 Phone:</strong>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <strong>📍 Address:</strong>
              <p>123 Travel Lane, Wanderlust City, TC 12345</p>
            </div>
            <div className="info-item">
              <strong>🕐 Hours:</strong>
              <p>
                Mon-Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 10:00 AM - 4:00 PM
              </p>
            </div>

            <div className="social-links">
              <h3>Follow Our Journey</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  Facebook
                </a>
                <a href="#" className="social-icon">
                  Instagram
                </a>
                <a href="#" className="social-icon">
                  Twitter
                </a>
                <a href="#" className="social-icon">
                  Pinterest
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="newsletter-section">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get travel tips & exclusive deals delivered to your inbox</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
          >
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
