import { Routes, Route } from 'react-router-dom';
import {
  Home,
  CharactersView,
  CharacterDetails,
  EditCharacter,
  About,
} from './views';
import { NavBar, Footer } from './components';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersView />} />

        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/character/:id/edit" element={<EditCharacter />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <div className="w-full h-32 pointer-events-none bg-gradient-to-t from-zinc-950"></div>
      <Footer />
    </>
  );
}

export default App;
