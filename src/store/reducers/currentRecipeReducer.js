export const GET_CURRENT_RECIPE = 'GET_CURRENT_RECIPE';
export const RESET_CURRENT_RECIPE = 'RESET_CURRENT_RECIPE';

const initialState = {};

export const currentRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_RECIPE:
      return { ...action.payload };
    case RESET_CURRENT_RECIPE:
      return {};
    default:
      return state;
  }
};
