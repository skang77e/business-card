import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Jon",
      company: "Google",
      theme: "light",
      title: "Senior Web Engineer",
      email: "skang77e@gmail.com",
      message: "Hello World",
      fileName: "jon",
      fileURL: null,
    },
    {
      id: "2",
      name: "Jon2",
      company: "Google",
      theme: "dark",
      title: "Senior Web Engineer",
      email: "skang77e@gmail.com",
      message: "Hello World",
      fileName: "jon",
      fileURL: null,
    },
    {
      id: "3",
      name: "Jon3",
      company: "Google",
      theme: "colorful",
      title: "Senior Web Engineer",
      email: "skang77e@gmail.com",
      message: "Hello World",
      fileName: "jon",
      fileURL: null,
    },
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>

      <Footer />
    </section>
  );
};

export default Maker;
