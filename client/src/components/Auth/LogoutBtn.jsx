import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="bg-transparent hover:bg-emerald-600 text-emerald-400 font-medium hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded"
        onClick={() => logout()}
      >
        Cerrar Sesión
      </button>
    )
  );
};

export default LogoutBtn;
