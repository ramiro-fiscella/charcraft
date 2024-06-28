import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="hidden py-2 px-4 bg-gradient-to-t from-zinc-900/70 to-zinc-800/70 text-white tracking-wider border border-white/80 rounded-md uppercase"
        onMouseDown={() => logout()}
      >
        Cerrar Sesión
      </button>
    )
  );
};

export default LogoutBtn;
