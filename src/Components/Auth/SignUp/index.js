import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUser,
  resetCurrentUser,
} from '../../../store/actions/currentUserAction';
import { registerUser, signOutUser } from '../../../store/actions/authAction';
import { currentUserSelector } from '../../../store/selectors/currentUserSelector';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const dispatch = useDispatch();

  const current = useSelector(currentUserSelector);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogout = () => {
    dispatch(signOutUser());
    dispatch(resetCurrentUser());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(formData.email, formData.password));
    dispatch(getCurrentUser());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Sign Up</h5>
        {/* <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            className='input-form'
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            className='input-form'
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div> */}
        <div>
          <label htmlFor='email'>Email</label>
          <input
            className='input-form'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            className='input-form'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className='default-btn form-btn'>Sign Up</button>
        </div>
      </form>

      <h1>User logged in</h1>
      <p>{current?.email}</p>
      <button onClick={handleLogout} className='default-btn form-btn'>
        logoout
      </button>
    </div>
  );
};

export default SignUp;
