import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { recipesReducer } from './reducers/recipesReducer';
import { currentRecipeReducer } from './reducers/currentRecipeReducer';
import { authReducer } from './reducers/authReducer';
import { usersReducer } from './reducers/usersReducer';
import { alertReducer } from './reducers/alertReducer';

const store = createStore(
  combineReducers({
    recipes: recipesReducer,
    users: usersReducer,
    currentRecipe: currentRecipeReducer,
    auth: authReducer,
    alert: alertReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
