import React, { useState } from "react";

const SetProduct = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    content: "",
    price: "",
    manufacturer: "",
    quantity: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(product);
    setProduct({
      title: "",
      description: "",
      content: "",
      price: "",
      manufacturer: "",
      quantity: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Product</h2>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <input
          type="text"
          name="content"
          value={product.content}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="manufacturer">Manufacturer: </label>
        <input
          type="text"
          name="manufacturer"
          value={product.manufacturer}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default SetProduct;
