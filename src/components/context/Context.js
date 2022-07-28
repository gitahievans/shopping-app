import React, { useState } from "react";
import { useEffect } from "react";

const ClothesContext = React.createContext();

function ClothesProvider({ children }) {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/clothes")
      .then((r) => r.json())
      .then((clothesData) => setClothes(clothesData));
  }, []);

  return (
    <ClothesContext.Provider value={clothes}>
      {children}
    </ClothesContext.Provider>
  );
}

export { ClothesContext, ClothesProvider };
