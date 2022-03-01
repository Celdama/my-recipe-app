import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { recipesSelector } from '../../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import Spinner from '../../Layout/Spinner';

export const MyRecipes = ({ recipes, authUser }) => {
  const myRecipesContent = (recipesList, userId) => {
    if (authUser.uid === undefined) {
      return <p>you need to be connected to see your recipes list</p>;
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
        <>
          {!!authUser.uid && recipesContent.length && (
            <h1>This is your delicious recipes list</h1>
          )}
          {recipesContent}
        </>
      )}
    </div>
  );
};

export const MyRecipesStore = () => {
  const authUser = useSelector(authSelector);
  const recipes = useSelector(recipesSelector);

  return <MyRecipes recipes={recipes} authUser={authUser} />;
};
