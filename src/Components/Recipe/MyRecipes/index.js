import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { recipesSelector } from '../../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import Spinner from '../../Layout/Spinner';
import CallToAction from '../../CallToAction';

export const MyRecipes = ({ recipes, authUser }) => {
  const topText = 'You need to be connected to see your recipes list';
  const bottomText = 'Create an account and add your first recipe.';

  const myRecipesContent = (recipesList, userId) => {
    if (authUser.uid === undefined) {
      return <CallToAction topText={topText} bottomText={bottomText} />;
    }

    if (!recipesList.some((recipe) => recipe.authorId === userId)) {
      return <p>no recipes, you need to add at least one recipe</p>;
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
        <Spinner />
      ) : (
        <div>
          {!!authUser.uid && recipesContent.length && (
            <h1>This is your delicious recipes list</h1>
          )}
          {recipesContent}
        </div>
      )}
    </div>
  );
};

export const MyRecipesStore = () => {
  const authUser = useSelector(authSelector);
  const recipes = useSelector(recipesSelector);

  return <MyRecipes recipes={recipes} authUser={authUser} />;
};
