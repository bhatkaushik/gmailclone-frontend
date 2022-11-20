import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "../sidebarOption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../../features/mailSlice";
const Sidebar = () => {
const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={()=>dispatch(openSendMessage())}
        
      >
        compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected="true"
      />
      <SidebarOption
        Icon={StarIcon}
        title="Starred"
        number={54}
        selected="true"
      />
      <SidebarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={54}
        selected="true"
      />
      <SidebarOption
        Icon={LabelImportantIcon}
        title="Important"
        number={54}
        selected="true"
      />
      <SidebarOption
        Icon={NearMeIcon}
        title="Sent"
        number={54}
        selected="true"
      />
      <SidebarOption
        Icon={NoteIcon}
        title="Draft"
        number={54}
        selected="true"
      />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title="More"
        number={54}
        selected="true"
      />

     
    </div>
  );
};

export default Sidebar;
