import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await axios.post(
    "http://localhost:3000/api/orders",
    orderData
  );
  return response.data;
};
