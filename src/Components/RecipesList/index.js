import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { recipesSelector } from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import { useDispatch } from 'react-redux';
import { resetCurrentRecipe } from '../../store/actions/currentRecipeAction';
import { Wrapper } from './recipesList.tw';

export const RecipesList = ({ recipes }) => {
  return (
    <Wrapper>
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </Wrapper>
  );
};

export const RecipesListStore = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelector);

  useEffect(() => {
    dispatch(resetCurrentRecipe());
  }, [dispatch]);

  return <RecipesList recipes={recipes} />;
};
