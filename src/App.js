import React, { useState } from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import './App.css';
import data from "./Data";

function App() {
  const [cartItems, setCartItems] = useState(data);
  return (
    <div className="App">
      <Header 
        title="Amazon Cart"
      />
      <div className="App-main">

        <CartItems
          items={cartItems}
          ChangeCartQuantity={setCartItems}
         />
        <CartTotal
          items={cartItems}
         />
      </div>
    </div>
  );
}

export default App;
