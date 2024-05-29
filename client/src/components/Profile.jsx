import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await axios.post('http://localhost:5000/users', {
          auth0_id: user.sub,
          username: user.name,
        });

        if (response.status === 201) {
          console.log('User created or already exists');
        } else {
          console.error('Failed to create user');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };

    if (isAuthenticated) {
      createUser();
    }
  }, [isAuthenticated, user]);

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
