export const ERROR_ALERT = 'ERROR_ALERT';
export const RESET_ALERT = 'RESET_ALERT';

const initialState = {};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_ALERT:
      return { ...action.payload };
    case RESET_ALERT:
      return {};
    default:
      return state;
  }
};
