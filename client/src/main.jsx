import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-m84y6use4udzz5ud.us.auth0.com"
      clientId="Ipij3vAyO4HkNpFTvlhObpKG31kGT40z"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://dev-m84y6use4udzz5ud.us.auth0.com/api/v2/',
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
