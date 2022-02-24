import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/usersSelector';
import { recipesSelector } from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/actions/usersAction';

export const ChefDetails = ({ chef, chefRecipes }) => {
  return (
    <div>
      {chef && chefRecipes && (
        <>
          <h1>{chef.userName}</h1>
          <h4>{chef.email}</h4>
          <p>Number of recipes : {chefRecipes.length}</p>
          <div className='flex flex-wrap justify-center'>
            {chefRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const ChefDetailsStore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { id } = useParams();
  const chefs = useSelector(usersSelector);
  const recipes = useSelector(recipesSelector);
  const chef = chefs.filter((chef) => chef.uid === id)[0];
  const chefRecipes = recipes.filter(
    (recipe) => recipe.authorEmail === chef.email
  );

  return <ChefDetails chef={chef} chefRecipes={chefRecipes} />;
};
