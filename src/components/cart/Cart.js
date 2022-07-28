import React, { useState } from "react";

function Cart({ cartedItems }) {
  return (
    <div>
      <h1>Cart {cartedItems.length}</h1>
      {cartedItems}
    </div>
  );
}

export default Cart;
