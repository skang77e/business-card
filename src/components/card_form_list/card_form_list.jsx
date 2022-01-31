import React from "react";
import CardForm from "../card_form/card_form";

const CardFormList = ({ cardInfo, onFileChange, onDelete, onAdd }) => {
  return (
    <>
      <CardForm
        cardInfo={cardInfo}
        onFileChange={onFileChange}
        onAdd={onAdd}
        onDelete={onDelete}
      />
    </>
  );
};

export default CardFormList;
