import React from 'react';
import { LoginBtn, LogoutBtn, Profile } from '../components';
import { useAuth0 } from '@auth0/auth0-react';

const LoginView = () => {
  const { isLoading, error } = useAuth0();
  return (
    <main className="h-screen p-4 flex flex-col gap-4 *:w-full text-center justify-center items-center">
      <h1>Regístro / Iniciar Sesión</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginBtn />
          <LogoutBtn />
          <Profile />
        </>
      )}
    </main>
  );
};

export default LoginView;
