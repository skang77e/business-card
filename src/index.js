import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./firebase/auth_service";

const authService = new AuthService();
ReactDOM.render(
  <BrowserRouter>
    <App authService={authService} />
  </BrowserRouter>,
  document.getElementById("root")
);
