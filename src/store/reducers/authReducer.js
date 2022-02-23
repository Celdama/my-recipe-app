export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { email: action.payload.email };
    case LOGIN_USER:
      return { ...state, ...action.payload };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};
