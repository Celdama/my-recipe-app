import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../../config/fbConfig';

import {
  GET_RECIPES,
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
} from '../reducers/recipesReducer';

const recipesCollectionRef = collection(db, 'recipes');

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const data = await getDocs(recipesCollectionRef);
      const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch({
        type: GET_RECIPES,
        payload: res,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addRecipe = (data) => {
  return async (dispatch) => {
    try {
      await addDoc(recipesCollectionRef, data);
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
    const recipeDoc = doc(db, 'recipes', data.id);

    try {
      await updateDoc(recipeDoc, { ...data });
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
      const recipeDoc = doc(db, 'recipes', id);
      await deleteDoc(recipeDoc);
      dispatch({
        type: DELETE_RECIPE,
        payload: { id },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
