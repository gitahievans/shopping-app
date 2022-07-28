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
          <div className="card-btns">
            <div>
              <button className="details-button">View details</button>
            </div>
            <div className="card-bottom">
              <button className="cart-button">Add to Cart</button>
              <div className="remove">
                <img
                  className="remove-item"
                  src="https://cdn-icons.flaticon.com/png/512/4980/premium/4980320.png?token=exp=1659044681~hmac=c6d277c1b22aebcd2e2f1c05bfb221f3"
                  alt="Remove"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{clothItems}</>;
}

export default Item;
