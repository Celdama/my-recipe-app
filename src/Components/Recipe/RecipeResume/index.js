import React from 'react';
import {
  Wrapper,
  Header,
  Title,
  Para,
  Content,
  TableWrapperGray,
  TableWrapperWhite,
  Dt,
  Dd,
} from './recipeResume.tw';
import PropTypes from 'prop-types';

const RecipeResume = ({ title, prep, cooking, total, serving }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Para>Recipe details and informations</Para>
      </Header>
      <Content>
        <div>
          <TableWrapperGray>
            <Dt>Prep Time</Dt>
            <Dd>{prep} mins</Dd>
          </TableWrapperGray>
          <TableWrapperWhite>
            <Dt>Cook Time</Dt>
            <Dd>{cooking} mins</Dd>
          </TableWrapperWhite>
          <TableWrapperGray>
            <Dt>Total Time</Dt>
            <Dd>{total} mins</Dd>
          </TableWrapperGray>
          <TableWrapperWhite>
            <Dt>Servings</Dt>
            <Dd>{serving} servings</Dd>
          </TableWrapperWhite>
        </div>
      </Content>
    </Wrapper>
  );
};

RecipeResume.propTypes = {
  title: PropTypes.string,
  prep: PropTypes.string,
  cooking: PropTypes.string,
  total: PropTypes.string,
  serving: PropTypes.string,
};

export default RecipeResume;
