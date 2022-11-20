import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import GmailLogo from "../../../Assets:imgs/gmail-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { message } from "antd";
import { useHistory } from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
// // or
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate.push("/login");
  };

  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={GmailLogo} alt="" />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>

      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <button className="btn btn-sm btn-primary" onClick={logoutHandler}>
            Logout
          </button>
        </IconButton>
        <IconButton className="head-user-disp">
          <Avatar className="head-avatar" />
          <p className="header-username">{loginUser && loginUser.name}</p>{" "}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
