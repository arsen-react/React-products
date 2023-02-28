import React, { useState } from "react";
import ProductList from "./ProductList";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product 1",
      description: "This is product 1",
      content: "Some product content",
      price: 10.99,
      manufacturer: "Manufacturer 1",
      quantity: 10,
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is product 2",
      content: "Some product content",
      price: 19.99,
      manufacturer: "Manufacturer 2",
      quantity: 5,
    },
  ]);

  return (
    <div>
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;
