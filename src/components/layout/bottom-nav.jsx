// import React, { useState } from "react";
// import "../../assets/css/layout/bottom-nav.css";

// import {
//   FaHome,
//   FaInfoCircle,
//   FaBox,
//   FaBookOpen,
//   FaEnvelope,
//   FaWhatsapp,
//   FaPhoneAlt,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// function Bottomnav({ onMenuClick }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="footer-radial-section">
//       <div className={`corepipe-radial-menu ${open ? "active" : ""}`}>
//         <button
//           className="menu-toggle"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle Menu"
//         >
//           {open ? <FaTimes /> : <FaBars />}
//         </button>

//         <button className="menu-item item1" onClick={() => onMenuClick("home")}>
//           <FaHome />
//         </button>

//         <button
//           className="menu-item item2"
//           onClick={() => onMenuClick("about")}
//         >
//           <FaInfoCircle />
//         </button>

//         <button
//           className="menu-item item3"
//           onClick={() => onMenuClick("products")}
//         >
//           <FaBox />
//         </button>

//         <button
//           className="menu-item item4"
//           onClick={() => onMenuClick("resource")}
//         >
//           <FaBookOpen />
//         </button>

//         <button
//           className="menu-item item5"
//           onClick={() => onMenuClick("contact")}
//         >
//           <FaEnvelope />
//         </button>
//       </div>

//       <a
//         href="https://wa.me/919600544451"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsapp-btn"
//       >
//         <FaWhatsapp />
//       </a>

//       <a href="tel:+919600544451" className="call-btn">
//         <FaPhoneAlt />
//       </a>
//     </div>
//   );
// }

// export default Bottomnav;


import React, { useState } from "react";
import "../../assets/css/layout/bottom-nav.css";

import {
  FaHome,
  FaShoppingCart,
  FaIndustry,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

function Bottomnav({ onMenuClick }) {
  const [active, setActive] = useState("home");

  const menus = [
    {
      id: "home",
      icon: <FaHome />,
      label: "Home",
    },
    {
      id: "products",
      icon: <FaShoppingCart />,
      label: "about",
    },
    {
      id: "infrastructure",
      icon: <FaIndustry />,
      label: "products",
    },
    {
      id: "brands",
      icon: <FaUsers />,
      label: "resource",
    },
    {
      id: "contact",
      icon: <FaEnvelope />,
      label: "Contact",
    },
  ];

  const handleClick = (id) => {
    setActive(id);
    onMenuClick(id);
  };

  return (
    <div className="bottom-nav">
      {menus.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${active === item.id ? "active" : ""}`}
          onClick={() => handleClick(item.id)}
        >
          <span className="icon">{item.icon}</span>

          {active === item.id && <span className="label">{item.label}</span>}
        </button>
      ))}
    </div>
  );
}

export default Bottomnav;
