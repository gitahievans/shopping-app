import React from "react";
import Cart from "../cart/Cart";
import ItemForm from "../itemForm/ItemForm";
import ItemList from "../home/ItemList";
import Navbar from "../navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemForm />
      <ItemList />
      <Cart />
    </div>
  );
}

export default App;
