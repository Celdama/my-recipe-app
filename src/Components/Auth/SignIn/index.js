import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../store/actions/authAction';
import { LockClosedIcon } from '@heroicons/react/solid';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export const SignIn = ({ loginUserInFirebase }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const { email, password } = formData;

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
    await loginUserInFirebase(email, password);
  };
  return (
    <div className='min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='min-h-full flex  md:w-2/3 flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div>
          <ClipboardListIcon className='h-12 text-indigo-600 mx-auto' />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div>
            <label className='label-form' htmlFor='email'>
              Email
            </label>
            <input
              className='input-form bg-white'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='label-form' htmlFor='password'>
              Password
            </label>
            <input
              className='input-form bg-white'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className='text-sm'>
              <Link
                to={'/signup'}
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                No account yet ?
              </Link>
            </div>
          </div>
          <div>
            <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <LockClosedIcon
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                  aria-hidden='true'
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const SignInStore = () => {
  const dispatch = useDispatch();

  const loginUserInFirebase = (emailLogin, passwordLogin) => {
    dispatch(logInUser(emailLogin, passwordLogin));
  };

  return <SignIn loginUserInFirebase={loginUserInFirebase} />;
};
