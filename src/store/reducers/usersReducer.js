export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [];
    case GET_USERS:
      return [...action.payload];
    default:
      return state;
  }
};
