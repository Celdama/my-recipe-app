import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  RecipeImg,
  RecipeContent,
  RecipeTitle,
  RecipeDesc,
  Content,
} from './recipeCard.tw';

const RecipeCard = ({ recipe }) => {
  const { id, img, title, desc } = recipe;
  return (
    <Wrapper>
      <Content>
        <Link to={`/recipe/${id}`}>
          <RecipeImg src={img} alt='recipe' />
          <RecipeContent>
            <RecipeTitle>{title}</RecipeTitle>
            <RecipeDesc>{desc}</RecipeDesc>
          </RecipeContent>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default RecipeCard;
