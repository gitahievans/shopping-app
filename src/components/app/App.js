import React, { useState, useEffect } from "react";
import Cart from "../cart/Cart";
import ItemForm from "../itemForm/ItemForm";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";

function App() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/clothes")
      .then((r) => r.json())
      .then((clothData) => setClothes(clothData));
  }, []);

  return (
    <>
      <Navbar />
      <Home clothes={clothes} />
      <Cart />
    </>
  );
}

export default App;
