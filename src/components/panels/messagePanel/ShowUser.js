import React from "react";
import { FaTrashAlt, FaGoogle } from "react-icons/fa";

const ShowUser = ({ user, onTrashClick }) => {
  const { username, phone, description, time } = user;
  return (
    <tr>
      <td style={{ width: "30px" }}>
        <input type="checkbox" />
      </td>
      <td>{username}</td>
      <td>{phone}</td>
      <td colSpan="2">{user.email}</td>
      <td>21:00</td>
      <td>
        <i style={{ color: "#FD3D39" }}>
          <FaGoogle />
        </i>
        <i onClick={onTrashClick}>
          <FaTrashAlt />
        </i>
      </td>
    </tr>
  );
};
export default ShowUser;
