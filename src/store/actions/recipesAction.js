import axios from 'axios';

import {
  GET_RECIPES,
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
} from '../reducers/recipesReducer';

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        'http://localhost:3004/recipes?_sort=id&_order=desc'
      );
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
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

export const editRecipe = (data) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:3004/recipes/${data.id}`, {
        ...data,
      });
      dispatch({
        type: EDIT_RECIPE,
        payload: { ...data },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3004/recipes/${id}`);
      dispatch({
        type: DELETE_RECIPE,
        payload: { id },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
