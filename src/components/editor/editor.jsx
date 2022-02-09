import React from "react";
import CardForm from "../card_form/card_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {cards.map((card) => (
      <CardForm card={card} />
    ))}
  </section>
);

export default Editor;
