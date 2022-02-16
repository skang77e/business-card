import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService, name, onFileChange }) => {

  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const image = await uploadService.onFileUpload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: image.original_filename,
      url: image.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />
      {!loading && (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
        {name || "No file"}
      </button>

      )
      }
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
