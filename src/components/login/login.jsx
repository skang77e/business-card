import React from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

import {
  signInWithGoogle,
  signInWithGitHub,
} from "../../firebase/firebaseAuth";

const Login = ({ loggedIn }) => {
  let navigate = useNavigate();
  if (loggedIn) {
    navigate("/app");
  }

  return (
    <div className={styles.body}>
      <h2>Login</h2>
      <button onClick={signInWithGoogle} className={styles.google}>
        Google
      </button>
      <button onClick={signInWithGitHub} className={styles.github}>
        GitHub
      </button>
    </div>
  );
};

export default Login;
