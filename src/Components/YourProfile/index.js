import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';
import { updateUser, monitorAuthState } from '../../store/actions/authAction';
import { addUser } from '../../store/actions/usersAction';
import { storage } from '../../config/fbConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const YourProfile = ({
  authUser,
  updateUserInFirebase,
  addUserInFirestore,
}) => {
  const [formData, setFormData] = useState({
    userName: '',
    avatar: '',
  });

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

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
    const imageRef = ref(storage, `${authUser.uid}-avatar`);

    try {
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      setUrl(url);
      updateUserInFirebase(formData.userName, url);
      addUserInFirestore({
        userName: formData.userName,
        email: authUser.email,
        uid: authUser.uid,
        avatar: url,
      });
    } catch (err) {
      console.log(err.message);
    }
    setImage(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <h4>Your Profile</h4>
      {!authUser.displayName ? (
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
              <label htmlFor='avatar'>Avatar</label>
              <input
                onChange={handleImageChange}
                type='file'
                name='avatar'
                className='input-form'
              />
            </div>
            <div>
              <button className='default-btn form-btn'>Update profil</button>
            </div>
          </form>
        </>
      ) : (
        <>
          <h1>{authUser.displayName}</h1>
          <img
            src={authUser.photoURL}
            className='h-24 w-24'
            alt='user avatar'
          />
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

  const addUserInFirestore = async (data) => {
    await dispatch(addUser({ ...data }));
  };

  return (
    <YourProfile
      authUser={authUser}
      updateUserInFirebase={updateUserInFirebase}
      addUserInFirestore={addUserInFirestore}
    />
  );
};
