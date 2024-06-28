import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="hidden lg:block py-2 px-4 bg-zinc-900/70 to-zinc-800/70 text-white tracking-wider rounded-md uppercase hover:bg-zinc-800/70"
        onMouseDown={() => logout()}
      >
        Cerrar Sesión
      </button>
    )
  );
};

export default LogoutBtn;
