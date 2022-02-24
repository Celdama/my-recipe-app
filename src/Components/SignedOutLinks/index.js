import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapperLinks } from './signedOutLinks.tw';

const SignedOutLinks = () => {
  return (
    <WrapperLinks>
      <li>
        <NavLink
          className='signed-out-links 
          bg-indigo-700 hover:bg-indigo-800'
          to={'/signup'}
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink className='signed-out-links' to={'/signin'}>
          Log In
        </NavLink>
      </li>
    </WrapperLinks>
  );
};

export default SignedOutLinks;
