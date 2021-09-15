import "./CartScreen.css";
import React from "react";

//components
import CartItem from "../components/CartItem";

// context
import { CarritoContext } from "../context/carritoContext";

const CartScreen = () => {
  const carritoContext = React.useContext(CarritoContext);
  const remerasCarrito = carritoContext.carrito;

  function calcularPrecio(){
    console.log("estoy en calcular precio");
    var suma = 0;
    remerasCarrito.forEach(remera => {
      suma += parseInt(remera.remeraPrice);
    });
    console.log(suma);
  }

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
          <p>Subtotal ({remerasCarrito.length}) items</p>
          <p>Price {calcularPrecio()}</p>
        </div>

        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
