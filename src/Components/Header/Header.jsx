import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black py-4 fixed w-full top-0 left-0 shadow-md z-50">
      <div className=""></div>
      <div className="container mx-auto px-4 flex justify-between items-center">

        <a href="/" className="block">
          <img
            src="https://www.limsa.uz/assets/HeaderLogotype-DfCIcAIz.png"
            alt="Company logo"
            width="120"
            loading="lazy"
          />
        </a>

        <nav
          className={`absolute md:static top-16 right-0 w-full md:w-auto bg-black md:bg-transparent p-5 md:p-0 transition-all duration-300 
              ${menuOpen ? "block" : "hidden"} md:flex`}
        >
          <ul className="flex flex-col md:flex-row gap-6 text-white text-lg font-light">
            <li>
              <Link to="/" className="hover:text-purple-600">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-purple-400">Our Services</Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-purple-400">Our Works</Link>
            </li>
            <li>
              <Link to="/prices" className="hover:text-purple-400">Prices</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <select className="border rounded-md p-2 bg-black text-white shadow-sm">
          <option value="eng">Eng</option>
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
          
          </select>


          <a href="tel:+998935138833" className="bg-purple-600 text-white font-medium border border-purple-600 rounded-lg px-5 py-3 hover:bg-transparent hover:border-white">
            +998 (33) 258 73 58
          </a>
        </div>
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 bg-purple-600 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-purple-600 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-purple-600 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
