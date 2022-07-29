import React from "react";
import { useContext } from "react";
import Item from "../item/Item";
import { ClothesContext } from "../context/Context";

function Home() {
  const [clothes, setClothes] = useContext(ClothesContext);

  const handleDeleteItem = (deletedItem) => {
    const updatedList = clothes.filter((item) => item.id !== deletedItem.id);
    setClothes(updatedList);
  };

  return (
    <div className="container">
      {clothes.map((item) => (
        <Item key={item.id} cloth={item} onDeleteItem={handleDeleteItem} />
      ))}
    </div>
  );
}

export default Home;
