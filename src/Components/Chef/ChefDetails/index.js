import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../../store/selectors/usersSelector';
import { recipesSelector } from '../../../store/selectors/recipesSelector';
import RecipeCard from '../../Recipe/RecipeCard';
import Spinner from '../../Layout/Spinner';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ChefInfoContent,
  ChefInfoRecipes,
  Username,
  Avatar,
  UserEmail,
  RecipeResume,
} from './chefDetails.tw';

export const ChefDetails = ({ chefs, recipes, id }) => {
  const [currentChef, setCurrentChef] = useState({});
  const [currentChefRecipes, setCurrentChefsRecipes] = useState([]);

  useEffect(() => {
    const setUpData = () => {
      const chef = chefs.filter((chef) => chef.uid === id)[0];
      if (chef) {
        const chefRecipes = recipes.filter(
          (recipe) => recipe.authorEmail === chef.email
        );

        setCurrentChefsRecipes(chefRecipes);
      }
      setCurrentChef(chef);
    };

    setUpData();
  }, [chefs, recipes, id]);

  const currentChefRecipesList = currentChefRecipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <Wrapper>
      {!currentChef ? (
        <Spinner />
      ) : (
        <>
          <ChefInfoContent>
            <Avatar src={currentChef.avatar} alt='avatar' />
            <Username>{currentChef.userName}</Username>
            <UserEmail>{currentChef.email}</UserEmail>
            <RecipeResume>
              {currentChefRecipes.length} recipe
              {currentChefRecipes.length > 1 ? 's' : ''}
            </RecipeResume>
          </ChefInfoContent>
          <ChefInfoRecipes>{currentChefRecipesList}</ChefInfoRecipes>
        </>
      )}
    </Wrapper>
  );
};

ChefDetails.propTypes = {
  chefs: PropTypes.array,
  recipes: PropTypes.array,
  id: PropTypes.string,
};

export const ChefDetailsStore = () => {
  const { id } = useParams();
  const chefs = useSelector(usersSelector);
  const recipes = useSelector(recipesSelector);

  return <ChefDetails chefs={chefs} recipes={recipes} id={id} />;
};
