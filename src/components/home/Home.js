import React, { useEffect, useState } from "react";
import Item from "../item/Item";

function Home({ clothes }) {
  return (
    <div className="grid-container">
      <Item clothes={clothes} />
    </div>
  );
}

export default Home;
