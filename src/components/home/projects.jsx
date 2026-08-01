import React from "react";
import "../../assets/css/home/project.css";

import project1 from "../../assets/images/projects/project1.jpg";
import project2 from "../../assets/images/projects/project2.jpg";
import project3 from "../../assets/images/projects/project3.jpg";
import project4 from "../../assets/images/projects/project4.jpg";

import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "City Water Pipeline",
      location: "Chennai, India",
      year: "2023",
      description: "Large scale water pipeline installation for city supply.",
      image: project1,
    },
    {
      id: 2,
      name: "Industrial Drainage System",
      location: "Bangalore, India",
      year: "2022",
      description:
        "HDPE pipe drainage system for industrial manufacturing area.",
      image: project2,
    },
    {
      id: 3,
      name: "Highway Water Supply",
      location: "Hyderabad, India",
      year: "2024",
      description: "Pipeline installation across highway Project.",
      image: project3,
    },
    {
      id: 4,
      name: "Residential Water Network",
      location: "Coimbatore, India",
      year: "2023",
      description: "Complete underground piping for residential project.",
      image: project4,
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Our Projects</h2>
        <p>
          Successful construction and pipeline projects delivered across India
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.name} />

              {/* Hover Content */}
              <div className="project-overlay">
                <div className="project-overlay-content">
                  <h3 className="project-title">
                    <MdEngineering className="project-icon" />
                    {project.name}
                  </h3>

                  <p className="project-year">
                    <FaCalendarAlt /> {project.year}
                  </p>

                  <p className="project-desc">{project.description}</p>
                </div>
              </div>
            </div>

            {/* LOCATION BELOW IMAGE */}
            <div className="project-location">
              <FaMapMarkerAlt className="icon" />
              {project.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
