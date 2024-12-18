import React from "react";
import logo from "../assets/pokedex logo.png"; // Import logo dari folder lokal

function NavBar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between" />
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
    </nav>
  );
}

export default NavBar;
