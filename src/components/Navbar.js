import "./Navbar.css";
import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { CarritoContext } from "../context/carritoContext";

const Navbar = ({click}) => {

  const { carrito } = useContext(CarritoContext);

  return (
    <nav className="navbar">
      
        <Link to="/">
          <p className="navbar_title">INTERNET WAREHOUSE APPAREL</p>
        </Link>

      <ul className="navbar_links">
        <li>
          <Link to="/home">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/cart">
            CART {carrito.length!==0?<span class="badge rounded-pill bg-success">{carrito.length}</span>:""}
            </Link>
        </li>
        <li>
          <Link to="/info">INFO.</Link>
        </li>
      </ul>

      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
