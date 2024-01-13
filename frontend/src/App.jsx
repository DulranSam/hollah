import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./Components/Home";
import NotFound from "./Components/Exceptional/404";

export const Container = createContext();

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    mail: "",
  });

  return (
    <>
      <BrowserRouter>
        <Container.Provider value={(loading, setLoading, user, setUser)}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Container.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
