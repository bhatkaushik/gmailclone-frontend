import { IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useDispatch } from "react-redux";
import { selectMail } from "../../../features/mailSlice";


const EmailRow = ({key ,To,subject,description,time}) => {
  const history = useHistory();
  const dispatch = useDispatch();

const openMail = () => {
  dispatch(
    selectMail({
      key,
      To,
      subject,
      description,
      time,
    })
  );
  history.push("/mail")
};
 
  return (
    <div onClick={()=>openMail()} className="emailRow">
      <div className="emailRow-options">
      <IconButton>
        <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <div className="emailRow-title">{To}</div>

      <div className="emailRow-message">
    
          {subject}{" "}
          <span className="emailRow-description">- {description}</span>
        
      </div>

      <p className="emailRow-time">{time}</p>
    </div>
  );
};

export default EmailRow;
