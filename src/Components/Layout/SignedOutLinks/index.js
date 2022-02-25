import React from 'react';
import { NavLink } from 'react-router-dom';
import { WrapperLinks } from './signedOutLinks.tw';

const SignedOutLinks = () => {
  return (
    <WrapperLinks>
      <li>
        <NavLink
          className='signed-out-links 
          bg-indigo-600 hover:bg-indigo-700'
          to={'/signup'}
        >
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink className='signed-out-links' to={'/signin'}>
          Sign in
        </NavLink>
      </li>
    </WrapperLinks>
  );
};

export default SignedOutLinks;
