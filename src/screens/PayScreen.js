import React, { useState, useEffect } from "react";
import { CarritoContext } from "../context/carritoContext";
import axios from "axios";

const PayScreen = () => {
  const FORM_ID = "payment-form";
  const carritoContext = React.useContext(CarritoContext);
  const remerasCarrito = carritoContext.carrito;
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    axios.post("/compras", { cart: remerasCarrito }).then((order) => {
      console.log(order.data.preferenceId);
      setPreferenceId(order.data.preferenceId);
    });
  }, [remerasCarrito]);

  useEffect(() => {
    if (preferenceId) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return(

    <form id={FORM_ID} method="GET" />
    

  ) };
export default PayScreen;
