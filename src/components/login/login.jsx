import React from "react";
import styles from "./login.module.css";
import icon from "../../img/card.png";
import {
  auth,
  gitHubprovider,
  googleProvider,
} from "../../firebase/firebaseAuth";

const Login = (props) => {
  const onClick = (event) => {
    const type = event.target.innerHTML;

    type === "Google"
      ? auth.signInWithPopup(googleProvider).catch(alert)
      : auth.signInWithPopup(gitHubprovider).catch(alert);
  };
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <img className={styles.icon} src={icon} alt='card-icon' />
        <h2 className={styles.title}>Business Card Maker</h2>
      </div>
      <div className={styles.body}>
        <h2>Login</h2>
        <button onClick={onClick} className={styles.google}>
          Google
        </button>
        <button onClick={onClick} className={styles.github}>
          GitHub
        </button>
      </div>
      <div className={styles.footer}>
        <p>Code your dream</p>
      </div>
    </section>
  );
};

export default Login;
