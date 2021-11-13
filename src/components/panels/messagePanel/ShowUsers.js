import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../../../redux/slices/usersSlice";
import ShowUser from "./ShowUser";
import { styles } from "../../../styles/showUsers";

const ShowUsers = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderItems = users.map((user) => {
    return (
      <ShowUser
        onTrashClick={() => dispatch(deleteUser(user.id))}
        key={user.id}
        user={user}
      />
    );
  });

  return (
    <div className={classes.usersContainer}>
      <table cellPadding="0" cellSpacing="0" border="0">
        <thead>
          <tr>
            <th style={{ width: "30px" }}></th>
            <th>نام کاربر</th>
            <th>شماره تماس</th>
            <th colSpan="2">متن</th>
            <th>زمان</th>
            <th></th>
          </tr>
        </thead>
      </table>
      <div className="tbodyContainer">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>{renderItems}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUsers;
