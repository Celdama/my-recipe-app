export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const RESET_CURRENT_USER = 'RESET_CURRENT_USER';

const initialState = {};

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return { ...action.payload };
    case RESET_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
