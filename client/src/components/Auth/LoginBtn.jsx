import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onMouseDown={() => loginWithRedirect()}>Ingresar</button>;
};

export default LoginBtn;
