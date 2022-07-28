import React from "react";
import { useContext } from "react";
import Item from "../item/Item";
import { ClothesContext } from "../context/Context";

function Home() {
  const items = useContext(ClothesContext);

  return (
    <div className="container">
      <Item />
    </div>
  );
}

export default Home;
