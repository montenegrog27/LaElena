import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  auth: {
    username: import.meta.env.VITE_WC_CONSUMER_KEY,
    password: import.meta.env.VITE_WC_CONSUMER_SECRET,
  },
});

export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await api.post("/orders", orderData);
  return response.data;
};

export default api;
