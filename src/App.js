import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import "./App.css";
import Header from "./Header";
import Mail from "./Mail";
import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useSelector  } from "react-redux";
// import { openSendMessage, closeSendMessage} from './features/mailSlice'
import {sendMessageIsOpen} from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector((state)=>state.mail.sendMessageIsOpen );
  console.log(sendMessageIsOpen)
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>

            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        { sendMessageIsOpen && <SendMail/> }
        {/* <SendMail /> */}
      </div>
    </Router>
  );
}

export default App;
