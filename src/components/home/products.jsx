import React from "react";
import "../../assets/css/home/products.css";
import {
  FaStar,
  FaShoppingCart,
  FaInfoCircle,
  FaRulerCombined,
} from "react-icons/fa";
import { useState } from "react";
import Pagination from "../common/pagination";
import products from "../data/product-data";

const ProductCard = ({
  title,
  img,
  price,
  size,
  rating,
  uses,
  material,
  description,
  stock,
  strength,
}) => {
  const whatsappMessage = () => {
    const msg = `
Hello, I need RCC Pipe details:

Product : ${title}
Material : ${material}
Size : ${size}
Price : ${price}

Please send quotation.
`;

    window.open(
      `https://wa.me/919600544451?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt={title} />
        <span className="badge">{stock}</span>
      </div>

      <div className="product-content">
        <div className="title-row">
          <h3>{title}</h3>

          <h4>{price}</h4>
        </div>

        <div className="rating">
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <span>{rating}</span>
        </div>

        <div className="pipe-details">
          <p>
            <FaRulerCombined />
            {size}
          </p>

          <p>{material}</p>
        </div>

        {/* <p className="description">{description}</p> */}

        <div className="use-box">
          <b>Applications</b>

          <p>{uses}</p>
        </div>

        <p className="strength">Strength :{strength}</p>

        <div className="product-buttons">
          <button className="order-btn" onClick={whatsappMessage}>
            <FaShoppingCart />
            Order
          </button>

          <button className="details-btn" onClick={whatsappMessage}> 
            <FaInfoCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [page, setPage] = useState(1);
  const perPage = 8;
  const last = page * perPage;
  const first = last - perPage;
  const showProducts = products.slice(first, last);
  const totalPages = Math.ceil(products.length / perPage);

  return (
    <section className="section" id="products">
      <div className="section-title">
        <h2>RCC Concrete Pipes</h2>

        <p>Heavy duty precast concrete pipe solutions</p>
      </div>

      <div className="product-grid">
        {showProducts.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setCurrentPage={setPage}
      />
    </section>
  );
};

export default Products;
