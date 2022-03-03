import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../../store/selectors/usersSelector';
import ChefCard from '../ChefCard';
import Spinner from '../../Layout/Spinner';
import CallToAction from '../../CallToAction';
import { Header, Wrapper, Title, SubTitle, Content } from './chefsList.tw';
import PropTypes from 'prop-types';

export const ChefsList = ({ chefs }) => {
  const chefsContent =
    chefs && chefs.map((chef) => <ChefCard key={chef.uid} chef={chef} />);

  const topText = 'Ready to join the team?';
  const bottomText = 'Create an account and add your first recipe.';

  return (
    <Wrapper>
      {!chefs.length ? (
        <Spinner />
      ) : (
        <>
          <Header>
            <Title>From the kitchens</Title>
            <SubTitle>
              Find the list of chefs who share delicious recipes.
            </SubTitle>
          </Header>
          <Content>{chefsContent}</Content>
          <CallToAction topText={topText} bottomText={bottomText} />
        </>
      )}
    </Wrapper>
  );
};

ChefsList.propTypes = {
  chefs: PropTypes.array,
};

export const ChefsListStore = () => {
  const chefs = useSelector(usersSelector);

  return <ChefsList chefs={chefs} />;
};
