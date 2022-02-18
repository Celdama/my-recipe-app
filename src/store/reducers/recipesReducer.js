export const GET_RECIPES = 'GET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';

const initialState = {
  data: [],
  loading: false,
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        data: [...action.payload],
      };
    case ADD_RECIPE:
      return [action.payload, ...state.data];
    case EDIT_RECIPE:
      return state.map((recipe) => {
        return recipe.id === action.payload.id
          ? { ...recipe, content: action.payload.content }
          : recipe;
      });
    case TOGGLE_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
