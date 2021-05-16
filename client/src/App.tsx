import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import "./common/fonts.css";
import GlobalStyle from "./common/globalStyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./containers/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
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
