import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";


function App() {

  const [users, setusers] = useState([
    {
      username: "Gowtham",
      password: "ganeshgowtham03"
    }
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setusers={setusers} />} />
        <Route path="/signup" element={<Signup users={users} setusers={setusers} />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
