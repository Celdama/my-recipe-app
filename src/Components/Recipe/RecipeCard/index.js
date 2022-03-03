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
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => {
  const { id, imgUrl, title, desc, prep, cooking } = recipe;
  return (
    <Wrapper key={id}>
      <Link
        className='flex flex-col justify-between bg-white 
        rounded-lg border shadow-md md:flex-row md:max-w-xl 
        border-gray-200
        hover:bg-slate-50'
        to={`/recipe/${id}`}
      >
        <div className='md:w-10/12'>
          <RecipeImg src={imgUrl} alt='recipe' />
        </div>
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

RecipeCard.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeCard;
