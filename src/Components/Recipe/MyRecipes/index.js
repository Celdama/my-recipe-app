import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { recipesSelector } from '../../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import Spinner from '../../Layout/Spinner';
import CallToAction from '../../CallToAction';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MyRecipes = ({ recipes, authUser }) => {
  const topText = 'You need to be connected to see your recipes list';
  const bottomText = 'Create an account and add your first recipe.';

  const myRecipesContent = (recipesList, userId) => {
    if (authUser.uid === undefined) {
      return <CallToAction topText={topText} bottomText={bottomText} />;
    }

    if (!recipesList.some((recipe) => recipe.authorId === userId)) {
      return (
        <div className='flex flex-col items-center py-20'>
          <p className='text-center text-lg text-slate-600'>
            No recipes, you need to add at least one recipe
          </p>
          <Link
            to='/add-recipe'
            className='inline-flex mt-6 items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
          >
            Add your first recipe
          </Link>
        </div>
      );
    } else {
      return recipesList.map((recipe) =>
        recipe.authorId === userId ? (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ) : null
      );
    }
  };

  const recipesContent = recipes && myRecipesContent(recipes, authUser.uid);

  return (
    <div>
      {!recipes.length ? (
        <div className='flex justify-center'>
          <Spinner />
        </div>
      ) : (
        <div>
          {!!authUser.uid && recipesContent.length && (
            <h1 className='text-center text-lg text-slate-600 mb-16'>
              This is your delicious recipes list
            </h1>
          )}
          <div className='flex justify-between flex-wrap'>{recipesContent}</div>
        </div>
      )}
    </div>
  );
};

MyRecipes.propTypes = {
  recipes: PropTypes.array,
  authUser: PropTypes.object,
};

export const MyRecipesStore = () => {
  const authUser = useSelector(authSelector);
  const recipes = useSelector(recipesSelector);

  return <MyRecipes recipes={recipes} authUser={authUser} />;
};
