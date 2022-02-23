import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';
import { updateUser, monitorAuthState } from '../../store/actions/authAction';

const YourProfile = () => {
  const [formData, setFormData] = useState({
    userName: '',
    avatar: '',
  });
  const currentUser = useSelector(authSelector);
  const dispatch = useDispatch();

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
    await dispatch(updateUser(formData.userName, formData.avatar));
    dispatch(monitorAuthState());
  };

  return (
    <div>
      <h4>Your Profile</h4>
      {!currentUser.displayName && (
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

export default YourProfile;
