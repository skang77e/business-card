import React from "react";
import styles from "./landing.module.css";
import { auth } from "../../firebase/firebaseAuth";

const Landing = (props) => {
  const logout = () => {
    auth.signOut();
  };
  return (
    <>
      <h1>Landing page</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Landing;
