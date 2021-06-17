import "./CartItem.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CartItem = ({ remeraId }) => {
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

      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
