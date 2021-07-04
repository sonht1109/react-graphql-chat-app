import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import "./common/fonts.css";
import GlobalStyle from "./common/globalStyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Onboarding from "./containers/Onboarding";
import Chats from "./containers/Chats";
import ProtectedRoute from "./lib/ProtectedRoute";
import NewMessage from "./containers/NewMessage";
import AuthProvider from "./lib/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Onboarding} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <ProtectedRoute path="/chats" exact component={Chats} />
          <ProtectedRoute
            path="/chats/new-message"
            exact
            component={NewMessage}
          />
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
    </AuthProvider>
  );
}
