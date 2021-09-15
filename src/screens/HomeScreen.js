import "./HomeScreen.css";
import React, { useState, useEffect } from "react";
import Product from "../components/Product";

const HomeScreen = () => {
  const [remeras, setRemeras] = useState([]);

  useEffect(() => {
    fetch("/remeras")
      .then((res) => res.json())
      .then((json) => {
        setRemeras(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="homescreen">
      <div className="homescreen__products">
        {remeras.map((remera,key) => (
          <div className="remera" key={key}>
            <Product
              key={remera.id}
              productId={remera.id}
              name={remera.name}
              price={remera.price}
              frontimgurl={remera.frontimgurl}
              description={remera.description}
              backimgurl={remera.backimgurl}
              onlyImage={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
