import React from 'react';
import { LoginBtn, LogoutBtn, Profile } from '../components';
import { useAuth0 } from '@auth0/auth0-react';

const LoginView = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();
  return (
    <main className="h-screen w-96 mx-auto p-4 flex flex-col gap-4 *:w-full text-center justify-center items-center">
      {isAuthenticated ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="font-light text-yellow-500">Hola!</p>
          <Profile />
        </div>
      ) : (
        <p className="font-light text-yellow-500">
          Por favor, inicia sesión para ver tu perfil.
        </p>
      )}
      <h1>Ingresar</h1>
      <p className="font-normal text-xl text-neutral-400">
        Si no tienens cuenta puedes registrarte en unos pocos clicks!
      </p>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginBtn />
          <LogoutBtn />
        </>
      )}
    </main>
  );
};

export default LoginView;
