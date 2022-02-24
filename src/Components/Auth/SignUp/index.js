import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../store/actions/authAction';

export const SignUp = ({ registerUserInFirebase }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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
    await registerUserInFirebase(email, password);
    navigate('/profile');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Sign Up</h5>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            className='input-form'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            className='input-form'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className='default-btn form-btn'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export const SignUpStore = () => {
  const dispatch = useDispatch();

  const registerUserInFirebase = async (emailRegister, passwordRegister) => {
    await dispatch(registerUser(emailRegister, passwordRegister));
  };

  return <SignUp registerUserInFirebase={registerUserInFirebase} />;
};
