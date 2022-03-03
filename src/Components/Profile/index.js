import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';
import PropTypes from 'prop-types';

export const Profile = ({ authUser }) => {
  const { displayName, photoURL } = authUser;
  return (
    <div>
      <h1>Your Profile</h1>
      <h4>{displayName}</h4>
      <img src={photoURL} className='h-24 w-24' alt='user avatar' />
    </div>
  );
};

Profile.propTypes = {
  authUser: PropTypes.object,
};

export const ProfileStore = () => {
  const authUser = useSelector(authSelector);

  return <Profile authUser={authUser} />;
};
