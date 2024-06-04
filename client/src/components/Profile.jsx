import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await axios.post('/users', {
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
      <>
        <img
          className="border border-yellow-600 rounded-full w-[50px] h-[50px] p-0 m-0"
          src={user.picture}
          alt={user.name}
        />
      </>
    )
  );
};

export default Profile;
