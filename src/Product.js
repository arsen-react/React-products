import React from "react";

const Product = ({ product, onDelete }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.content}</p>
      <p>{product.price}</p>
      <p>{product.manufacturer}</p>
      <p>{product.quantity}</p>
      <button onClick={() => onDelete && onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default Product;
