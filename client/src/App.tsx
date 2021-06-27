import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import "./common/fonts.css";
import GlobalStyle from "./common/globalStyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./containers/Home";
import Chats from "./containers/Chats";
import ProtectedRoute from "./lib/ProtectedRoute";
import NewMessageSearching from "./containers/NewMessageSearching";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <ProtectedRoute path="/chats" exact component={Chats} />
        <ProtectedRoute path="/new-message" exact component={NewMessageSearching} />
      </Switch>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        draggable
        pauseOnHover
        bodyClassName="toast-body"
      />
    </BrowserRouter>
  );
}
