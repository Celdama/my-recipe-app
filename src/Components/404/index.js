import React from 'react';
import { Link } from 'react-router-dom';
import {
  EyeIcon,
  HeartIcon,
  PlusIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/outline';

const NoMatch = () => {
  const popularPages = [
    {
      title: 'discover',
      href: 'discover',
      desc: 'Find every day 4 recipes drawn',
    },
    {
      title: 'favourite',
      href: 'favourite',
      desc: 'Find your favorite recipe',
    },
    {
      title: 'add recipe',
      href: 'add-recipe',
      desc: 'The page to allow you to add new recipes',
    },
  ];

  const popularContent = popularPages.map((page) => {
    let icon;

    if (page.title === 'discover') {
      icon = <EyeIcon className='h-5 w-5 text-indigo-500' />;
    } else if (page.title === 'favourite') {
      icon = <HeartIcon className='h-5 w-5 text-indigo-500' />;
    } else {
      icon = <PlusIcon className='h-5 w-5 text-indigo-500' />;
    }

    return (
      <Link
        to={page.href}
        className={
          page.title === 'discover'
            ? 'flex items-center justify-between py-4 hover:cursor-pointer hover:bg-gray-100 border-t'
            : 'flex items-center justify-between py-4 hover:cursor-pointer hover:bg-gray-100'
        }
      >
        <div className='flex gap-3'>
          <div className='bg-gray-200 rounded-md p-3'>{icon}</div>
          <div>
            <h5 className=' font-semibold capitalize leading-tight'>
              {page.title}
            </h5>
            <p className='text-slate-500'>{page.desc}</p>
          </div>
        </div>
        <ChevronRightIcon className='h-5 w-5 text-slate-600' />
      </Link>
    );
  });

  return (
    <div className='mx-auto mt-2 max-w-screen-sm font-sans'>
      <div className='flex flex-col justify-center items-center'>
        <span className='text-center block font-bold text-indigo-500'>
          404 ERROR
        </span>
        <h1 className='mb-4 text-5xl md:text-6xl font-bold text-center'>
          This page does not exist.
        </h1>
        <p className='text-lg text-slate-600'>
          The page you are looking for could not be found.
        </p>
      </div>
      <div className='divide-y divide-y-reverse divide-slate-200 pb-9 mt-9'>
        <h2 className='mb-3 uppercase font-semibold text-slate-600'>
          Popular pages
        </h2>
        <div className='divide-y divide-slate-200'>{popularContent}</div>
      </div>
      <Link className='flex items-center gap-1 py-4 h-8' to='/'>
        <span className='text-indigo-500 font-semibold'>Or go back home </span>
        <ArrowRightIcon className='h-5 w-4 pt-1 text-indigo-500' />
      </Link>
    </div>
  );
};

export default NoMatch;
