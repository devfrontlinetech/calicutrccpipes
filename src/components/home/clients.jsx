import React from "react";
import "../../assets/css/home/clients.css";

import client1 from "../../assets/images/clients/client1.png";
import client2 from "../../assets/images/clients/client5.png";
import client3 from "../../assets/images/clients/client3.png";
import client4 from "../../assets/images/clients/client4.png";
import client5 from "../../assets/images/clients/client2.png";
import client6 from "../../assets/images/clients/client6.png";
import client7 from "../../assets/images/clients/client7.png";
import client8 from "../../assets/images/clients/client8.png";
import client9 from "../../assets/images/clients/client9.png";
import client10 from "../../assets/images/clients/client10.png";
import client11 from "../../assets/images/clients/client11.png";
import client12 from "../../assets/images/clients/client12.png";


const Clients = () => {
  const clients = [
    { id: 1, logo: client1, name: "Client 1" },
    { id: 2, logo: client2, name: "Client 2" },
    { id: 3, logo: client3, name: "Client 3" },
    { id: 4, logo: client4, name: "Client 4" },
    { id: 5, logo: client5, name: "Client 5" },
    { id: 6, logo: client6, name: "Client 6" },
    { id: 7, logo: client7, name: "Client 7" },
    { id: 8, logo: client8, name: "Client 8" },
    { id: 9, logo: client9, name: "Client 9" },
    { id: 10, logo: client10, name: "Client 10" },
    { id: 11, logo: client11, name: "Client 11" },
    { id: 12, logo: client12, name: "Client 12" },
  ];

  return (
    <section className="clients-section">
      <div className="clients-header">
        <h2>Our Clients</h2>
        <p>
          Trusted by leading organizations for infrastructure and pipeline
          projects.
        </p>
      </div>

      <div className="clients-grid">
        {clients.map((client) => (
          <div className="client-card" key={client.id}>
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
