import React from "react";
import "../../../assets/css/layout/footer.css";

import logo from "../../../assets/images/logo/rcc-01.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaHome,
  FaBox,
  FaProjectDiagram,
  FaUsers,
  FaPhone,
  FaTools,
  FaWater,
  FaIndustry,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer-section">
      {/* ================= CTA BANNER ================= */}
      <div className="footer-cta">
        <div className="footer-cta-content">
          <span className="footer-cta-label">BUILD WITH CONFIDENCE</span>

          <h2>
            Strong Solutions.
            <span>Reliable Results.</span>
          </h2>

          <p>
            Need reliable piping solutions for your next infrastructure or
            construction project?
          </p>
        </div>

        <button
          className="footer-cta-button"
          onClick={() => scrollToSection("contact")}
        >
          Get In Touch
          <FaArrowRight />
        </button>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-container">
        {/* COMPANY */}
        <div className="footer-column footer-company">
          <img src={logo} alt="Titan Pipe Systems" className="footer-logo" />

          <p className="footer-description">
            Titan Pipe Systems delivers reliable and high-quality piping
            solutions for industrial, commercial, infrastructure, drainage, and
            water management projects.
          </p>

          <div className="footer-social">
            <a
              href="https://facebook.com/titanpipes"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/titanpipes"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/company/titanpipes"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul className="footer-list">
            <li>
              <button onClick={() => scrollToSection("home")}>
                <FaHome />
                Home
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("products")}>
                <FaBox />
                Products
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("resource")}>
                <FaProjectDiagram />
                Projects
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("clients")}>
                <FaUsers />
                Clients
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("contact")}>
                <FaPhone />
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul className="footer-list footer-service-list">
            <li>
              <FaTools />
              Pipeline Installation
            </li>

            <li>
              <FaWater />
              Water Supply Projects
            </li>

            <li>
              <FaIndustry />
              Industrial Piping
            </li>

            <li>
              <FaWater />
              Drainage & Sewage Systems
            </li>

            <li>
              <FaTools />
              Engineering Consulting
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <FaMapMarkerAlt />
            </span>

            <div>
              <strong>Our Location</strong>
              <p>Calicut, Kerala, India</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <FaPhoneAlt />
            </span>

            <div>
              <strong>Call Us</strong>
              <p>+91 96005 44451</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <FaEnvelope />
            </span>

            <div>
              <strong>Email Us</strong>
              <p>info@calicutrccpipes.in</p>
            </div>
          </div>

          <div className="footer-hours">
            <span>Working Hours</span>
            <strong>Mon - Sat : 9:00 AM - 6:00 PM</strong>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} Rcc Pipe Systems Calicut. All Rights
            Reserved.
          </p>

          <p>
            Designed by{" "}
            <a
              href="https://frontlinetechnologies.org/"
              target="_blank"
              rel="noreferrer"
            >
              Frontline Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
