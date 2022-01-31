import React, { useRef, useState } from "react";
import styles from "./card_form.module.css";

const CardForm = ({ file, onFileChange, onDelete, onAdd, cardInfo }) => {
  const [inputs, setInputs] = useState(cardInfo);

  const nameRef = useRef();
  const companyRef = useRef();
  const selectRef = useRef();
  const occupationRef = useRef();
  const emailRef = useRef();
  const quoteRef = useRef();
  const fileRef = useRef();

  const handleAdd = () => {
    onAdd({
      name: nameRef.current.value,
      company: companyRef.current.value,
      colorSelect: selectRef.current.value,
      occupation: occupationRef.current.value,
      email: emailRef.current.value,
      quote: quoteRef.current.value,
      type: "Delete",
    });

    nameRef.current.value = "";
    companyRef.current.value = "";
    selectRef.current.value = "light";
    occupationRef.current.value = "";
    emailRef.current.value = "";
    quoteRef.current.value = "";
  };

  const onInputChange = (event) => {
    setInputs(() => [{ value: event.target.value }]);
  };

  const handleDelete = () => {
    onDelete(cardInfo);
  };

  const handleFileChange = () => {
    onFileChange(file);
  };

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <input
          type='text'
          id='name'
          name='name'
          className={styles.name}
          placeholder='Name'
          value={inputs.name}
          onChange={onInputChange}
        />
        <input
          type='text'
          id='company'
          name='company'
          className={styles.company}
          placeholder='Company'
          value={inputs.company}
          onChange={onInputChange}
        />
        <select
          name='type'
          id='color-select'
          className={styles.type}
          value={inputs.colorSelect}
          onChange={onInputChange}
        >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          <option value='colorful'>Colorful</option>
        </select>
      </div>
      <div className={styles.row}>
        <input
          type='text'
          id='occupation'
          name='occupation'
          className={styles.occupation}
          placeholder='Title'
          value={inputs.occupation}
          onChange={onInputChange}
        />
        <input
          type='email'
          id='email'
          name='email'
          className={styles.email}
          placeholder='email'
          value={inputs.email}
          onChange={onInputChange}
        />
      </div>
      <div className={styles.row}>
        <textarea
          rows='4'
          cols='50'
          className={styles.quote}
          placeholder='message'
          value={inputs.quote}
          onChange={onInputChange}
        ></textarea>
      </div>
      <div className={styles.row}>
        <input onChange={onFileChange} type='file' id='file-btn' hidden />
        <label htmlFor='file-btn'>No File</label>

        <input
          type='button'
          className={styles.submit}
          onClick={handleDelete}
          value='Delete'
        />
      </div>
    </form>
  );
};

export default CardForm;
