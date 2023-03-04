import React, { useState } from "react";
import Product from "./Product";
import EditProduct from "./EditProduct";

const ProductList = ({ products, setProducts }) => {
  const [editingProductId, setEditingProductId] = useState(null);

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
  };

  const handleUpdateProduct = (editedProduct) => {
    setEditingProductId(null);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    );
  };

  return (
    <div>
      <h1>My Products</h1>
      {products.map((product) =>
        editingProductId === product.id ? (
          <EditProduct
            key={product.id}
            product={product}
            onSave={handleUpdateProduct}
            onCancel={() => setEditingProductId(null)}
          />
        ) : (
          <Product
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
            onSave={handleUpdateProduct}
          />
        )
      )}
    </div>
  );
};

export default ProductList;
