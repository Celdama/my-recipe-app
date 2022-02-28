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
  const chefRecipe =
    chef.email && recipes.filter((recipe) => recipe.authorEmail === chef.email);
  console.log(chef);
  console.log('herer');
  return (
    <div>
      {chef.email ? (
        <>
          <div className='flex flex-col items-center pt-12 pb-20'>
            <h1 className='mb-4 text-5xl md:text-6xl font-bold'>
              {chef.userName}
            </h1>
            <h4 className='tex-lg text-slate-600'>{chef.email}</h4>
            <p
              className='inline-flex items-center text-sm font-semibold  text-center
            text-indigo-600 hover:text-indigo-700'
            >
              {chefRecipe.length} recipe{chefRecipe.length > 1 ? 's' : ''}
            </p>
          </div>
          {
            <div className='flex flex-wrap justify-center'>
              {chefRecipe.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
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
    const fetchData = () => {
      dispatch(getUsers());
    };

    fetchData();
  }, [dispatch]);

  const { id } = useParams();
  const chefs = useSelector(usersSelector);
  const recipes = useSelector(recipesSelector);
  console.log(chefs);

  return (
    <>
      {!!chefs && !!recipes && (
        <ChefDetails chefId={id} chefs={chefs} recipes={recipes} />
      )}
    </>
  );
};
