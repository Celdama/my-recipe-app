import { ERROR_ALERT, RESET_ALERT } from '../reducers/alertReducer';

export const errorAlert = (error) => ({
  type: ERROR_ALERT,
  payload: error,
});

export const resetAlert = () => ({
  type: RESET_ALERT,
  payload: {},
});
