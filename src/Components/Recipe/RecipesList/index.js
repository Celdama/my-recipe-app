import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { recipesSelector } from '../../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import { useDispatch } from 'react-redux';
import { resetCurrentRecipe } from '../../../store/actions/currentRecipeAction';
import { Wrapper } from './recipesList.tw';
import Spinner from '../../Layout/Spinner';
import PropTypes from 'prop-types';

export const RecipesList = ({ recipes }) => {
  const recipesContent =
    recipes &&
    recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe} />);

  return <Wrapper>{!recipes.length ? <Spinner /> : recipesContent}</Wrapper>;
};

RecipesList.propTypes = {
  recipes: PropTypes.array,
};

export const RecipesListStore = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(recipesSelector);

  useEffect(() => {
    dispatch(resetCurrentRecipe());
  }, [dispatch]);

  return <RecipesList recipes={recipes} />;
};
