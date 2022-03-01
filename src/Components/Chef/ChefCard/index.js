import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
  return (
    <div className='rounded-lg  bg-white border-gray-200 px-6'>
      <div className='flex flex-col items-center pb-10'>
        <img
          className='mb-3 w-24 h-24 rounded-full'
          src={chef.avatar}
          alt='avatar'
        />
        <h3 className='mb-1 text-xl font-medium text-gray-900'>
          {chef.userName}
        </h3>
        <div className='flex space-x-3'>
          <Link
            to={`/chef/${chef.uid}`}
            className='inline-flex items-center text-sm font-semibold  text-center
            text-indigo-600 hover:text-indigo-700'
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