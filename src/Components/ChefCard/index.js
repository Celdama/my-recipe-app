import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
  return (
    <div className='w-64 rounded-lg border shadow-md  bg-white border-gray-200 pt-6'>
      <div className='flex flex-col items-center pb-10'>
        <img
          className='mb-3 w-32 h-32 rounded-full shadow-lg'
          src={chef.avatar}
          alt='avatar'
        />
        <h3 className='mb-1 text-xl font-medium text-gray-900'>
          {chef.userName}
        </h3>
        <span className='text-sm text-gray-500'>{chef.email}</span>
        <div className='flex mt-4 space-x-3 lg:mt-6'>
          <Link
            to={`/chef/${chef.uid}`}
            className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:ring-blue-300'
          >
            See Recipes
          </Link>
          {/* <Link
            to='/'
            className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800'
          >
            Message
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
