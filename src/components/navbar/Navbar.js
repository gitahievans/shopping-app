import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";

function Navbar() {
  return (
    <div className="top">
      <div className="navbar">
        <h2>Home</h2>
        <h2>
          Cart
          <img
            className="cart"
            src="https://cdn-icons-png.flaticon.com/128/1685/1685513.png"
            alt="Cart"
          />
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
