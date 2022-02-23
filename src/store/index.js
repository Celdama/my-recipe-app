import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { recipesReducer } from './reducers/recipesReducer';
import { currentRecipeReducer } from './reducers/currentRecipeReducer';
import { authReducer } from './reducers/authReducer';
import { currentUserReducer } from './reducers/currentUserReducer';

const store = createStore(
  combineReducers({
    recipes: recipesReducer,
    currentRecipe: currentRecipeReducer,
    auth: authReducer,
    currentUser: currentUserReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
