import React from "react";
import image from "../../img/card.png";
import styles from "./card.module.css";

const Card = ({ cardInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.colorSelect}>
        <img src={image} alt='headshot' className={styles.headshot} />
        <div className={styles.description}>
          <h3 className='name'>{cardInfo.name}</h3>
          <p className='company'>{cardInfo.company}</p>
          <hr />
          <p className='job-title'>{cardInfo.occupation}</p>
          <p className='email'>{cardInfo.email}</p>
          <p className='meesage'>{cardInfo.quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
