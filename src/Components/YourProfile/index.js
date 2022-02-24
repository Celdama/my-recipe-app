import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';
import { updateUser, monitorAuthState } from '../../store/actions/authAction';

export const YourProfile = ({ authUser, updateUserInFirebase }) => {
  const [formData, setFormData] = useState({
    userName: '',
    avatar: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUserInFirebase(formData.userName, formData.avatar);
  };

  return (
    <div>
      <h4>Your Profile</h4>
      {!authUser.displayName && (
        <>
          <p>Add an username and an image at your profile !</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='userName'>User Name</label>
              <input
                onChange={handleChange}
                type='text'
                name='userName'
                className='input-form'
              />
            </div>
            <div>
              <label htmlFor='avatar'>Avatar URL</label>
              <input
                onChange={handleChange}
                type='text'
                name='avatar'
                className='input-form'
              />
            </div>
            <div>
              <button className='default-btn form-btn'>Update profil</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export const YourProfileStore = () => {
  const authUser = useSelector(authSelector);
  const dispatch = useDispatch();

  const updateUserInFirebase = async (userName, avatar) => {
    await dispatch(updateUser(userName, avatar));
    dispatch(monitorAuthState());
  };

  return (
    <YourProfile
      authUser={authUser}
      updateUserInFirebase={updateUserInFirebase}
    />
  );
};
