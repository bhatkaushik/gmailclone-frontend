import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import GmailLogo from "./Assets:imgs/gmail-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import IconButton from '@mui/material/IconButton';
// // or
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
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
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
