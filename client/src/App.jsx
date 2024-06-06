import { Routes, Route } from 'react-router-dom';
import {
  Home,
  CharactersView,
  CharacterDetails,
  EditView,
  LoginView,
  About,
  ProfileView,
} from './views';
import { NavBar, Footer } from './components';

import axios from 'axios';

axios.defaults.baseURL =
  'postgres://default:h0umCvMfE8aF@ep-broad-bread-a4i687er-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/profile" element={<ProfileView />} />

        <Route path="/characters" element={<CharactersView />} />

        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/character/:id/edit" element={<EditView />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <div className="w-full h-32 pointer-events-none bg-gradient-to-t from-zinc-950"></div>
      <Footer />
    </>
  );
}

export default App;
