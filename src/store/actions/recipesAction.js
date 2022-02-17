import axios from 'axios';

import {
  GET_RECIPES,
  ADD_RECIPE,
  TOGGLE_LOADER,
} from '../reducers/recipesReducer';

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

export const addRecipe = (data) => {
  return async (dispatch) => {
    try {
      await axios.post('http://localhost:3004/recipes', data);
      dispatch({
        type: ADD_RECIPE,
        payload: data,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});
