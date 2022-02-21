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
        'https://fake-serv-for-recipe-app.herokuapp.com/recipes'
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
      await axios.post(
        'https://fake-serv-for-recipe-app.herokuapp.com/recipes',
        data
      );
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
      await axios.put(
        `https://fake-serv-for-recipe-app.herokuapp.com/recipes/${data.id}`,
        {
          ...data,
        }
      );
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
      await axios.delete(
        `https://fake-serv-for-recipe-app.herokuapp.com/recipes/${id}`
      );
      dispatch({
        type: DELETE_RECIPE,
        payload: { id },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
