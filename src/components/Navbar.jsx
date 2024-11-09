import React from "react";
import logo from "../assets/logo/logo.png";

const Navbar = () => (
  <nav className="bg-VerdeNavbarradiente text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <img src={logo} />
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
