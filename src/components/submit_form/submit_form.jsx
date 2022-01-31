import React, { useRef } from "react";
import styles from "./submit_form.module.css";

const SubmitForm = ({ onAdd }) => {
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

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <input
          ref={nameRef}
          type='text'
          id='name'
          name='name'
          className={styles.name}
          placeholder='Name'
        />
        <input
          ref={companyRef}
          type='text'
          id='company'
          name='company'
          className={styles.company}
          placeholder='Company'
        />
        <select
          ref={selectRef}
          name='type'
          id='color-select'
          className={styles.type}
        >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          <option value='colorful'>Colorful</option>
        </select>
      </div>
      <div className={styles.row}>
        <input
          ref={occupationRef}
          type='text'
          id='occupation'
          name='occupation'
          className={styles.occupation}
          placeholder='Title'
        />
        <input
          ref={emailRef}
          type='email'
          id='email'
          name='email'
          className={styles.email}
          placeholder='email'
        />
      </div>
      <div className={styles.row}>
        <textarea
          ref={quoteRef}
          rows='4'
          cols='50'
          className={styles.quote}
          placeholder='message'
        ></textarea>
      </div>
      <div className={styles.row}>
        <input
          ref={fileRef}
          //   onChange={onFileChange}
          type='file'
          id='file-btn'
          hidden
        />
        <label htmlFor='file-btn'>No File</label>

        <input
          type='button'
          className={styles.submit}
          onClick={handleAdd}
          value='Add'
        />
      </div>
    </form>
  );
};

export default SubmitForm;
