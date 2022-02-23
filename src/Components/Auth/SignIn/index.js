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
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Sign In</h5>
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
  );
};

export const SignInStore = () => {
  const dispatch = useDispatch();

  const loginUserInFirebase = (emailLogin, passwordLogin) => {
    dispatch(logInUser(emailLogin, passwordLogin));
  };

  return <SignIn loginUserInFirebase={loginUserInFirebase} />;
};
