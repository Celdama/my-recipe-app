import React from 'react';
import {
  Wrapper,
  StepsList,
  ListItem,
  Span,
  Step,
} from './recipeStepsTimeline.tw';

const RecipeStepsTimeline = ({ steps }) => {
  return (
    <Wrapper>
      <h3 className='title-section-recipe-detail'>Methods</h3>
      <StepsList>
        {steps.map((step, i) => {
          return (
            <ListItem key={i}>
              <Span>{i + 1}</Span>
              <Step>{step}</Step>
            </ListItem>
          );
        })}
      </StepsList>
    </Wrapper>
  );
};

export default RecipeStepsTimeline;
