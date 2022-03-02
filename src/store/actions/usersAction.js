import { ADD_USER, GET_USERS } from '../reducers/usersReducer';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../config/fbConfig';
import { getAuth } from 'firebase/auth';

const usersCollectionRef = collection(db, 'users');

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const data = await getDocs(usersCollectionRef);
      const res = data.docs.map((doc) => ({ ...doc.data() }));
      dispatch({
        type: GET_USERS,
        payload: res,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addUser = (data) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      const { email, uid } = auth.currentUser;

      await addDoc(usersCollectionRef, {
        ...data,
        email,
        uid,
      });

      dispatch({
        type: ADD_USER,
        payload: {
          ...data,
          email,
          uid,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
