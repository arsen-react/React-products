import React, { useState } from "react";

const EditProduct = ({ product, onSave, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={editedProduct.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={editedProduct.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <input
          type="text"
          name="content"
          value={editedProduct.content}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          value={editedProduct.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="manufacturer">Manufacturer: </label>
        <input
          type="text"
          name="manufacturer"
          value={editedProduct.manufacturer}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          name="quantity"
          value={editedProduct.quantity}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditProduct;
