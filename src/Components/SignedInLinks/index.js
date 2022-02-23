import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Disclosure } from '@headlessui/react';
import Avatar from '../../Images/avatar.png';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';

const SignedInLinks = ({ mobile }) => {
  const authUser = useSelector(authSelector);

  return (
    <ul className='flex items-center ml-4 space-x-4'>
      {mobile ? (
        <Disclosure.Button as={NavLink} to={'profile'}>
          <img
            className='h-10 w-10 rounded-full'
            src={authUser.photoURL ? authUser.photoURL : Avatar}
            alt='avatar'
          />
        </Disclosure.Button>
      ) : (
        <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
          <span className='sr-only'>Open user menu</span>
          <img
            className='h-8 w-8 rounded-full'
            src={authUser.photoURL ? authUser.photoURL : Avatar}
            alt='avatar'
          />
        </Menu.Button>
      )}
    </ul>
  );
};

export default SignedInLinks;
