import React from "react";

const Navbar = () => (
  <nav className="bg-green-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">La Elena</h1>
      <input
        type="text"
        placeholder="Buscar productos..."
        className="p-2 rounded bg-white text-black"
      />
      <button className="bg-yellow-500 p-2 rounded">Carrito</button>
    </div>
  </nav>
);

export default Navbar;
