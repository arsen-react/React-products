import React from "react";

const ProductDelete = ({ product, products, setProducts }) => {
  const handleDelete = () => {
    const filteredProducts = products.filter((p) => p.id !== product.id);
    setProducts(filteredProducts);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default ProductDelete;
