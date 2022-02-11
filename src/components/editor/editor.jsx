import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardForm from "../card_form/card_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {cards.map((card) => (
      <CardForm key={card.id} card={card} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
