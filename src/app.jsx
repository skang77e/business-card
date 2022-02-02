import styles from "./app.module.css";
import icon from "./img/card.png";

import Login from "./components/login/login";
import Landing from "./components/landing/landing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from "./firebase/firebaseAuth";
import React, { useEffect, useState } from "react";

const App = ({ authService }) => {
  // const [user, setUser] = useState();
  // let navigate = useNavigate();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }, [user]);

  return (
    // <div className='app'>
    //   <div className={styles.container}>
    //     <div className={user ? styles.landing : styles.login}>
    //       <header className={styles.header}>
    //         <img className={styles.icon} src={icon} alt='card-icon' />
    //         <h2 className={styles.title}>Business Card Maker</h2>
    //         <button
    //           className={user ? styles.logout : styles.hidden}
    //           onClick={() => {
    //             auth.signOut();
    //             navigate("/");
    //           }}
    //         >
    //           Logout
    //         </button>
    //       </header>

    //       <Routes>
    //         <Route
    //           path='/'
    //           element={<Login authService={authService} loggedIn={user} />}
    //         />
    //         <Route path='app' element={<Landing loggedIn={user} />} />
    //       </Routes>
    //       <footer className={styles.footer}>
    //         <p>Code your dream</p>
    //       </footer>
    //     </div>
    //   </div>
    // </div>
    <Login authService={authService} />
  );
};

export default App;
