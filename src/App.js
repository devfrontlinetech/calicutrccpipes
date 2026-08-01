import React from "react";
// import HeaderTop from "./components/layout/header/header-top.jsx";
import Header from "./components/layout/header/header.jsx";
import Hero from "./components/home/hero.jsx";
import About from "./components/home/about.jsx";
import Products from "./components/home/products.jsx";
import Resource from "./components/home/resource.jsx";
import Contact from "./components/home/contact.jsx";
import Footer from "./components/layout/footer/footer.jsx";

import Bottomnav from "./components/layout/bottom-nav.jsx";
import Float from "./components/common/float.jsx";

const App = () => {
  // Scroll to section handler
  const handleMenuClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="clients">
        <Resource />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <Bottomnav onMenuClick={handleMenuClick} />
      <Float />
    </div>
  );
};

export default App;
