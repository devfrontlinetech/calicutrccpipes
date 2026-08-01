import React, { useEffect, useState } from "react";
import "../../assets/css/home/hero.css";

import video1 from "../../assets/videos/hero-01.mp4";

import {
  MdArrowForward,
  MdConstruction,
  MdVerified,
  MdEngineering,
} from "react-icons/md";

import { 
  // FaCheckCircle,
   FaIndustry, 
   FaTruck } from "react-icons/fa";

const slides = [
  {
    eyebrow: "ENGINEERED FOR INFRASTRUCTURE",
    title: "Concrete Strength",
    highlight: "That Moves Projects Forward.",
    description:
      "High-quality RCC concrete pipes manufactured for dependable drainage, infrastructure, and industrial applications.",
  },
  {
    eyebrow: "BUILT FOR LONG-TERM PERFORMANCE",
    title: "Reliable Solutions",
    highlight: "For Every Project.",
    description:
      "From residential development to large-scale infrastructure, our concrete pipe solutions are built to perform.",
  },
  {
    eyebrow: "YOUR TRUSTED PIPE SUPPLIER",
    title: "Strength You Can",
    highlight: "Build On.",
    description:
      "Manufactured with quality materials, tested processes, and dependable supply for projects across every scale.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const headerOffset = 80;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  const activeSlide = slides[current];

  return (
    <section className="hero" id="home">
      {/* Background Video */}
      <video
        className="hero__video"
        src={video1}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Dark Overlay */}
      <div className="hero__overlay"></div>

      {/* Decorative Background */}
      <div className="hero__pattern"></div>

      {/* Main Hero Container */}
      <div className="hero__container">
        {/* LEFT CONTENT */}
        <div className="hero__content">
          {/* Eyebrow */}
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line"></span>

            <span>{activeSlide.eyebrow}</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero__title" key={`title-${current}`}>
            {activeSlide.title}

            <span>{activeSlide.highlight}</span>
          </h1>

          {/* Description */}
          <p className="hero__description" key={`description-${current}`}>
            {activeSlide.description}
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button
              className="hero__button hero__button--primary"
              onClick={() => scrollToSection("products")}
            >
              <MdConstruction />

              <span>View Our Products</span>

              <MdArrowForward />
            </button>

            <button
              className="hero__button hero__button--secondary"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch.
            </button>
          </div>

          {/* Trust Features */}
          <div className="hero__trust">
            <div className="hero__trust-item">
              <MdVerified />

              <span>
                Quality
                <strong>Assured</strong>
              </span>
            </div>

            <div className="hero__trust-item">
              <MdEngineering />

              <span>
                Built
                <strong>Strong</strong>
              </span>
            </div>

            <div className="hero__trust-item">
              <FaTruck />

              <span>
                Reliable
                <strong>Supply</strong>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="hero__visual">
          <div className="hero__visual-card">
            <div className="hero__visual-icon">
              <FaIndustry />
            </div>

            <span className="hero__visual-label">INDUSTRIAL SOLUTIONS</span>

            <h2>
              Built for
              <span>Real-World Projects.</span>
            </h2>

            <p>
              RCC concrete pipes manufactured for strength, durability, and
              dependable performance.
            </p>

            <div className="hero__visual-footer">
              <span>Explore Solutions</span>

              <MdArrowForward />
            </div>
          </div>

          {/* Floating Badge */}
          <div className="hero__badge">
            <MdVerified />

            <span>
              <strong>20+</strong>
              Years Experience
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      {/* <div className="hero__bottom"> */}
      {/* <div className="hero__stats">
          <div className="hero__stat">
            <strong>20+</strong>
            <span>Years of Experience</span>
          </div>

          <div className="hero__stat">
            <strong>1000+</strong>
            <span>Projects Supplied</span>
          </div>

          <div className="hero__stat">
            <strong>100%</strong>
            <span>Quality Commitment</span>
          </div>
        </div> */}

      {/* Slider Controls */}
      {/* <div className="hero__slider">
          <span>0{current + 1}</span>

          <div className="hero__slider-lines">
            {slides.map((_, index) => (
              <button
                key={index}
                className={
                  index === current
                    ? "hero__slider-line hero__slider-line--active"
                    : "hero__slider-line"
                }
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <span>0{slides.length}</span>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
