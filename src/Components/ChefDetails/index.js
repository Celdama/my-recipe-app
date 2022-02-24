import React from 'react';
import { useParams } from 'react-router-dom';

export const ChefDetails = () => {
  return <div>chef details</div>;
};

export const ChefDetailsStore = () => {
  const { id } = useParams();

  console.log(id);

  return <ChefDetails />;
};
