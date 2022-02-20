import React from 'react';

const RecipeStepsTimeline = ({ steps }) => {
  return (
    <div className='mt-10 px-4 py-5 sm:px-6'>
      <h3 className='text-lg leading-6 font-medium text-gray-900'>Methods</h3>
      <ol className='relative mt-8 ml-6 border-l border-gray-200 dark:border-gray-700'>
        {steps.map((step, i) => {
          return (
            <li key={i} className='mb-10 ml-6'>
              <span className='flex absolute -left-4 text-indigo-500 font-semibold justify-center items-center w-8 h-8 bg-blue-200 rounded-full ring-8 ring-white '>
                {i + 1}
              </span>
              <h3 className='flex items-center mb-1 pl-4 text-lg font-medium text-gray-500'>
                {step}
              </h3>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default RecipeStepsTimeline;
