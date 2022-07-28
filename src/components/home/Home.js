import React, { useEffect, useState } from "react";
import Item from "../item/Item";
import Cart from "../cart/Cart";

function Home() {
  const [clothes, setClothes] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/clothes")
      .then((r) => r.json())
      .then((clothData) => setClothes(clothData));
  }, []);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log(cartItems);
  };

  const items = clothes.map((item) => {
    return (
      <Item
        key={item.id}
        item={item}
        onHandleAddToCart={handleAddToCart}
      ></Item>
    );
  });

  return (
    <>
      <div className="grid-container">{items}</div>
      <Cart cartedItems={cartItems} />
    </>
  );
}

export default Home;
