import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../store/actions/authAction';

export const SignIn = ({ loginUserInFirebase }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8é'>
      <div className='min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label-form' htmlFor='email'>
              Email
            </label>
            <input
              className='input-form'
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
              className='input-form'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Login</button>
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
