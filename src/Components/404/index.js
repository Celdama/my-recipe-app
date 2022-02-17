import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <p className='mb-4'>
        Sorry nothing to see on <code>{location.pathname}</code>
      </p>
      <Link
        className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700'
        to='/'
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default NoMatch;
