import "./App.css";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is the description for product 1.",
      content: "This is the content for product 1.",
      price: 10.99,
      manufacturer: "Manufacturer A",
      quantity: 5,
    },

    {
      id: 2,
      title: "Product 2",
      description: "This is the description for product 2.",
      content: "This is the content for product 2.",
      price: 15.99,
      manufacturer: "Manufacturer B",
      quantity: 10,
    },

    {
      id: 3,
      title: "Product 3",
      description: "This is the description for product 3.",
      content: "This is the content for product 3.",
      price: 20.99,
      manufacturer: "Manufacturer C",
      quantity: 7,
    },

    {
      id: 4,
      title: "Product 4",
      description: "This is the description for product 4.",
      content: "This is the content for product 4.",
      price: 12.99,
      manufacturer: "Manufacturer A",
      quantity: 3,
    },

    {
      id: 5,
      title: "Product 5",
      description: "This is the description for product 4.",
      content: "This is the content for product 4.",
      price: 12.99,
      manufacturer: "Manufacturer A",
      quantity: 3,
    },

    {
      id: 6,
      title: "Product 6",
      description: "This is the description for product 4.",
      content: "This is the content for product 4.",
      price: 12.99,
      manufacturer: "Manufacturer A",
      quantity: 3,
    },

    {
      id: 7,
      title: "Product 7",
      description: "This is the description for product 4.",
      content: "This is the content for product 4.",
      price: 12.99,
      manufacturer: "Manufacturer A",
      quantity: 3,
    },

    {
      id: 8,
      title: "Product 8",
      description: "This is the description for product 4.",
      content: "This is the content for product 4.",
      price: 12.99,
      manufacturer: "Manufacturer A",
      quantity: 3,
    },

    {
      id: 9,
      title: "Product 9",
      description: "This is the description for product 4.",
      content: "This is the content for product 4.",
      price: 12.99,
      manufacturer: "Manufacturer A",
      quantity: 3,
    },

    {
      id: 10,
      title: "Product 10",
      description: "This is the description for product 4.",
      content: "This is the content for product 4.",
      price: 12.99,
      manufacturer: "Manufacturer A",
      quantity: 3,
    },
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <p>{product.manufacturer}</p>
          <p>{product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
