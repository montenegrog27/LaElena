import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/wooComerce";
import CategoriesCard from "./CategoriesCard";

const AllCategories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(1, 14)); // Limita a 13 productos (5 en las dos primeras filas y 3 en la última)
    };
    getProducts();
  }, []);

  return (
    <div className="relative px-48 py-10">
      <h2 className="font-GothamBold text-Titulos my-10 text-start w-full">
        Todas las categorías
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${index >= 10 ? "col-span-1 md:col-span-1" : ""}`}
          >
            <CategoriesCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
