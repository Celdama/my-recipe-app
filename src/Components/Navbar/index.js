import React, { Fragment } from 'react';
import {
  Wrapper,
  NavContainer,
  NavItems,
  NavLogoContainer,
  NavItemsContainer,
  NavMobileMenuBtnContainer,
  NavItemsMobileContainer,
  NavUserMobileContainer,
} from './navbar.tw';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, ClipboardListIcon } from '@heroicons/react/outline';
import Avatar from '../../Images/celdama.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const user = {
  name: 'Celdama Dev',
  email: 'celdamadev@gmail.com',
};

const navigation = [
  { name: 'home', href: '#', current: true },
  { name: 'discover', href: '#', current: false },
  { name: 'for you', href: '#', current: false },
  // { name: 'Chefs', href: '#', current: false },
  { name: 'favourite', href: '#', current: false },
  { name: 'my recipe', href: '#', current: false },
  { name: 'add recipe', href: '#', current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  // { name: 'Settings', href: '#' },
  // { name: 'Sign out', href: '#' },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Navbar = () => {
  return (
    <Wrapper>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <NavContainer>
                <NavItems>
                  <NavLogoContainer>
                    <ClipboardListIcon className='h-8 w-8 text-indigo-500' />
                  </NavLogoContainer>
                  <NavItemsContainer>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.name === 'home' ? '/' : `/${item.name}`}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium capitalize'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </NavItemsContainer>
                </NavItems>
                <NavItemsContainer>
                  <div className='ml-4 flex items-center md:ml-6'>
                    <Menu as='div' className='ml-3 relative'>
                      <div>
                        <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                          <span className='sr-only'>Open user menu</span>
                          <img
                            className='h-8 w-8 rounded-full'
                            src={Avatar}
                            alt=''
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </NavItemsContainer>
                <NavMobileMenuBtnContainer>
                  <Disclosure.Button className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </NavMobileMenuBtnContainer>
              </NavContainer>
            </div>

            <Disclosure.Panel className='md:hidden'>
              <NavItemsMobileContainer>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </NavItemsMobileContainer>
              <NavUserMobileContainer>
                <div className='flex items-center px-5'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src={Avatar}
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-white'>
                      {user.name}
                    </div>
                    <div className='text-sm font-medium leading-none text-gray-400'>
                      {user.email}
                    </div>
                  </div>
                </div>
                {/* <div className='mt-3 px-2 space-y-1'>
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div> */}
              </NavUserMobileContainer>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Wrapper>
  );
};

export default Navbar;
