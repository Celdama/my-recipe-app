import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../../store/selectors/usersSelector';
import { recipesSelector } from '../../../store/selectors/recipesSelector';
import RecipeCard from '../../Recipe/RecipeCard';
import Spinner from '../../Layout/Spinner';

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

  return (
    <div className='flex flex-col items-center '>
      {currentChef ? (
        <div>
          <div className='flex flex-col items-center  pt-8 pb-20'>
            <img
              className='w-48 h-48 rounded-3xl mb-5'
              src={currentChef.avatar}
              alt='avatar'
            />
            <h1 className='text-4xl font-bold'>{currentChef.userName}</h1>
            <h4 className='tex-lg text-slate-600'>{currentChef.email}</h4>
            <p
              className='inline-flex items-center text-sm font-semibold  text-center
            text-indigo-600 hover:text-indigo-700'
            >
              {currentChefRecipes.length} recipe
              {currentChefRecipes.length > 1 ? 's' : ''}
            </p>
          </div>
          {
            <div className='flex flex-wrap justify-center'>
              {currentChefRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          }
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export const ChefDetailsStore = () => {
  const { id } = useParams();
  const chefs = useSelector(usersSelector);
  const recipes = useSelector(recipesSelector);

  return (
    <>
      <ChefDetails chefs={chefs} recipes={recipes} id={id} />
    </>
  );
};
