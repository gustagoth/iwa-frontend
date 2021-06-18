import "./CartScreen.css";
import React, { useState, useEffect } from "react";

//components
import CartItem from "../components/CartItem";

// context
import { CarritoContext } from "../context/carritoContext";

const CartScreen = () => {
  const carritoContext = React.useContext(CarritoContext);
  const remerasCarrito = carritoContext.carrito;


  console.log(remerasCarrito.lenght);
  
  return (
    
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping cart</h2>
        {remerasCarrito.map((remera) => (
          <CartItem key={remera.remeraId} remeraId={remera.remeraId} />
        ))}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal {remerasCarrito.lenght} items</p>
          <p></p>
        </div>

        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
