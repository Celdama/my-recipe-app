import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../store/actions/authAction';
import { getCurrentUser } from '../../../store/actions/currentUserAction';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
    await dispatch(logInUser(formData.email, formData.password));
    dispatch(getCurrentUser());
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
            value={formData.email}
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
            value={formData.password}
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

export default SignIn;
