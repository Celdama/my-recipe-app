import React from 'react';
import {
  Wrapper,
  Title,
  OrderedList,
  ListItem,
  Span,
  Step,
} from './recipeStepsTimeline.tw';

const RecipeStepsTimeline = ({ steps }) => {
  return (
    <Wrapper>
      <Title>Methods</Title>
      <OrderedList>
        {steps.map((step, i) => {
          return (
            <ListItem key={i}>
              <Span>{i + 1}</Span>
              <Step>{step}</Step>
            </ListItem>
          );
        })}
      </OrderedList>
    </Wrapper>
  );
};

export default RecipeStepsTimeline;
