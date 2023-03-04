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
          <h2>{updatedProduct.title}</h2>
          <p>{updatedProduct.description}</p>
          <p>{updatedProduct.content}</p>
          <p>{updatedProduct.price}</p>
          <p>{updatedProduct.manufacturer}</p>
          <p>{updatedProduct.quantity}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(updatedProduct.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Product;
