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
    const { title, author, img, desc } = recipe;
    recipeContent = (
      <div>
        <h1>{title}</h1>
        <h6>{author}</h6>
        <img src={img} alt='recipe' />
        <p>{desc}</p>
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
