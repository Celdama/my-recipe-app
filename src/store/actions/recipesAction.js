import axios from 'axios';

import { GET_RECIPES, TOGGLE_LOADER } from '../reducers/recipesReducer';

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoader());
      const res = await axios.get('http://localhost:3004/recipes');
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
      dispatch(toggleLoader());
    } catch (err) {
      return console.log(err);
    }
  };
};

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});
