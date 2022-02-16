import axios from 'axios';

import {
  GET_CURRENT_RECIPE,
  RESET_CURRENT_RECIPE,
} from '../reducers/currentRecipeReducer';

export const getCurrentRecipe = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3004/recipes?id=${id}`);
      dispatch({
        type: GET_CURRENT_RECIPE,
        payload: res.data,
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
