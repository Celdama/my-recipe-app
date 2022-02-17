export const GET_CURRENT_RECIPE = 'GET_CURRENT_RECIPE';
export const RESET_CURRENT_RECIPE = 'RESET_CURRENT_RECIPE';
export const TOGGLE_CURRENT_LOADER = 'TOGGLE_CURRENT_LOADER';

const initialState = {
  recipe: [],
  loading: false,
};

export const currentRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    case RESET_CURRENT_RECIPE:
      return {
        ...state,
        recipe: [],
      };
    case TOGGLE_CURRENT_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
