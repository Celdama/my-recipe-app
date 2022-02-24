import { ADD_USER } from '../reducers/usersReducer';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../config/fbConfig';

const usersCollectionRef = collection(db, 'users');

export const addUser = (data) => {
  return async (dispatch) => {
    try {
      await addDoc(usersCollectionRef, data);
      dispatch({
        type: ADD_USER,
        payload: data,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
