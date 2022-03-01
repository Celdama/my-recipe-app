import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';

export const YourProfile = ({ authUser }) => {
  return (
    <div>
      <h1>Your Profile</h1>
      <h4>{authUser.displayName}</h4>
      <img src={authUser.photoURL} className='h-24 w-24' alt='user avatar' />
    </div>
  );
};

export const YourProfileStore = () => {
  const authUser = useSelector(authSelector);

  return <YourProfile authUser={authUser} />;
};
