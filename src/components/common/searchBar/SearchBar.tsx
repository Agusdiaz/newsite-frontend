import React from "react";
import { SearchBarType } from "../../../utils/interfaces/SearchBarTypes";
import "./searchBar.scss";

const SearchBar = (props: { searchProps: SearchBarType }) => {
  const { placeholder, onClickFunction, handleInput } = props.searchProps;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClickFunction();
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="search-box-container" title="Search">
        <button
          className="search-box-container__btn"
          type="submit"
          onClick={onClickFunction}
        >
          <i className="fa fa-search"></i>
        </button>
        <input
          type="search"
          placeholder={placeholder}
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default SearchBar;
