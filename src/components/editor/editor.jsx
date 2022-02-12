import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardForm from "../card_form/card_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {Object.keys(cards).map((key) => (
      <CardForm
        key={key}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
