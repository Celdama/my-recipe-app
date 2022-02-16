import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { recipesSelector } from '../../store/selectors/recipesSelector';

export const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      {recipe && (
        <div>
          <h1>{recipe.title}</h1>
          <h6>{recipe.author}</h6>
          <img src={recipe.img} alt='recipe' />
          <p>{recipe.desc}</p>
        </div>
      )}
    </div>
  );
};

export const RecipeDetailStore = () => {
  const { id } = useParams();
  const recipes = useSelector(recipesSelector);
  const currentRecipe = recipes.find((recipe) => recipe.id === Number(id));

  return <RecipeDetail recipe={currentRecipe} />;
};
