import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  RecipeImg,
  RecipeContent,
  RecipeTitle,
  RecipeDesc,
  RecipeInfo,
} from './recipeCard.tw';

const RecipeCard = ({ recipe }) => {
  const { customId, imgUrl, title, desc, prep, cooking } = recipe;
  return (
    <Wrapper>
      <Link
        className=' flex flex-col justify-between bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        to={`/recipe/${customId}`}
      >
        <RecipeImg src={imgUrl} alt='recipe' />
        <RecipeContent>
          <RecipeTitle>{title}</RecipeTitle>
          <RecipeDesc>{desc}</RecipeDesc>
          <RecipeInfo>
            <span>Prep : {prep} min</span>
            <span>Cooking : {cooking} min</span>
          </RecipeInfo>
        </RecipeContent>
      </Link>
    </Wrapper>
  );
};

export default RecipeCard;
