import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Disclosure } from '@headlessui/react';
import Avatar from '../../Images/celdama.png';

const SignedOutLinks = ({ mobile }) => {
  return (
    <ul className='flex items-center space-x-4'>
      <li>
        <NavLink
          className='text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium'
          to={'/signup'}
        >
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink
          className='text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium'
          to={'/login'}
        >
          Login
        </NavLink>
      </li>
      {mobile ? (
        <Disclosure.Button
          // key={user.name}
          as={NavLink}
          to={'profile'}
        >
          <img className='h-10 w-10 rounded-full' src={Avatar} alt='avatar' />
        </Disclosure.Button>
      ) : (
        <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
          <span className='sr-only'>Open user menu</span>
          <img className='h-8 w-8 rounded-full' src={Avatar} alt='avatar' />
        </Menu.Button>
      )}
    </ul>
  );
};

export default SignedOutLinks;
