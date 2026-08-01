import React, { useState } from "react";
import "../../assets/css/layout/bottom-nav.css";

import {
  FaHome,
  FaInfoCircle,
  FaBox,
  FaBookOpen,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Bottomnav({ onMenuClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-radial-section">
      <div className={`corepipe-radial-menu ${open ? "active" : ""}`}>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <button className="menu-item item1" onClick={() => onMenuClick("home")}>
          <FaHome />
        </button>

        <button
          className="menu-item item2"
          onClick={() => onMenuClick("about")}
        >
          <FaInfoCircle />
        </button>

        <button
          className="menu-item item3"
          onClick={() => onMenuClick("products")}
        >
          <FaBox />
        </button>

        <button
          className="menu-item item4"
          onClick={() => onMenuClick("resource")}
        >
          <FaBookOpen />
        </button>

        <button
          className="menu-item item5"
          onClick={() => onMenuClick("contact")}
        >
          <FaEnvelope />
        </button>
      </div>

      <a
        href="https://wa.me/919600544451"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a href="tel:+919600544451" className="call-btn">
        <FaPhoneAlt />
      </a>
    </div>
  );
}

export default Bottomnav;
