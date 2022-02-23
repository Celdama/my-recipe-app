import {
  GET_CURRENT_USER,
  RESET_CURRENT_USER,
} from '../reducers/currentUserReducer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/fbConfig';

export const getCurrentUser = () => {
  return async (dispatch) => {
    let current;
    await onAuthStateChanged(auth, (currentUser) => {
      current = currentUser?.proactiveRefresh.user.providerData[0];
    });
    dispatch({
      type: GET_CURRENT_USER,
      payload: current,
    });
    try {
    } catch (err) {
      return console.log(err);
    }
  };
};

export const resetCurrentUser = () => ({
  type: RESET_CURRENT_USER,
  payload: {},
});
