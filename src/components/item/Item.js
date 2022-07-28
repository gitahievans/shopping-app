import React, { useContext } from "react";
import { ClothesContext } from "../context/Context";

function Item() {
  const clothes = useContext(ClothesContext);
  const clothItems = clothes.map((cloth) => {
    return (
      <div className="card" key={cloth.id}>
        <div className="card-body">
          <img className="card-image" src={cloth.image} />
          <p className="card-title">{cloth.name}</p>
          <p className="card-price">{cloth.price}</p>
          <div>
            <button className="details-button">View details</button>
          </div>
          <div>
            <button className="cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  });

  return <div className="card">{clothItems}</div>;
}

export default Item;
