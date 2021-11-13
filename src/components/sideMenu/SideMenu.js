import React, { useState } from "react";
import { styles } from "../../styles/sideMenu";
import { FaHeadset } from "react-icons/fa";
import ItemMenu from "./ItemMenu";
import Link from "../custom-react-router/Link";

// Component
const SideMenu = ({ menuItems, onItemClick }) => {
  const classes = styles();

  const [currentItem, setCurrentItem] = useState(0);
  // Render Items
  const renderItems = menuItems.map((item, i) => {
    const className = `${classes.item} ${
      currentItem === i ? classes.activeItem : ""
    }`;

    return (
      <Link
        className={className}
        href={item.path}
        key={item.title}
        onClick={() => {
          setCurrentItem(i);
          onItemClick(item);
        }}
      >
        <ItemMenu title={item.title} icon={item.icon} />
      </Link>
    );
  });

  return (
    <div style={{ width: "24%", padding: "0 5px" }}>
      <div className={classes.logo}>
        <h2>
          <FaHeadset />
        </h2>
        <h4>پارس دیتا</h4>
        <p>پنل کاربری شرکت پارس دیتا</p>
      </div>
      <div>{renderItems}</div>
    </div>
  );
};
export default SideMenu;
