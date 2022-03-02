import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../store/actions/usersAction';
import { usersSelector } from '../../../store/selectors/usersSelector';
import ChefCard from '../ChefCard';
import Spinner from '../../Layout/Spinner';
import CallToAction from '../../CallToAction';

export const ChefsList = ({ chefs }) => {
  const chefsContent =
    chefs && chefs.map((chef) => <ChefCard key={chef.uid} chef={chef} />);

  const topText = 'Ready to join the team?';
  const bottomText = 'Create an account and add your first recipe.';

  return (
    <div className='flex flex-col items-center min-h-screen'>
      {!chefs.length ? (
        <Spinner />
      ) : (
        <>
          <div className='flex flex-col items-center'>
            <h1 className='mb-4 text-5xl md:text-6xl font-bold'>
              From the kitchens
            </h1>
            <p className='text-lg text-slate-600'>
              Find the list of chefs who share delicious recipes.
            </p>
          </div>
          <div className='flex justify-center md:justify-around flex-wrap gap-10 py-28'>
            {chefsContent}
          </div>
          <CallToAction topText={topText} bottomText={bottomText} />
        </>
      )}
    </div>
  );
};

export const ChefsListStore = () => {
  const dispatch = useDispatch();
  const chefs = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <ChefsList chefs={chefs} />;
};
