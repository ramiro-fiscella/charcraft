import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="w-full flex flex-col items-end gap-2">
        <img className="rounded-full w-12" src={user.picture} alt={user.name} />
        <h2 className="text-sm">{user.name}</h2>
      </div>
    )
  );
};

export default Profile;
