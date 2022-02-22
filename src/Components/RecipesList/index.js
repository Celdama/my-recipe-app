import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { recipesSelector } from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../store/actions/recipesAction';
import { resetCurrentRecipe } from '../../store/actions/currentRecipeAction';
import { Wrapper } from './recipesList.tw';
import Spinner from '../Spinner';

export const RecipesList = ({ recipes }) => {
  console.log(recipes);
  const recipesContent =
    recipes &&
    recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);

  return <Wrapper>{!recipes.length ? <Spinner /> : recipesContent}</Wrapper>;
};

export const RecipesListStore = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelector);

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(resetCurrentRecipe());
  }, [dispatch]);

  return <RecipesList recipes={recipes} />;
};
