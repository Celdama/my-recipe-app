import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center mt-20'>
      <h1 className='mb-4 text-5xl font-semibold text-center'>
        Uh oh. That page doesn't exit.
      </h1>
      <Link
        className='text-white mt-12 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700'
        to='/'
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default NoMatch;
