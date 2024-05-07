import { Routes, Route } from "react-router-dom";
import { Home, CharactersView, CharacterDetails, About } from "./views";
import { NavBar, Footer } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersView />} />
        {/* Utiliza enrutamiento dinámico para pasar el parámetro id a CharacterDetails */}
        <Route path="/character/:id" element={<CharacterDetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
