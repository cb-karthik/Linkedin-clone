import React from "react";
import "./Headeroptions.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Headeroptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headeroption">
      {Icon && <Icon className="headeroption_icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headeroption_icon">
          {user?.email[0]}
        </Avatar>
      )}

      <h3 className="headeroption_title">{title}</h3>
    </div>
  );
}

export default Headeroptions;
