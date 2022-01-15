import "./app.css";
import Login from "./components/login/login";
import Landing from "./components/landing/landing";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase/firebaseAuth";
// import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  // const [user] = useAuthState(auth);

  return (
    <div className='app'>
      {/* {user ? <Login /> : <Landing />} */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='app' element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
