import React from 'react';

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className='mt-10 px-4 py-5 sm:px-6'>
      <h3 className='text-lg leading-6 font-medium text-gray-900'>
        Ingredients
      </h3>
      <ul className='list-disc mt-4 list-inside text-gray-500 font-medium'>
        {ingredients.map((ingredient, i) => {
          return (
            <li className='py-3' key={i}>
              {ingredient}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
