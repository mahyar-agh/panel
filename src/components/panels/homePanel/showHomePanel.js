import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editCurrentEmail } from "../../../redux/slices/shareListingSlice";
import ItemHomePanel from "./ItemHomePanel";
import Button from "../../button/Button";
import { FaUsers, FaEnvelope, FaMailBulk, FaPencilAlt } from "react-icons/fa";

const ShowHomePanel = () => {
  const shareList = useSelector((state) => state.shareList);
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [editEmail, setEditEmail] = useState("");

  const onEditClick = () => setShowEdit(true);
  const onCancelClick = (e) => {
    e.preventDefault();
    setShowEdit(false);
  };
  const onSubmitClick = (e) => {
    e.preventDefault();
    if (!editEmail) return;
    dispatch(editCurrentEmail(editEmail));
    setEditEmail("");
    setShowEdit(false);
  };

  const renderEdit = () => {
    if (showEdit) {
      return (
        <React.Fragment>
          <div onClick={onEditClick} className="edit">
            <FaPencilAlt />
            <span> ویرایش</span>
          </div>

          <form>
            <input
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              type="email"
              placeholder="ایمیل جدید خود را وارد کنید"
            />
            <div className="buttonContainer">
              <Button onClick={onCancelClick} color="#FD3D39">
                لغو
              </Button>
              <Button onClick={onSubmitClick}>ثبت</Button>
            </div>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <div onClick={onEditClick} className="edit">
          <FaPencilAlt />
          ویرایش
        </div>
      );
    }
  };
  return (
    <div>
      <ItemHomePanel
        Icon={FaEnvelope}
        title="تعداد درخواست ها:"
        content={shareList.requests}
        customColor="#019CD5"
        customFontSize="2.5"
      />

      <ItemHomePanel
        Icon={FaUsers}
        title="تعداد بازدید های امروز:"
        content={shareList.visitsToday}
        customColor="#FD3D39"
        customFontSize="2.5"
      />

      <ItemHomePanel
        Icon={FaMailBulk}
        title="ایمیل شما:"
        content={shareList.currentEmail}
        customColor="#000"
        extraContent="ویرایش"
        onEditClick={onEditClick}
      >
        {renderEdit()}
      </ItemHomePanel>
    </div>
  );
};
export default ShowHomePanel;
