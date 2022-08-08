import React from "react";
import "./product.css";
const Product = (props) => {
  return (
    <div className="product-card">
      <h2 class="title">{props.title}</h2>
      <img src={props.images} alt="painting"></img>
    </div>
  );
};

export default Product;
