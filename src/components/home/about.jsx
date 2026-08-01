import React from "react";
import { motion } from "framer-motion";
import "../../assets/css/home/about.css";
import companyImg from "../../assets/images/about/about-01.jpg";
import {
  FaCheckCircle,
  FaIndustry,
  FaCogs,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaIndustry />,
      title: "Quality Manufacturing",
      desc: "Durable RCC concrete pipe solutions manufactured with strict quality control.",
    },
    {
      icon: <FaCogs />,
      title: "Modern Technology",
      desc: "Advanced manufacturing processes ensure precision, consistency, and performance.",
    },
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      desc: "Our skilled team brings practical industry experience to every project.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Partnership",
      desc: "We focus on dependable supply, timely delivery, and long-term relationships.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Heading */}
        <motion.div className="about-heading" variants={itemVariants}>
          <span className="about-eyebrow">
            <span></span>
            WHO WE ARE
          </span>

          <h2>
            Building Strength
            <strong>Into Every Project.</strong>
          </h2>

          <p>
            Reliable concrete pipe solutions engineered for the demands of
            modern infrastructure.
          </p>
        </motion.div>

        {/* Main About Layout */}
        <div className="about-main">
          {/* Image Side */}
          <motion.div className="about-visual" variants={itemVariants}>
            <div className="about-image-wrapper">
              <img
                src={companyImg}
                alt="Titan Pipe Systems manufacturing facility"
              />

              <div className="about-image-overlay"></div>
            </div>

            <div className="about-experience">
              <strong>20+</strong>
              <span>
                Years of
                <br />
                Experience
              </span>
            </div>

            <div className="about-image-label">
              <FaIndustry />
              <span>Industrial Manufacturing</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div className="about-content" variants={itemVariants}>
            <span className="about-content-label">
              ABOUT TITAN PIPE SYSTEMS
            </span>

            <h3>
              Engineering Reliable
              <span>Infrastructure Solutions.</span>
            </h3>

            <p>
              Titan Pipe Systems is a trusted manufacturer of high-quality RCC
              concrete pipes designed for drainage, infrastructure, and
              industrial applications.
            </p>

            <p>
              We combine quality materials, modern manufacturing practices, and
              industry experience to deliver durable and dependable products for
              projects of every scale.
            </p>

            <div className="about-check-list">
              <div>
                <FaCheckCircle />
                <span>Quality-focused manufacturing</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Reliable project supply</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Consistent product performance</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Customer-focused service</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div className="about-features" variants={itemVariants}>
          {features.map((feature, index) => (
            <motion.div
              className="about-feature-card"
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="feature-icon">{feature.icon}</div>

              <div>
                <h4>{feature.title}</h4>

                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
