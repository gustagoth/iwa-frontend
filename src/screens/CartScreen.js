import "./CartScreen.css";
import React, { useState, useEffect, useContext } from "react";

//components
import CartItem from "../components/CartItem";

// context
import { CarritoContext } from "../context/carritoContext";

const CartScreen = () => {
  const carritoContext = React.useContext(CarritoContext);
  const remerasCarrito = carritoContext.carrito;

  function calcularPrecio(){
    var suma = 0;
    remerasCarrito.forEach(remera => {
      suma += parseInt(remera.remeraPrice);
    });
    return suma;
  }

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        {remerasCarrito.map((remera) => (
          <CartItem key={remera.remeraId} remeraId={remera.remeraId} remeraPrice={remera.remeraPrice}/>
        ))}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>YOU ARE GOING TO BUY ({remerasCarrito.length}) ITEMS</p>
          <p>TOTAL PRICE ${calcularPrecio()}</p>
        </div>

        <div>
          <button>PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
