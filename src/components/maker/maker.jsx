import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  let navigate = useNavigate();
  const { state } = useLocation();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  console.log(state);
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      hello
      <Footer />
    </section>
  );
};

export default Maker;
