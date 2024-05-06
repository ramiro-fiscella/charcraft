import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./views"; // Importa las vistas adicionales
import { NavBar, Footer } from "./components";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
