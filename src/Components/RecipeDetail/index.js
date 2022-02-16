import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();

  console.log(id);

  return <div>details</div>;
};

export default RecipeDetail;
