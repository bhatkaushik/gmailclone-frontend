import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon fontSize="large" />}
        className="sidebar_compose"
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

      <div className="sidebar-footer">
        <div className="sidebar-footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
          <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
