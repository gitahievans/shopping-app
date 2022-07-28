import React from "react";

function SearchForm() {
  return (
    <div className="search-container">
      <form className="form-search">
        <input type="text" placeholder="Search Item" name="search-form"></input>
        <button type="submit">
          <img
            className="search-image"
            src="https://cdn-icons-png.flaticon.com/512/875/875623.png"
            alt="Search"
          ></img>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
