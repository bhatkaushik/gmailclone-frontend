import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
import React from "react";

import "./App.css";
import Header from "./components/Mailpage/Header/Header";
import Mail from "./components/Mailpage/mail/Mail";
import Sidebar from "./components/Mailpage/sidebar/Sidebar";
import EmailList from "./components/Mailpage/emailList/EmailList";
import SendMail from "./components/Mailpage/sendMail/SendMail";
import { useSelector  } from "react-redux";
// import { openSendMessage, closeSendMessage} from './features/mailSlice'
import {sendMessageIsOpen} from "./features/mailSlice";
import Register from "./components/Auth page/pages/Register";
import Login from "./components/Auth page/pages/Login";


function App() {
  const sendMessageIsOpen = useSelector((state)=>state.mail.sendMessageIsOpen );
  // console.log(sendMessageIsOpen)
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProtectedRoutes>
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

            {sendMessageIsOpen && <SendMail />}
          </div>
          </ProtectedRoutes>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Redirect to="/login" />;
  }
}

export default App;
