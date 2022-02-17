import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  recipesSelector,
  loaderSelector,
} from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import { useDispatch } from 'react-redux';
import { resetCurrentRecipe } from '../../store/actions/currentRecipeAction';
import { Wrapper } from './recipesList.tw';
import Spinner from '../Spinner';

export const RecipesList = ({ recipes, isLoading }) => {
  const recipesContent = recipes.map((recipe, index) => (
    <RecipeCard recipe={recipe} key={index} />
  ));

  return <Wrapper>{isLoading ? <Spinner /> : recipesContent}</Wrapper>;
};

export const RecipesListStore = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelector);
  let isLoading = useSelector(loaderSelector);

  useEffect(() => {
    dispatch(resetCurrentRecipe());
  }, [dispatch]);

  return <RecipesList recipes={recipes} isLoading={isLoading} />;
};
