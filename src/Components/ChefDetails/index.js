import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/usersSelector';
import { recipesSelector } from '../../store/selectors/recipesSelector';
import RecipeCard from '../RecipeCard';
import Spinner from '../Spinner';

export const ChefDetails = ({ chefs, recipes, id }) => {
  const [currentChef, setCurrentChef] = useState({});
  const [currentChefRecipes, setCurrentChefsRecipes] = useState([]);

  useEffect(() => {
    const setUpData = async () => {
      const chef = chefs.filter((chef) => chef.uid === id)[0];
      if (chef) {
        const chefRecipes = recipes.filter(
          (recipe) => recipe.authorEmail === chef.email
        );

        setCurrentChefsRecipes(chefRecipes);
      }
      await setCurrentChef(chef);
    };

    setUpData();
  }, [chefs, recipes, id]);

  return (
    <div>
      {currentChef ? (
        <>
          <div className='flex flex-col items-center pt-12 pb-20'>
            <h1 className='mb-4 text-5xl md:text-6xl font-bold'>
              {currentChef.userName}
            </h1>
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
        </>
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
