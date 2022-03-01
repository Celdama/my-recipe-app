import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateUser,
  registerUser,
  monitorAuthState,
} from '../../../store/actions/authAction';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { addUser } from '../../../store/actions/usersAction';
import { nanoid } from 'nanoid';
import { storage } from '../../../config/fbConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const SignUp = ({
  registerUserInFirebase,
  updateUserInFirebase,
  addUserInFirestore,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const [image, setImage] = useState(null);

  const { email, password, userName } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `${formData.userName}-avatar`);

    try {
      await registerUserInFirebase(email, password);
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      updateUserInFirebase(formData.userName, url);
      addUserInFirestore({
        userName: formData.userName,
        email: formData.email,
        avatar: url,
        uid: nanoid(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='min-h-full md:w-2/3 flex flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div>
          <ClipboardListIcon className='h-12 text-indigo-600 mx-auto' />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Create an account and add your first recipe
          </h2>
        </div>

        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              className='label-form flex justify-between'
              htmlFor='userName'
            >
              Username
              <span className='text-sm italic'>* required</span>
            </label>
            <input
              className='input-form bg-white'
              type='text'
              name='userName'
              value={userName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='label-form flex justify-between' htmlFor='email'>
              Email
              <span className='text-sm italic'>* required</span>
            </label>
            <input
              className='input-form bg-white'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              className='label-form flex justify-between'
              htmlFor='password'
            >
              Password
              <span className='text-sm italic'>* required</span>
            </label>
            <input
              className='input-form bg-white'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='label-form flex justify-between' htmlFor='avatar'>
              Avatar
              <span className='text-sm italic'>* required</span>
            </label>
            <input
              onChange={handleImageChange}
              type='file'
              name='avatar'
              className='input-form bg-white'
              required
            />
          </div>
          <div>
            <div className='text-sm'>
              <Link
                to={'/signin'}
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Already have an account ?
              </Link>
            </div>
          </div>
          <div>
            <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const SignUpStore = () => {
  const dispatch = useDispatch();

  const registerUserInFirebase = async (emailRegister, passwordRegister) => {
    await dispatch(registerUser(emailRegister, passwordRegister));
  };

  const updateUserInFirebase = async (userName, avatar) => {
    await dispatch(updateUser(userName, avatar));
    dispatch(monitorAuthState());
  };

  const addUserInFirestore = async (data) => {
    await dispatch(addUser({ ...data }));
  };

  return (
    <SignUp
      registerUserInFirebase={registerUserInFirebase}
      updateUserInFirebase={updateUserInFirebase}
      addUserInFirestore={addUserInFirestore}
    />
  );
};
