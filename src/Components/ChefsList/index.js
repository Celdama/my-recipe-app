import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store/actions/usersAction';
import { usersSelector } from '../../store/selectors/usersSelector';
import ChefCard from '../ChefCard';
import Spinner from '../Spinner';

export const ChefsList = ({ chefs }) => {
  const chefsContent =
    chefs && chefs.map((chef) => <ChefCard key={chef.uid} chef={chef} />);

  return (
    <div>
      {!chefs.length ? (
        <Spinner />
      ) : (
        <>
          <h1>find the list of users who share delicious recipes</h1>
          <div className='flex justify-center md:justify-around flex-wrap gap-10 pt-12'>
            {chefsContent}
          </div>
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
