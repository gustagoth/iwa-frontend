import "./Navbar.css";
import { Link } from "react-router-dom";
import iwaLogo from "../resources/iwa-logo.gif";

const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src={iwaLogo} alt="iwa-logo" />
        </Link>
      </div>

      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
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
