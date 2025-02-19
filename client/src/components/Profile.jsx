import React from 'react';

const Profile = () => {
  const user = {
    name: 'Usuario',
    picture: 'https://via.placeholder.com/50',
  };

  return (
    <div>
      <img
        className="border border-yellow-600 rounded-full w-[50px] h-[50px]"
        src={user.picture}
        alt={user.name}
      />
    </div>
  );
};

export default Profile;
