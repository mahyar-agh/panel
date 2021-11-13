import React from "react";
import Search from "./Search";
import ShowUsers from "./ShowUsers";

const ShowMessagePanel = () => {
  return (
    <div>
      <Search placeholder="جستجو در درخواست ها،ایمیل ها..." />
      <ShowUsers />
    </div>
  );
};

export default ShowMessagePanel;
