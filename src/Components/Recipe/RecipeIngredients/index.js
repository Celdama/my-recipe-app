import React from 'react';
import {
  Wrapper,
  IngredientsList,
  IngredientItem,
} from './recipeIngredients.tw';

const RecipeIngredients = ({ ingredients }) => {
  return (
    <Wrapper>
      <h3 className='title-section-recipe-detail'>Ingredients</h3>
      <IngredientsList>
        {ingredients.map((ingredient, i) => {
          return <IngredientItem key={i}>{ingredient}</IngredientItem>;
        })}
      </IngredientsList>
    </Wrapper>
  );
};

export default RecipeIngredients;
