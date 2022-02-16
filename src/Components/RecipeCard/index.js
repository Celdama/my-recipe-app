import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  RecipeImg,
  RecipeContent,
  RecipeTitle,
  RecipeDesc,
} from './recipeCard.tw';

const RecipeCard = ({ recipe }) => {
  const { id, img, title, desc } = recipe;
  return (
    <Wrapper>
      <Link
        className=' flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        to={`/recipe/${id}`}
      >
        <RecipeImg src={img} alt='recipe' />
        <RecipeContent>
          <RecipeTitle>{title}</RecipeTitle>
          <RecipeDesc>{desc}</RecipeDesc>
        </RecipeContent>
      </Link>
    </Wrapper>
  );
};

export default RecipeCard;
