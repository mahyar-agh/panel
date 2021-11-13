import React from "react";

const ItemMenu = ({ title, icon }) => {
  return (
    <React.Fragment>
      <div className="icon">{icon}</div>
      <div>{title}</div>
    </React.Fragment>
  );
};
export default ItemMenu;
