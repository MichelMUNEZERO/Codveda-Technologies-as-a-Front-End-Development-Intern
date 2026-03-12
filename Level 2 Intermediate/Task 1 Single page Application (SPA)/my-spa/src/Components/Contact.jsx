import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Thank you for reaching out! We'll get back to you within 24 hours.",
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFormErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-intro">
          <h2>Let's Plan Your Dream Journey</h2>
          <p>
            Whether you have a question about our destinations, pricing, or
            anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <h2>Contact Information</h2>
              <p className="contact-info-subtitle">
                We're here to help make your travel dreams come true
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <MdEmail />
                  </div>
                  <div className="info-details">
                    <strong>Email</strong>
                    <p>info@elitetravel.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MdPhone />
                  </div>
                  <div className="info-details">
                    <strong>Phone</strong>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MdLocationOn />
                  </div>
                  <div className="info-details">
                    <strong>Address</strong>
                    <p>123 Travel Lane, Wanderlust City, TC 12345</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MdAccessTime />
                  </div>
                  <div className="info-details">
                    <strong>Business Hours</strong>
                    <p>
                      Mon-Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat: 10:00 AM - 4:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Our Journey</h3>
                <p>Join our community of adventurers</p>
                <div className="social-icons">
                  <a href="#" className="social-icon" title="Facebook">
                    <FaFacebook /> Facebook
                  </a>
                  <a href="#" className="social-icon" title="Instagram">
                    <FaInstagram /> Instagram
                  </a>
                  <a href="#" className="social-icon" title="Twitter">
                    <FaTwitter /> Twitter
                  </a>
                  <a href="#" className="social-icon" title="Pinterest">
                    <FaPinterest /> Pinterest
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll respond within 24 hours
              </p>

              <div className="form-group">
                <label htmlFor="name">
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={formErrors.name ? "error" : ""}
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={formErrors.email ? "error" : ""}
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={formErrors.phone ? "error" : ""}
                />
                {formErrors.phone && (
                  <span className="error-message">{formErrors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dream destination..."
                  className={formErrors.message ? "error" : ""}
                ></textarea>
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <IoSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <HiMail />
            </div>
            <h2>Subscribe to Our Newsletter</h2>
            <p>
              Get exclusive travel tips, destination guides, and special deals
              delivered to your inbox
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thanks for subscribing! Check your inbox for confirmation.",
                );
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
