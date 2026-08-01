import React from "react";
import "../../assets/css/home/resource.css";

// Import client images
import client1 from "../../assets/images/clients/client1.png";
import client2 from "../../assets/images/clients/client2.png";
import client3 from "../../assets/images/clients/client3.png";
import client4 from "../../assets/images/clients/client4.png";

import case1 from "../../assets/images/clients/case-01.jpg";
import case2 from "../../assets/images/clients/case-02.jpg";
import case3 from "../../assets/images/clients/case-03.jpg";

const Resource = () => {
  const clients = [
    { name: "ABC Constructions", img: client1 },
    { name: "Global Industries", img: client2 },
    { name: "PipeTech Ltd", img: client3 },
    { name: "Industrial Solutions", img: client4 },
  ];

  const testimonials = [
    {
      client: "ABC Constructions",
      feedback:
        "Titan Pipe Systems provided high-quality pipes and exceptional service. Our projects were completed on time.",
    },
    {
      client: "Global Industries",
      feedback:
        "Reliable, durable, and top-notch pipes. Titan Pipe Systems is our preferred supplier for all industrial projects.",
    },
  ];

  const caseStudies = [
    {
      title: "Industrial Plant Piping",
      desc: "Supplied high-strength HDPE and Steel pipes for a major industrial plant.",
      img: case1,
    },
    {
      title: "Commercial Building Project",
      desc: "Complete PVC piping solution for a multi-storey commercial building.",
      img: case2,
    },
    {
      title: "Water Plant Piping",
      desc: "Supplied high-strength HDPE and Steel pipes for a major industrial plant.",
      img: case3,
    },
  ];

  return (
    <div className="resource-container" id="resource">
      <h2>Our Clients</h2>
      <div className="clients-logos">
        {clients.map((client, idx) => (
          <div key={idx} className="client-card">
            <div className="client-img">
              <img src={client.img} alt={client.name} />
            </div>
            <p>{client.name}</p>
          </div>
        ))}
      </div>

      <h2>Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <p>"{t.feedback}"</p>
            <span>- {t.client}</span>
          </div>
        ))}
      </div>

      <h2>Case Studies</h2>
      <div className="case-studies-grid">
        {caseStudies.map((c, idx) => (
          <div key={idx} className="case-card">
            <div className="case-image">
              <img src={c.img} alt={c.title} />
            </div>
            <div className="case-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
