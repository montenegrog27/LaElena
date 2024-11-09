import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={product.images[0]?.src}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-2 font-bold">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
    </div>
  );
};

export default ProductCard;
