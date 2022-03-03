import React from 'react';
import {
  Wrapper,
  StepsList,
  ListItem,
  Span,
  Step,
} from './recipeStepsTimeline.tw';
import PropTypes from 'prop-types';

const RecipeStepsTimeline = ({ steps }) => {
  const stepsContent = steps.map((step, i) => {
    return (
      <ListItem key={i}>
        <Span>{i + 1}</Span>
        <Step>{step}</Step>
      </ListItem>
    );
  });

  return (
    <Wrapper>
      <h3 className='title-section-recipe-detail'>Methods</h3>
      <StepsList>{stepsContent}</StepsList>
    </Wrapper>
  );
};

RecipeStepsTimeline.propTypes = {
  steps: PropTypes.array,
};

export default RecipeStepsTimeline;
