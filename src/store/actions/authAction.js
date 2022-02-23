import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  MONITOR_AUTH_STATE,
} from '../reducers/authReducer';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../config/fbConfig';

export const registerUser = (registerEmail, registerPassword) => {
  return async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      dispatch({
        type: REGISTER_USER,
        payload: userCredential.user,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const logInUser = (loginEmail, loginPassword) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch({
        type: LOGIN_USER,
        payload: userCredential.user,
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
      return console.log(err);
    }
  };
};

export const monitorAuthState = () => {
  const auth = getAuth();
  return async (dispatch) => {
    try {
      onAuthStateChanged(auth, (user) => {
        const { email, uid, displayName } = user.auth.currentUser;
        const currentUser = {
          email,
          uid,
          displayName,
        };
        dispatch({
          type: MONITOR_AUTH_STATE,
          payload: currentUser,
        });
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
