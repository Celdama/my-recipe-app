export const GET_RECIPES = 'GET_RECIPES';
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
    case TOGGLE_LOADER:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
