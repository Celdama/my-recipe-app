import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/usersSelector';
import { recipesSelector } from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/actions/usersAction';
import Spinner from '../Spinner';

export const ChefDetails = ({ chefId, chefs, recipes }) => {
  const chef = chefs.filter((chef) => chef.uid === chefId)[0];
  const chefRecipe = recipes.filter(
    (recipe) => recipe.authorEmail === chef.email
  );
  return (
    <div>
      {!!chef ? (
        <>
          <h1>{chef.userName}</h1>
          <h4>{chef.email}</h4>
          {
            <>
              <p>Number of recipes : {chefRecipe.length}</p>
              <div className='flex flex-wrap justify-center'>
                {chefRecipe.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </>
          }
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export const ChefDetailsStore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUsers());
    };

    fetchData();
  }, [dispatch]);

  const { id } = useParams();
  const chefs = useSelector(usersSelector);
  const recipes = useSelector(recipesSelector);

  return (
    <>
      {!!chefs && !!recipes && (
        <ChefDetails chefId={id} chefs={chefs} recipes={recipes} />
      )}
    </>
  );
};
