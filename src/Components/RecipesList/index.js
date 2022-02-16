import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { recipesSelector } from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import { useDispatch } from 'react-redux';
import { resetCurrentRecipe } from '../../store/actions/currentRecipeAction';

export const RecipesList = ({ recipes }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
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
