import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/wooComerce";
import portada from "../assets/images/portada.png";

const MainSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(1, 5));
    };
    getProducts();
  }, []);

  return (
    <div className="relative ">
      <img src={portada} alt="Portada" className="w-auto h-full" />
      <div className="flex justify-center gap-4 -mt-52">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
