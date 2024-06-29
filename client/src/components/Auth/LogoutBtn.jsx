import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <a
        className="hidden lg:block  py-[.875rem]  px-4 text-center leading-3 bg-zinc-900/70 to-zinc-800/70 text-white tracking-wider rounded-md uppercase hover:bg-zinc-800/70"
        onMouseDown={() => logout()}
      >
        Cerrar Sesión
      </a>
    )
  );
};

export default LogoutBtn;
