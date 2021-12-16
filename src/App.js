import "./App.css";
import { useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pantallas //
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// componentes //
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

// context //
import { CarritoContext } from "./context/carritoContext";

import "bootstrap/dist/css/bootstrap.min.css";
import StartScreen from "./screens/StartScreen";
import PayScreen from "./screens/PayScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const carritoMemo = useMemo(() => ({ carrito, setCarrito }), [carrito]);

  return (
    <CarritoContext.Provider value={carritoMemo}>
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={StartScreen} />
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
            <Route exact path="/pay" component={PayScreen} />
          </Switch>
        </main>
      </Router>
    </CarritoContext.Provider>
  );
}

export default App;
