import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../../Helpers/joinClassNames';
import {
  EyeIcon,
  HeartIcon,
  PlusIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/outline';
import {
  Wrapper,
  Content,
  Span,
  Title,
  Text,
  ContainerLinks,
  LinkTitle,
  LinkContent,
  WrapperLink,
  LinkName,
  LinkDesc,
  WrapperLinkIcon,
} from './404.tw';

const NoMatch = () => {
  const popularPages = [
    {
      title: 'chefs',
      href: 'chefs',
      desc: 'Discover the list of chefs who add delicious recipes',
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

  const popularContent = popularPages.map((page, i) => {
    const { title, href, desc } = page;
    let icon;

    if (title === 'chefs') {
      icon = <EyeIcon className='icon-indigo' />;
    } else if (title === 'favourite') {
      icon = <HeartIcon className='icon-indigo' />;
    } else {
      icon = <PlusIcon className='icon-indigo' />;
    }

    return (
      <Link
        to={href}
        key={i}
        className={classNames(
          title === 'discover' ? 'border-t' : '',
          'flex items-center justify-between py-4 hover:cursor-pointer hover:bg-gray-100'
        )}
      >
        <WrapperLink>
          <WrapperLinkIcon>{icon}</WrapperLinkIcon>
          <div>
            <LinkName>{title}</LinkName>
            <LinkDesc>{desc}</LinkDesc>
          </div>
        </WrapperLink>
        <ChevronRightIcon className='icon-indigo' />
      </Link>
    );
  });

  return (
    <Wrapper>
      <Content>
        <Span>404 ERROR</Span>
        <Title>This page does not exist.</Title>
        <Text>The page you are looking for could not be found.</Text>
        <ContainerLinks>
          <LinkTitle>Popular pages</LinkTitle>
          <LinkContent>{popularContent}</LinkContent>
        </ContainerLinks>
        <Link className='flex items-center  self-start gap-1 py-4 h-8' to='/'>
          <Span>Or go back home </Span>
          <ArrowRightIcon className='icon-indigo w-4 pt-1' />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default NoMatch;
