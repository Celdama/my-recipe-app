import React from 'react';
import { useSelector } from 'react-redux';
import { recipesSelector } from '../../store/selectors/recipesSelector';

export const Recipes = ({ recipes }) => {
  console.log(recipes);
  return <div>index</div>;
};

export const RecipesStore = () => {
  const recipes = useSelector(recipesSelector);

  return <Recipes recipes={recipes} />;
};
