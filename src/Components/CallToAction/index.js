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
import PropTypes from 'prop-types';

const CallToAction = ({ topText, bottomText }) => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <span>{topText}</span>
          <span className='text-indigo-600'>{bottomText}</span>
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

CallToAction.propTypes = {
  topText: PropTypes.string,
  bottomText: PropTypes.string,
};

export default CallToAction;
