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
  const { id, imgUrl, title, desc, prep, cooking } = recipe;
  return (
    <Wrapper>
      <Link
        className='flex flex-col justify-between bg-white 
        rounded-lg border shadow-md md:flex-row md:max-w-xl 
        border-gray-200
        hover:bg-slate-50'
        to={`/recipe/${id}`}
      >
        <RecipeImg src={imgUrl} alt='recipe' />
        <RecipeContent>
          <div>
            <RecipeTitle>{title}</RecipeTitle>
            <RecipeDesc>{desc}</RecipeDesc>
          </div>
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
