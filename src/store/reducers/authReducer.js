export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const MONITOR_AUTH_STATE = 'MONITOR_AUTH_STATE';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, ...action.payload };
    case LOGIN_USER:
      return { ...state, ...action.payload };
    case LOGOUT_USER:
      return {};
    case MONITOR_AUTH_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
