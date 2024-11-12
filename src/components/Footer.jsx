import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";

import logoSelftech from "../assets/logo/logoself.png";
import logo from "../assets/logo/logo.png";

function Footer() {
  return (
    <footer className="bg-VerdeFooterGradiente text-white py-10 ">
      <div className="container mx-auto flex justify-between items-start">
        <div className="flex items-center">
          <img src={logo} alt="La Elena Logo" className="h-10 mr-2" />
        </div>

        <div className="text-start flex justify-center items-start gap-3 flex-col">
          <h3 className="font-bold">Contáctanos</h3>
          <div className="flex items-center justify-center space-x-2">
            <LuPhone />
            <span>0341 456-6676</span>
          </div>
          <div className="flex items-center justify-center space-x-2 mt-1">
            <HiOutlineMapPin className="h-5 w-5" />
            <span>Av. Pres. Perón 7299, Rosario Santa Fe</span>
          </div>
        </div>

        <div className="text-start flex justify-center items-start gap-3 flex-col">
          <h3 className="font-bold">Secciones</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Categorías
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Staff
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Historia
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <img src={logoSelftech} alt="Selftech Logo" className="h-14" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
