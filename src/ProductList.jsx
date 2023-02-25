import React from "react";

const Product = ({
  id,
  title,
  description,
  content,
  price,
  manufacturer,
  quantity,
}) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{content}</p>
    <p>Price: {price}</p>
    <p>Manufacturer: {manufacturer}</p>
    <p>Quantity: {quantity}</p>
  </div>
);

const ProductList = () => (
  <div>
    <Product
      id={1}
      title="Product 1"
      description="This is product 1"
      content="Lorem ipsum dolor sit amet"
      price={9.99}
      manufacturer="Acme Inc."
      quantity={10}
    />
    <Product
      id={2}
      title="Product 2"
      description="This is product 2"
      content="Consectetur adipiscing elit"
      price={19.99}
      manufacturer="XYZ Corp."
      quantity={5}
    />
  </div>
);

export default ProductList;
