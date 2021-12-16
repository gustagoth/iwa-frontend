import "./CartItem.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/carritoContext";

const CartItem = ({ remeraId, remeraPrice }) => {
  const [remera, setRemera] = useState([]);
  useEffect(() => {
    fetch(`/remera/${remeraId}`)
      .then((res) => res.json())
      .then((json) => {
        setRemera(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [remeraId]);

  const { carrito, setCarrito } = useContext(CarritoContext);

  function deleteItemFromContext() {
    const found = carrito.findIndex(
      (element) =>
        element.remeraId === remeraId && element.remeraPrice === remeraPrice
    );
    if (found > -1) {
      var filtered = carrito.filter(function(value, index, arr){
        return index!=found;
      });
    }
    setCarrito(filtered);
  }

  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <Link to={`/product/${remera.id}`}>
          <img src={remera.frontimgurl} alt={remera.name} />
        </Link>
      </div>

      <Link to={`/product/${remera.id}`} className="cartitem__name">
        <p>{remera.name}</p>
      </Link>

      <p className="cartitem__price">${remera.price}</p>
      <Link to="/cart">
        <button className="cartitem__deleteBtn" onClick={deleteItemFromContext}>
          <i className="fas fa-trash"></i>
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
