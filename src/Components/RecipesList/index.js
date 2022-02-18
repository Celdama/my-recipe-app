import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  recipesSelector,
  // loaderSelector,
} from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import { useDispatch } from 'react-redux';
import { resetCurrentRecipe } from '../../store/actions/currentRecipeAction';
import { Wrapper } from './recipesList.tw';
import Spinner from '../Spinner';

export const RecipesList = ({ recipes, isLoading }) => {
  console.log(recipes);
  const recipesContent =
    recipes &&
    recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);

  return <Wrapper>{isLoading ? <Spinner /> : recipesContent}</Wrapper>;
};

export const RecipesListStore = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelector);
  // const isLoading = useSelector(loaderSelector);

  useEffect(() => {
    dispatch(resetCurrentRecipe());
  }, [dispatch]);

  return <RecipesList recipes={recipes} />;
};
