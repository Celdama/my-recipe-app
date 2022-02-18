import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentRecipeSelector } from '../../store/selectors/currentRecipeSelector';
import { getCurrentRecipe } from '../../store/actions/currentRecipeAction';
import Spinner from '../Spinner';
import { Wrapper } from './recipeDetail.tw';
import { editRecipe } from '../../store/actions/recipesAction';

export const RecipeDetail = ({ recipe, isLoading }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editRecipeData, setEditRecipeData] = useState({ ...recipe });
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipe) {
      setEditRecipeData(recipe);
    }
  }, [recipe]);

  const handleEditRecipe = (e) => {
    const { name, value } = e.target;

    setEditRecipeData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmitEditRecipe = async (e) => {
    e.preventDefault();
    await dispatch(editRecipe(editRecipeData));
    dispatch(getCurrentRecipe(editRecipeData.customId));
    setEditToggle(!editToggle);
  };

  let recipeContent;
  if (recipe) {
    const { title, author, imgUrl, desc } = recipe;

    editToggle
      ? (recipeContent = (
          <div>
            <form onSubmit={(e) => handleSubmitEditRecipe(e)}>
              <h1>Title:</h1>
              <input
                type='text'
                className='outline'
                name='title'
                onChange={(e) => handleEditRecipe(e)}
                defaultValue={title}
              />
              <input type='submit' value='save edit' />
            </form>
          </div>
        ))
      : (recipeContent = (
          <div>
            <h1>Title: {title}</h1>
            <h6>{author}</h6>
            <img src={imgUrl} alt='recipe' />
            <p>{desc}</p>
          </div>
        ));
  }
  return (
    <Wrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col'>
          <button
            className='btn bg-blue-300'
            onClick={() => setEditToggle(!editToggle)}
          >
            edit
          </button>
          {recipeContent}
        </div>
      )}
    </Wrapper>
  );
};

export const RecipeDetailStore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchCurrentRecipe = useCallback(() => {
    dispatch(getCurrentRecipe(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetchCurrentRecipe();
  }, [fetchCurrentRecipe]);

  const currentRecipe = useSelector(currentRecipeSelector)[0];

  return <RecipeDetail recipe={currentRecipe} />;
};
