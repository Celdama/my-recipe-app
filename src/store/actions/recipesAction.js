import axios from 'axios';

import { GET_RECIPES } from '../reducers/recipesReducer';

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:3004/recipes');
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
