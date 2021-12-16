import "./CartScreen.css";
import React from "react";
import CartItem from "../components/CartItem";
import { CarritoContext } from "../context/carritoContext";
import { Link } from "react-router-dom";
import { useMercadopago } from "react-sdk-mercadopago";
import axios from "axios";


const CartScreen = () => {
  const carritoContext = React.useContext(CarritoContext);
  const remerasCarrito = carritoContext.carrito;
  const [preferenceId, setPreferenceId] = React.useState(null);


  function calcularPrecio() {
    var suma = 0;
    remerasCarrito.forEach((remera) => {
      suma += parseInt(remera.remeraPrice);
    });
    return suma;
  }

  const mercadopago = useMercadopago.v2(
    "TEST-b329953f-45ae-42dd-8a23-67e9a43d4dbb",
    {
      locale: "en-US"
    }
  );
    
  React.useEffect(() => {
    axios.post("/compras", { cart: remerasCarrito }).then((order) => {
      console.log(order.data.preferenceId);
      setPreferenceId(order.data.preferenceId);
    });
  }, [remerasCarrito]);

  React.useEffect(() => {
    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: { preferenceId },
        },
        render: {
          container: ".cho-container",
          label: "Pay",
        },
      });
    }
  }, [mercadopago]);

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        {remerasCarrito.map((remera) => (
          <CartItem
            key={remera.remeraId}
            remeraId={remera.remeraId}
            remeraPrice={remera.remeraPrice}
          />
        ))}
      </div>

      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>YOU ARE GOING TO BUY ({remerasCarrito.length}) ITEMS</p>
          <p>TOTAL PRICE ${calcularPrecio()}</p>
        </div>

        <div>
          <div class="cho-container" />
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
