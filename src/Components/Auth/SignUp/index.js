import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateUser,
  registerUser,
  monitorAuthState,
} from '../../../store/actions/authAction';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { addUser } from '../../../store/actions/usersAction';
import { storage } from '../../../config/fbConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { alertSelector } from '../../../store/selectors/alertSelector';
import { useSelector } from 'react-redux';
import { resetAlert } from '../../../store/actions/alertAction';
import { Wrapper, Content, Header, Title } from './signup.tw';
import { authSelector } from '../../../store/selectors/authSelector';

export const SignUp = ({
  registerUserInFirebase,
  updateUserInFirebase,
  addUserInFirestore,
  alert,
  authUser,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  });
  const { email, password, userName } = formData;

  const divSignupEmailError = useRef(null);

  useEffect(() => {
    divSignupEmailError.current.textContent = '';

    if (alert.code && alert.code === 'auth/email-already-in-use') {
      divSignupEmailError.current.textContent =
        'email already use, please choose an other email';
    }
  }, [alert]);

  const [image, setImage] = useState(null);

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
    const imageRef = ref(storage, `${userName}-avatar`);

    try {
      await registerUserInFirebase(email, password);
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      updateUserInFirebase(userName, url);
      addUserInFirestore({
        userName,
        avatar: url,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <Content>
        <Header>
          <ClipboardListIcon className='h-12 text-indigo-600 mx-auto' />
          <Title>Create an account and add your first recipe</Title>
        </Header>

        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label
              className='label-form flex justify-between'
              htmlFor='userName'
            >
              Username
              <span className='text-xs italic'>* required</span>
            </label>
            <input
              className='input-form'
              type='text'
              name='userName'
              value={userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-wrapper'>
            <label className='label-form flex justify-between' htmlFor='email'>
              Email
              <span className='text-xs italic'>* required</span>
            </label>
            <input
              className='input-form'
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
            <div className='form-alert-error' ref={divSignupEmailError}></div>
          </div>
          <div className='input-wrapper'>
            <label
              className='label-form flex justify-between'
              htmlFor='password'
            >
              Password
              <span className='text-xs italic'>* required</span>
            </label>
            <input
              className='input-form'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              minLength={6}
              required
            />
          </div>
          <div className='input-wrapper'>
            <label className='label-form flex justify-between' htmlFor='avatar'>
              Avatar
              <span className='text-xs italic'>* required</span>
            </label>
            <input
              onChange={handleImageChange}
              type='file'
              name='avatar'
              className='input-form'
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
          <button className='default-btn blue-btn'>Sign up</button>
        </form>
      </Content>
    </Wrapper>
  );
};

export const SignUpStore = () => {
  const dispatch = useDispatch();
  const alert = useSelector(alertSelector);
  const authUser = useSelector(authSelector);

  const registerUserInFirebase = useCallback(
    async (emailRegister, passwordRegister) => {
      await dispatch(registerUser(emailRegister, passwordRegister));
    },
    [dispatch]
  );

  const updateUserInFirebase = useCallback(
    async (userName, avatar) => {
      await dispatch(updateUser(userName, avatar));
      dispatch(monitorAuthState());
    },
    [dispatch]
  );

  const addUserInFirestore = useCallback(
    async (data) => {
      await dispatch(addUser({ ...data }));
    },
    [dispatch]
  );

  useEffect(() => {
    const handleResetAlert = () => {
      dispatch(resetAlert());
    };

    handleResetAlert();
  }, [dispatch]);

  return (
    <SignUp
      authUser={authUser}
      alert={alert}
      registerUserInFirebase={registerUserInFirebase}
      updateUserInFirebase={updateUserInFirebase}
      addUserInFirestore={addUserInFirestore}
    />
  );
};
