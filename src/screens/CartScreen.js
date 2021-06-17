import "./CartScreen.css";
import React, { useState, useEffect } from "react";

//components
import CartItem from "../components/CartItem";

// context
import { CarritoContext } from "../context/carritoContext";

const CartScreen = () => {
  const carritoContext = React.useContext(CarritoContext);
  const remerasCarrito = carritoContext.carrito;


  const calcularPrecioTotal = () => {};

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping cart</h2>
        {remerasCarrito.map((remera) => (
          <CartItem key={remera.remera} remeraId={remera.remera} />
        ))}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>

        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
