import axios from 'axios';

import {
  GET_CURRENT_RECIPE,
  RESET_CURRENT_RECIPE,
  TOGGLE_CURRENT_LOADER,
} from '../reducers/currentRecipeReducer';

export const getCurrentRecipe = (id) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoader());
      const res = await axios.get(`http://localhost:3004/recipes?id=${id}`);
      dispatch({
        type: GET_CURRENT_RECIPE,
        payload: res.data,
      });
      dispatch(toggleLoader());
    } catch (err) {
      return console.log(err);
    }
  };
};

export const resetCurrentRecipe = () => ({
  type: RESET_CURRENT_RECIPE,
  payload: {},
});

export const toggleLoader = () => ({
  type: TOGGLE_CURRENT_LOADER,
});
