import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../../button/Button";
import { styles } from "../../../styles/search";

const Search = ({ placeholder }) => {
  const classes = styles();
  return (
    <div className={classes.searchContainer}>
      <div className="innerContainer">
        <FaSearch />
        <input type="text" placeholder={placeholder} />
      </div>
      <Button>جستجو</Button>
    </div>
  );
};

export default Search;
