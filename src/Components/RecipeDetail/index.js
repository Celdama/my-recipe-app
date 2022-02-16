import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentRecipeSelector } from '../../store/selectors/currentRecipeSelector';
import { useDispatch } from 'react-redux';
import { getCurrentRecipe } from '../../store/actions/currentRecipeAction';

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
  const dispatch = useDispatch();

  const fetchCurrentRecipe = useCallback(() => {
    dispatch(getCurrentRecipe(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetchCurrentRecipe();
  }, [fetchCurrentRecipe]);

  const currentRecipe = useSelector(currentRecipeSelector)[0];

  return <RecipeDetail recipe={currentRecipe} />;
};
