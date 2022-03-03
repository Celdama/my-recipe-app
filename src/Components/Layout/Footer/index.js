import React from 'react';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Content,
  TitleApp,
  Links,
  Divider,
  Copyright,
} from './footer.tw';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Link to={'/'} className='flex items-center mb-4 sm:mb-0'>
          <ClipboardListIcon className='h-8 w-8 mr-3 text-indigo-600' />
          <TitleApp>MyRecipeApp</TitleApp>
        </Link>
        <Links>
          <li>
            <Link to={'/'} className='mr-4 hover:underline md:mr-6 '>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/chefs'} className='mr-4 hover:underline md:mr-6'>
              Chefs
            </Link>
          </li>
          <li>
            <Link to={'/my-recipes'} className='mr-4 hover:underline md:mr-6 '>
              My Recipes
            </Link>
          </li>
        </Links>
      </Content>
      <Divider />
      <Copyright>
        © 2022{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/Celdama'
          className='hover:underline'
        >
          Celdama
        </a>
        . All Rights Reserved.
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
