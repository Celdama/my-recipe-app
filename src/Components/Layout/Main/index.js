import React from 'react';
import { Wrapper, Content, Container } from './main.tw';
import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return (
    <main className='grow'>
      <Wrapper>
        <Content>
          <Container>{children}</Container>
        </Content>
      </Wrapper>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.object,
};

export default Main;
