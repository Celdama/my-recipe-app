import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { recipesReducer } from './reducers/recipesReducer';
import { currentRecipeReducer } from './reducers/currentRecipeReducer';

const store = createStore(
  combineReducers({
    recipes: recipesReducer,
    currentRecipe: currentRecipeReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
