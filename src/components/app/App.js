import React from "react";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Cart from "../cart/Cart";
import ItemForm from "../itemForm/ItemForm";
import SearchForm from "../searchForm/SearchForm";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <SearchForm />
      </div>
      <div className="app">
        <Home />
        <Cart />
        <ItemForm />
      </div>
    </>
  );
}

export default App;
