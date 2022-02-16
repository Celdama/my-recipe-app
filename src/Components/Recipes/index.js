import React from 'react';
import { useSelector } from 'react-redux';
import { recipesSelector } from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';

export const Recipes = ({ recipes }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
  );
};

export const RecipesStore = () => {
  const recipes = useSelector(recipesSelector);

  return <Recipes recipes={recipes} />;
};
