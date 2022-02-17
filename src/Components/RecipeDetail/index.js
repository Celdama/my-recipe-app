import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  currentRecipeSelector,
  loaderSelector,
} from '../../store/selectors/currentRecipeSelector';
import { useDispatch } from 'react-redux';
import { getCurrentRecipe } from '../../store/actions/currentRecipeAction';
import Spinner from '../Spinner';
import { Wrapper } from './recipeDetail.tw';

export const RecipeDetail = ({ recipe, isLoading }) => {
  let recipeContent;
  if (recipe) {
    recipeContent = (
      <div>
        <h1>{recipe.title}</h1>
        <h6>{recipe.author}</h6>
        <img src={recipe.img} alt='recipe' />
        <p>{recipe.desc}</p>
      </div>
    );
  }
  return <Wrapper>{isLoading ? <Spinner /> : recipeContent}</Wrapper>;
};

export const RecipeDetailStore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(loaderSelector);

  const fetchCurrentRecipe = useCallback(() => {
    dispatch(getCurrentRecipe(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetchCurrentRecipe();
  }, [fetchCurrentRecipe]);

  const currentRecipe = useSelector(currentRecipeSelector)[0];

  return <RecipeDetail recipe={currentRecipe} isLoading={isLoading} />;
};
