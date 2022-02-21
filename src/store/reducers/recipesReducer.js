export const GET_RECIPES = 'GET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

const initialState = [];

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return [...action.payload];
    case ADD_RECIPE:
      return [...state, action.payload];
    case EDIT_RECIPE:
      return state.map((recipe) => {
        return recipe.id === action.payload.id
          ? { ...recipe, ...action.payload }
          : recipe;
      });
    case DELETE_RECIPE:
      return state.filter(
        (recipe) => recipe.customId !== action.payload.customId
      );
    default:
      return state;
  }
};
