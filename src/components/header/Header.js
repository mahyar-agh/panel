import React from "react";
import ShowDate from "./ShowDate";
import { styles } from "../../styles/header";
import { FaPowerOff } from "react-icons/fa";

const Header = ({ currentPage }) => {
  const classes = styles();

  const renderButton = () => {
    if (window.location.pathname === "/") {
      return (
        <button className={classes.headerButton}>
          <i>
            <FaPowerOff />
          </i>
          خروج از پنل
        </button>
      );
    } else {
      return null;
    }
  };
  return (
    <div className={classes.headerContainer}>
      <h2 className={classes.headerLabel}>{currentPage}</h2>
      <div className={classes.headerInnerContainer}>
        <ShowDate />
        {renderButton()}
      </div>
    </div>
  );
};
export default Header;
