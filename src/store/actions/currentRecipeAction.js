import {
  GET_CURRENT_RECIPE,
  RESET_CURRENT_RECIPE,
} from '../reducers/currentRecipeReducer';

import { db } from '../../config/fbConfig';
import { doc, getDoc } from 'firebase/firestore';

export const getCurrentRecipe = (id) => {
  return async (dispatch) => {
    const docRef = doc(db, 'recipes', id);
    const docSnap = await getDoc(docRef);
    const current = { ...docSnap.data(), id: id };
    try {
      dispatch({
        type: GET_CURRENT_RECIPE,
        payload: current,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const resetCurrentRecipe = () => ({
  type: RESET_CURRENT_RECIPE,
  payload: {},
});
