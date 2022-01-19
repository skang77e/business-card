import React from "react";
import styles from "./landing.module.css";
import { auth } from "../../firebase/firebaseAuth";

import { useNavigate } from "react-router-dom";

const Landing = ({ loggedIn }) => {
  let navigate = useNavigate();
  if (!loggedIn) {
    navigate("/");
  }

  return (
    <main className={styles.landing}>
      <div className={styles.card_makers}>
        <h2>Card Maker</h2>
      </div>
      <div className={styles.card_preview}>
        <h2>Card Preview</h2>
      </div>
    </main>
  );
};

export default Landing;
