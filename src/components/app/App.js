import React from "react";
import { ClothesContext } from "../context/Context";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Cart from "../cart/Cart";
import ItemForm from "../itemForm/ItemForm";
import { useState } from "react";

function App() {
  const [clothes, setClothes] = useState([]);
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
