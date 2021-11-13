import React from "react";
import { styles } from "../../../styles/itemHomePanel";

const ItemHomePanel = ({
  Icon,
  title,
  content,
  customColor,
  customFontSize = 1.4,
  children,
}) => {
  const classes = styles();

  return (
    <div className={classes.itemContainer}>
      <div className="item">
        <Icon />
        <div>{title}</div>
        <span style={{ color: customColor, fontSize: `${customFontSize}rem` }}>
          {content}
        </span>
      </div>
      {children}
    </div>
  );
};
export default ItemHomePanel;
