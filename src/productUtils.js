export const createProduct = (
  id,
  title,
  description,
  content,
  price,
  manufacturer,
  quantity
) => {
  return {
    id,
    title,
    description,
    content,
    price,
    manufacturer,
    quantity,
  };
};
