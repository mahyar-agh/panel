import React from "react";
import Header from "../header/Header";
import { styles } from "../../styles/main";

const Main = ({ children, currentPage }) => {
  const classes = styles();

  return (
    <div className={classes.mainContainer} style={{ width: "75%" }}>
      <Header currentPage={currentPage} />
      {children}
    </div>
  );
};
export default Main;
