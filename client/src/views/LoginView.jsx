import React from 'react';
import { LoginBtn, LogoutBtn, Profile } from '../components';

const LoginView = () => {
  return (
    <main className="h-screen max-w-96 mx-auto p-4 flex flex-col gap-4 w-full text-center justify-center items-center">
      <h1>Iniciar sesión</h1>
      <p>El sistema de autenticación se implementará pronto.</p>
      {/* Placeholders para botones y perfil */}
      <LoginBtn />
      <LogoutBtn />
      <Profile />
    </main>
  );
};

export default LoginView;
