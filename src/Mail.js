import {
  ArrowBack,
  CheckCircleOutline,
  Delete,
  Email,
  ErrorOutline,
  ExitToApp,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import LabelImportant from "@mui/icons-material/LabelImportant";
import MoreVert from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Mail.css";

const Mail = () => {
const selectedMail = useSelector((state)=>state.mail.selectedMail);


  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mailtools-left">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <ErrorOutline />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircleOutline />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mailtools-right">
            <IconButton>
                <UnfoldMore />
            </IconButton>
            <IconButton>
                <Print />
            </IconButton>
            <IconButton>
                <ExitToApp />
            </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportant className="mail-important" />
            <p>{selectedMail?.To}</p>
            <p className="mail-time">{selectedMail?.time}</p>
        </div>

        <div className="mail-message">
           <p> {selectedMail?.description}</p>
        </div> 
      </div>
    </div>
  );
};

export default Mail;
