import { IconButton } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ id, To, subject, description, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

const openMail = () => {
  dispatch(
    selectMail({
      id,
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
        <CheckBoxOutlineBlankIcon />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <div className="emailRow-title">{To}</div>

      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description">- {description}</span>
        </h4>
      </div>

      <p className="emailRow-time">{time}</p>
    </div>
  );
};

export default EmailRow;
