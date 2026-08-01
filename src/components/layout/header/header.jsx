import React, { useEffect, useState } from "react";
import "../../../assets/css/layout/header.css";
import logo from "../../../assets/images/logo/rcc-01.png";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const headerHeight = 82;

      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`site-header ${sticky ? "site-header--sticky" : ""}`}>
      <div className="site-header__container">
        {/* Logo */}
        <button
          className="site-header__logo"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <img src={logo} alt="Titan Pipe Systems" />
        </button>

        {/* Desktop Navigation */}
        <nav className="site-header__nav">
          <button onClick={() => scrollToSection("home")}>Home</button>

          <button onClick={() => scrollToSection("about")}>About</button>

          <button onClick={() => scrollToSection("products")}>Products</button>

          <button onClick={() => scrollToSection("clients")}>Resources</button>

          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        {/* Desktop Contact */}
        <div className="site-header__contact">
          <a href="tel:+919876543210" className="site-header__phone">
            <span className="site-header__phone-icon">
              <FaPhoneAlt />
            </span>

            <span>
              <small>Call Us Today</small>
              <strong>+91 96005 44451</strong>
            </span>
          </a>

          <span className="site-header__location">
            <FaMapMarkerAlt />
            CALICUT
          </span>
        </div>

        {/* Responsive Call Button */}
        <a
          href="tel:+919876543210"
          className="responsive-call"
          aria-label="Call us"
        >
          <FaPhoneAlt />
          <span>Call</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
