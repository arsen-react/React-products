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

  const { title, description, content, price, manufacturer, quantity } =
    newProduct;

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
      ...newProduct,
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

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <h1>My Products</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={handleDeleteProduct}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <h2>Create New Product</h2>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="manufacturer">Manufacturer: </label>
          <input
            type="text"
            name="manufacturer"
            value={manufacturer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={quantity}
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
