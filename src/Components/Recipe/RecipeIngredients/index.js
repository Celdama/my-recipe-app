import React from 'react';
import {
  Wrapper,
  IngredientsList,
  IngredientItem,
} from './recipeIngredients.tw';
import PropTypes from 'prop-types';

const RecipeIngredients = ({ ingredients }) => {
  const ingredientsContent = ingredients.map((ingredient, i) => {
    return <IngredientItem key={i}>{ingredient}</IngredientItem>;
  });

  return (
    <Wrapper>
      <h3 className='title-section-recipe-detail'>Ingredients</h3>
      <IngredientsList>{ingredientsContent}</IngredientsList>
    </Wrapper>
  );
};

RecipeIngredients.propTypes = {
  ingredients: PropTypes.array,
};

export default RecipeIngredients;
