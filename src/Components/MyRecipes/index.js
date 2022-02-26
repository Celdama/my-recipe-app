import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';
import { recipesSelector } from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';

export const MyRecipes = ({ recipes, authUser }) => {
  const myRecipesContent = (recipesList, userId) => {
    if (authUser.uid === undefined) {
      return <p>you need to be connected to see your recipes list</p>;
    }

    if (recipesList.length < 1) {
      return <p>no recipes</p>;
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
      {!!authUser.uid && <h1>This is your delicious recipes list</h1>}
      {recipesContent}
    </div>
  );
};

export const MyRecipesStore = () => {
  const authUser = useSelector(authSelector);
  const recipes = useSelector(recipesSelector);

  return <MyRecipes recipes={recipes} authUser={authUser} />;
};
