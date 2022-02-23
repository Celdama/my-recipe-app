import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = ({ mobile }) => {
  return (
    <ul className='flex items-center space-x-4'>
      <li>
        <NavLink
          className='text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium'
          to={'/signup'}
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink
          className='text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium'
          to={'/signin'}
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
