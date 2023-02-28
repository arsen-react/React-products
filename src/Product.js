import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.content}</p>
      <p>{product.price}</p>
      <p>{product.manufacturer}</p>
      <p>{product.quantity}</p>
    </div>
  );
};

export default Product;
