import React from "react";
import styles from "./login.module.css";
import icon from "../../img/card.png";

const Login = (props) => (
  <section className={styles.container}>
    <div className={styles.header}>
      <img className={styles.icon} src={icon} alt='card-icon' />
      <h2 className={styles.title}>Business Card Maker</h2>
    </div>
    <div className={styles.body}>
      <h2>Login</h2>
      <button className={styles.google}>Google</button>
      <button className={styles.github}>GitHub</button>
    </div>
    <div className={styles.footer}>
      <p>Code your dream</p>
    </div>
  </section>
);

export default Login;
