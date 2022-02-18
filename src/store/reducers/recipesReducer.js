export const GET_RECIPES = 'GET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
// export const TOGGLE_LOADER = 'TOGGLE_LOADER';

// const initialState = {
//   data: [],
//   loading: false,
// };
const initialState = [];

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return [...action.payload];
    case ADD_RECIPE:
      return [action.payload, ...state.data];
    case EDIT_RECIPE:
      return state.map((recipe) => {
        return recipe.id === action.payload.id
          ? { ...recipe, ...action.payload }
          : recipe;
      });
    // case TOGGLE_LOADER:
    //   return {
    //     ...state,
    //     loading: !state.loading,
    //   };
    default:
      return state;
  }
};
