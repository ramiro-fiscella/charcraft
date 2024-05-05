import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "./views";
import { NavBar } from "./components";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
