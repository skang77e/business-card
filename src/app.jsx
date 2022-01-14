import "./app.css";
import Login from "./components/login/login";
import Landing from "./components/landing/landing";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='app' element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
