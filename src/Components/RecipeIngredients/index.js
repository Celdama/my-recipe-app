import React from 'react';
import {
  Wrapper,
  Title,
  IngredientsList,
  IngredientItem,
} from './recipeIngredients.tw';

const RecipeIngredients = ({ ingredients }) => {
  return (
    <Wrapper>
      <Title>Ingredients</Title>
      <IngredientsList>
        {ingredients.map((ingredient, i) => {
          return <IngredientItem key={i}>{ingredient}</IngredientItem>;
        })}
      </IngredientsList>
    </Wrapper>
  );
};

export default RecipeIngredients;
