import React from "react";
import "./Header.css";
import Headeroptions from "./Headeroptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch} from "react-redux";
import { logout} from "../features/userSlice";
import { auth} from "./Firebase";

function Header() {

  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png"
          alt="LinkedIn Icon"
        />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header_right">
        <Headeroptions Icon={HomeIcon} title="Home" />
        <Headeroptions Icon={SupervisorAccountIcon} title="My Network" />
        <Headeroptions Icon={BusinessCenterIcon} title="My Jobs" />
        <Headeroptions Icon={ChatIcon} title="Messaging" />
        <Headeroptions Icon={NotificationsIcon} title="Notification" />
        <Headeroptions avatar={true}
         
          title="Me"
          onClick={logOutOfApp} 
          />
       
      </div>
    </div>
  );
}

export default Header;
