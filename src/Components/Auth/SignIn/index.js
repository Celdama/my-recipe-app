import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../store/actions/authAction';
import { LockClosedIcon } from '@heroicons/react/solid';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { alertSelector } from '../../../store/selectors/alertSelector';
import { useSelector } from 'react-redux';
import { resetAlert } from '../../../store/actions/alertAction';
import { Wrapper, Content, Title, Header } from './signin.tw';
import PropTypes from 'prop-types';

export const SignIn = ({ loginUserInFirebase, alert }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const divLoginPasswordError = useRef(null);
  const divLoginEmailError = useRef(null);

  useEffect(() => {
    divLoginPasswordError.current.textContent = '';
    divLoginEmailError.current.textContent = '';

    if (alert.code) {
      if (alert.code === 'auth/wrong-password') {
        divLoginPasswordError.current.textContent = 'wrong password try again';
      } else if (alert.code === 'auth/user-not-found') {
        divLoginEmailError.current.textContent =
          'email not found, try with another email or create an account';
      } else {
        divLoginPasswordError.current.textContent = `Error: ${alert.code}`;
      }
    }
  }, [alert]);

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
    <Wrapper>
      <Content>
        <Header>
          <ClipboardListIcon className='h-12 text-indigo-600' />
          <Title>Sign in to your account</Title>
        </Header>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='input-wrapper'>
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
            <div className='form-alert-error' ref={divLoginEmailError}></div>
          </div>
          <div className='input-wrapper'>
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
            <div className='form-alert-error' ref={divLoginPasswordError}></div>
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
          <button className='default-btn blue-btn relative'>
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              <LockClosedIcon
                className='h-5 w-5 text-indigo-500'
                aria-hidden='true'
              />
            </span>
            Sign in
          </button>
        </form>
      </Content>
    </Wrapper>
  );
};

SignIn.propTypes = {
  loginUserInFirebase: PropTypes.func,
  alert: PropTypes.object,
};

export const SignInStore = () => {
  const dispatch = useDispatch();
  const alert = useSelector(alertSelector);

  const loginUserInFirebase = useCallback(
    (emailLogin, passwordLogin) => {
      dispatch(logInUser(emailLogin, passwordLogin));
      dispatch(resetAlert());
    },
    [dispatch]
  );

  return <SignIn loginUserInFirebase={loginUserInFirebase} alert={alert} />;
};
