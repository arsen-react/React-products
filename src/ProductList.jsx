import React, { useState } from "react";
import Product from "./Product";
import { createProduct } from "./productUtils";

const ProductList = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    id: null,
    title: "",
    description: "",
    content: "",
    price: "",
    manufacturer: "",
    quantity: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const product = createProduct(id, ...Object.values(newProduct));
    setNewProduct({
      id: null,
      title: "",
      description: "",
      content: "",
      price: "",
      manufacturer: "",
      quantity: "",
    });
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <div>
      <h1>My Products</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <form onSubmit={handleSubmit}>
        <h2>Create New Product</h2>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <input
            type="text"
            name="content"
            value={newProduct.content}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="manufacturer">Manufacturer: </label>
          <input
            type="text"
            name="manufacturer"
            value={newProduct.manufacturer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductList;
