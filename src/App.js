import React, { useState } from "react";
import ProductList from "./ProductList";
import SetProduct from "./SetProduct";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product 1",
      description: "Description 1",
      content: "Content 1",
      price: 10,
      manufacturer: "Manufacturer 1",
      quantity: 5,
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description 2",
      content: "Content 2",
      price: 20,
      manufacturer: "Manufacturer 2",
      quantity: 10,
    },
  ]);

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleEdit = (editedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    );
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h1>Product List</h1>
      <ProductList
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <SetProduct onSubmit={handleAddProduct} />
    </div>
  );
};

export default App;
