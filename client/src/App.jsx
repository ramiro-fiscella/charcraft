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

import { Provider, ErrorBoundary } from '@rollbar/react'; // <-- Provider imports 'rollbar' for us

const api_url = import.meta.env.VITE_API_URL;

// same configuration you would create for the Rollbar.js SDK
const rollbarConfig = {
  accessToken: 'b94e023d12054addab8451d413e2c224',
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: 'production',
  server: {
    root: api_url,
    branch: 'main',
  },
  code_version: '0.13.7',
  payload: {
    person: {
      email: 'ramirofiscella@gmail.com',
      username: 'ramirofiscella',
    },
  },
};

axios.defaults.baseURL = api_url;

import './App.css';

function App() {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
