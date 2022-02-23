import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../reducers/authReducer';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../config/fbConfig';

export const registerUser = (registerEmail, registerPassword) => {
  return async (dispatch) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      dispatch({
        type: REGISTER_USER,
        payload: auth.currentUser,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const logInUser = (loginEmail, loginPassword) => {
  return async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch({
        type: LOGIN_USER,
        payload: auth.currentUser,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const signOutUser = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch({
        type: LOGOUT_USER,
        payload: {},
      });
    } catch (err) {
      console.log(err);
    }
  };
};
