import React, { useState } from "react";
import styles from "./landing.module.css";
import { useNavigate } from "react-router-dom";
import CardForm from "../card_form/card_form";
import CardList from "../card_list/card_list";
import SubmitForm from "../submit_form/submit_form";

const Landing = ({ loggedIn }) => {
  const [cards, setCards] = useState([]);

  let navigate = useNavigate();
  if (!loggedIn) {
    navigate("/");
  }

  const handleFile = (file) => {
    let btnText;
    file.files.length === 0
      ? (btnText.innerHTML = "No File")
      : (btnText.innerHTML = file.name);
  };

  const handleDelete = (form) => {
    setCards((cards) => cards.filter((card) => card.id !== form.id));
    // setCards((cards) => [...cards, ])
  };

  const handleAdd = (info) => {
    setCards((cards) => [
      ...cards,
      {
        id: Date.now(),
        name: info.name,
        company: info.company,
        colorSelect: info.colorSelect,
        occupation: info.occupation,
        email: info.email,
        quote: info.quote,
        type: "Delete",
      },
    ]);
  };
  return (
    <main className={styles.landing}>
      <div className={styles.card_makers}>
        <h2>Card Maker</h2>
        {cards.map((card) => (
          <CardForm
            key={card.id}
            cardInfo={card}
            onFileChange={handleFile}
            onDelete={handleDelete}
          />
        ))}
        <SubmitForm onAdd={handleAdd} />
      </div>
      <div className={styles.card_preview}>
        <h2>Card Preview</h2>
        {cards.map((card) => (
          <CardList key={card.id} cardInfo={card} />
        ))}
      </div>
    </main>
  );
};

export default Landing;
