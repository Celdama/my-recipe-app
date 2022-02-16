export const GET_RECIPES = 'GET_RECIPES';

const initialState = [];

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload;
    default:
      return state;
  }
};
