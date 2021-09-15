import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      
        <Link to="/">
          <p className="navbar_title">INTERNET WAREHOUSE APPAREL</p>
        </Link>

      <ul className="navbar_links">
        <li>
          <Link to="/">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/cart">CART</Link>
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
