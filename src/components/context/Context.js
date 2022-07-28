import React from "react";

const ClothesContext = React.createContext();

function ClothesProvider({ children }) {
  return (
    <ClothesContext.Provider value={[]}>{children}</ClothesContext.Provider>
  );
}

export { ClothesContext, ClothesProvider };
