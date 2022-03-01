import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Content,
  Title,
  Body,
  WrapperButton,
  Button,
} from './callToAction.tw';

const CallToAction = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <span>Ready to join the team?</span>
          <span className='text-indigo-600'>
            Create an account and add your first recipe.
          </span>
        </Title>
        <Body>
          <WrapperButton>
            <Button>
              <Link
                to='/signup'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Sign up for free
              </Link>
            </Button>
            <Button>
              <Link
                to='/signin'
                className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50'
              >
                Sign in
              </Link>
            </Button>
          </WrapperButton>
        </Body>
      </Content>
    </Wrapper>
  );
};

export default CallToAction;
