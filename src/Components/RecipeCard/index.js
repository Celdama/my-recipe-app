import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, handleSetCurrentRecipe }) => {
  return (
    <div className='m-4'>
      <Link
        onClick={() => handleSetCurrentRecipe(recipe)}
        to={`/recipe/${recipe.id}`}
        className='flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        <img
          className='object-cover bg-center w-full md:w-72 h-96 rounded-t-lg  md:rounded-none md:rounded-l-lg'
          src={recipe.img}
          alt='recipe'
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {recipe.title}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {recipe.desc}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
