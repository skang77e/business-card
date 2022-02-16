import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_form.module.css";

const CardForm = ({ card, updateCard, deleteCard, FileInput }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, theme, title, email, message, fileName } =
    card;

  const onSubmit = () => {
    deleteCard(card);
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        ref={nameRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        ref={companyRef}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name='theme'
        onChange={onChange}
        value={theme}
        ref={themeRef}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        value={title}
        ref={titleRef}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        ref={emailRef}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
        ref={messageRef}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardForm;
