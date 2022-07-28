import React, { useContext } from "react";
import { ClothesContext } from "../context/Context";

function Cart() {
  const clothes = useContext(ClothesContext);
  console.log(clothes);

  return <div></div>;
}

export default Cart;
