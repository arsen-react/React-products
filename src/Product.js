import React, { useState } from "react";
import EditProduct from "./EditProduct";

const Product = ({ product, onDelete, onEdit, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = (editedProduct) => {
    setUpdatedProduct(editedProduct);
    setEditing(false);
    // Call the onSave callback function to update the state in the parent component
    onSave(editedProduct);
  };

  return (
    <div>
      {editing ? (
        <EditProduct
          product={updatedProduct}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <h2>Title: {updatedProduct.title}</h2>
          <p>Description: {updatedProduct.description}</p>
          <p>Content: {updatedProduct.content}</p>
          <p>Price: {updatedProduct.price}</p>
          <p>mMnufacturer: {updatedProduct.manufacturer}</p>
          <p>Quantity: {updatedProduct.quantity}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Product;
