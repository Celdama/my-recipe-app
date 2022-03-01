import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  MONITOR_AUTH_STATE,
  UPDATE_USER,
} from '../reducers/authReducer';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
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
  // const auth = getAuth();
  return async (dispatch) => {
    try {
      onAuthStateChanged(auth, (user) => {
        let currentUser;
        if (user) {
          const { email, uid, displayName, photoURL } = user.auth.currentUser;
          currentUser = {
            email,
            uid,
            displayName,
            photoURL,
          };
        }
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

export const updateUser = (userName, avatar) => {
  const auth = getAuth();
  console.log(userName, avatar);
  return async (dispatch) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: avatar,
      });
      dispatch({
        type: UPDATE_USER,
        payload: {},
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
