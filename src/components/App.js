import React, { useState } from "react";
import Route from "./custom-react-router/Route";
import SideMenu from "./sideMenu/SideMenu";
import Main from "./main/Main";
import ShowHomePanel from "./panels/homePanel/showHomePanel";
import ShowMessagePanel from "./panels/messagePanel/ShowMessagePanel";
import {
  FaHome,
  FaEnvelope,
  FaImage,
  FaFileContract,
  FaUserCog,
} from "react-icons/fa";
import { styles } from "../styles/app";

// Menu Items
const menuItems = [
  { title: "صفحه ی اصلی", icon: <FaHome />, path: "/" },
  { title: "پیام ها", icon: <FaEnvelope />, path: "/messages" },
  { title: "تنضیمات", icon: <FaUserCog />, path: "/setting" },
  { title: "اضافه کردن تصویر به پنل 4", icon: <FaImage />, path: "/panel4" },
  {
    title: "اضافه کردن تصویر به پنل 5",
    icon: <FaFileContract />,
    path: "/panel5",
  },
];

const App = () => {
  const classes = styles();
  const [currentPage, setCurrentPage] = useState(menuItems[0].title);

  const onItemClick = (item) => {
    setCurrentPage(item.title);
  };
  return (
    <div className={classes.container}>
      <SideMenu onItemClick={onItemClick} menuItems={menuItems} />
      <Main currentPage={currentPage}>
        <Route path="/">
          <ShowHomePanel />
        </Route>
        <Route path="/messages">
          <ShowMessagePanel />
        </Route>
      </Main>
    </div>
  );
};

export default App;
