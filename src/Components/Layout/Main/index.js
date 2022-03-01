import React from 'react';
import { Wrapper, Content, Container } from './main.tw';

const Main = ({ children }) => {
  return (
    <main>
      <Wrapper>
        <Content>
          <Container>{children}</Container>
        </Content>
      </Wrapper>
    </main>
  );
};

export default Main;
