import React from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ authService, loggedIn }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log());
  };
  // let navigate = useNavigate();
  // if (loggedIn) {
  //   navigate("/app");
  // }

  return (
    <div className={styles.body}>
      <h2>Login</h2>
      <button onClick={onLogin} className={styles.google}>
        Google
      </button>
      <button onClick={onLogin} className={styles.github}>
        Github
      </button>
    </div>
  );
};

export default Login;
