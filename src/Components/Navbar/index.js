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
import { NavLink } from 'react-router-dom';
import SignedInLinks from '../SignedInLinks';
import SignedOutLinks from '../SignedOutLinks';
import { signOutUser } from '../../store/actions/authAction';

import { useSelector } from 'react-redux';
import {
  isAuthSelector,
  authSelector,
} from '../../store/selectors/authSelector';
import { useDispatch } from 'react-redux';

const user = {
  name: 'Celdama Dev',
  email: 'celdamadev@gmail.com',
};

const navigation = [
  { name: 'Home', href: 'home', current: false },
  { name: 'Discover', href: 'discover', current: false },
  { name: 'For You', href: 'for-you', current: false },
  // { name: 'Chefs', href: '#', current: false },
  { name: 'Favourite', href: 'favourite', current: false },
  { name: 'My Recipes', href: 'my-recipes', current: false },
  // { name: 'Add recipe', href: 'add-recipe', current: false },
];

const userNavigation = [
  { name: 'Your Profile', href: 'profile' },
  { name: 'Settings', href: 'settings' },
  // { name: 'Sign out', href: '#' },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(isAuthSelector);
  const authUser = useSelector(authSelector);

  const handleSignOut = () => {
    dispatch(signOutUser());
  };

  // A METTRE DANS HELPERS CETTE FONCTION
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Wrapper>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <NavContainer>
                <NavItems>
                  <NavLogoContainer>
                    <NavLink to='/'>
                      <ClipboardListIcon className='h-8 w-8 text-indigo-500' />
                    </NavLink>
                  </NavLogoContainer>
                  <NavItemsContainer>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {navigation.map(({ name, href, current }) => (
                        <NavLink
                          key={name}
                          to={name === 'Home' ? '/' : href}
                          className={classNames(
                            current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={current ? 'page' : undefined}
                        >
                          {name}
                        </NavLink>
                      ))}
                      {isLogin && (
                        <NavLink
                          key={'Add Recipe'}
                          className='text-gray-300 hover:bg-gray-700 hover:text-white
                            px-3 py-2 rounded-md text-sm font-medium'
                          to={'add-recipe'}
                        >
                          Add Recipe
                        </NavLink>
                      )}
                    </div>
                  </NavItemsContainer>
                </NavItems>
                <NavItemsContainer>
                  <div className='ml-4 flex items-center md:ml-6 '>
                    <Menu as='div' className='ml-3 relative'>
                      <div>
                        {isLogin ? (
                          <SignedInLinks mobile={false} />
                        ) : (
                          <SignedOutLinks mobile={false} />
                        )}
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
                          <>
                            {userNavigation.map(({ name, href, current }) => (
                              <Menu.Item key={name}>
                                {({ active }) => (
                                  <NavLink
                                    key={name}
                                    to={href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    aria-current={current ? 'page' : undefined}
                                  >
                                    {name}
                                  </NavLink>
                                )}
                              </Menu.Item>
                            ))}
                            <Menu.Item>
                              <li
                                onClick={handleSignOut}
                                className='block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer text-sm text-gray-700 list-none'
                              >
                                Sign Out
                              </li>
                            </Menu.Item>
                          </>
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

            <Disclosure.Panel className='md:hidden '>
              <NavItemsMobileContainer>
                {navigation.map(({ name, href, current }) => (
                  <Disclosure.Button
                    activeclassname='selected'
                    key={name}
                    as={NavLink}
                    to={name === 'Home' ? '/' : href}
                    className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    aria-current={current ? 'page' : undefined}
                  >
                    {name}
                  </Disclosure.Button>
                ))}
              </NavItemsMobileContainer>

              <NavUserMobileContainer>
                <div className='flex items-center px-2 py-2'>
                  <div className='flex-shrink-0'>
                    {isLogin ? (
                      <SignedInLinks mobile={true} />
                    ) : (
                      <SignedOutLinks mobile={true} />
                    )}
                  </div>
                  {authUser.email && (
                    <div className='ml-3'>
                      <div className='text-base font-medium leading-none text-white'>
                        {authUser.userName}
                      </div>
                      <div className='text-sm font-medium leading-none text-gray-400'>
                        {authUser.email}
                      </div>
                    </div>
                  )}
                </div>
                {authUser.email && (
                  <div className='mt-3 px-2 space-y-1'>
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
                    <li
                      onClick={handleSignOut}
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:cursor-pointer hover:text-white hover:bg-gray-700'
                    >
                      Sign Out
                    </li>
                  </div>
                )}
              </NavUserMobileContainer>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Wrapper>
  );
};

export default Navbar;
