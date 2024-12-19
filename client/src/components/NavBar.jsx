import React from "react";
import logo from "../assets/pokedex logo.png"
import { Link } from "react-router-dom";

function NavBar() {
  return (
        <nav className="flex justify-center items-center gap-7 text-xl font-semibold">
          <Link to='/'><h1>Home</h1></Link>
          <img src={logo} alt="Logo" className="w-40" />
          <Link to='/favorite'><h1>Favorite</h1></Link>
        </nav>
  )
}

export default NavBar;
