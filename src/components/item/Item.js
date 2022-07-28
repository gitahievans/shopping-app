import React, { useEffect, useState } from "react";

function Item({ item, onHandleAddToCart }) {
  return (
    <div className="card" key={item.id}>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <div className="card-btn">
        <button>View</button>
      </div>
      <div className="card-btn">
        <button onClick={onHandleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}
export default Item;
