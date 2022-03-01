import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
