import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
 
  const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
            
        </div>
    )


  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJk3MXVw7g43iJyQBJGrd4YwGB8-4-6xtko_WcfD0bg&usqp=CAU&ec=48665701"
          alt="user_background"
        />
        
        <Avatar src={user.photoUrl} className="sidebar_avatar"> {user.email[0]} </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewd You</p>
          <p className="sidebar_statnumber">2,698</p>
        </div>

        <div className="sidebar_stat">
          <p>Views on posts</p>
          <p className="sidebar_statnumber">3,989</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>

        {recentItem("ReactJS")}
        {recentItem("Programming")}
        {recentItem("Software Engineer")}
        {recentItem("UI Designer")}
        {recentItem("Developer")}
        
      </div>
    </div>
  );
}

export default Sidebar;
