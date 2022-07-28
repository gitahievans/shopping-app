import React from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Cart from "../cart/Cart";
import ItemForm from "../itemForm/ItemForm";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Cart />
      <ItemForm />
    </>
  );
}

export default App;
