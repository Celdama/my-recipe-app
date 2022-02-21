import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentRecipeSelector } from '../../store/selectors/currentRecipeSelector';
import { getCurrentRecipe } from '../../store/actions/currentRecipeAction';
import Spinner from '../Spinner';
import Avatar from '../../Images/celdama.png';
import RecipeResume from '../RecipeResume';
import RecipeIngredients from '../RecipeIngredients';
import RecipeStepsTimeline from '../RecipeStepsTimeline';
import EditRecipeForm from '../EditRecipeForm';
import DeleteRecipeModal from '../DeleteRecipeModal';
import {
  Wrapper,
  Content,
  RecipeHeader,
  RecipeHeaderTop,
  RecipeHeaderBottom,
  RecipeHeaderBottomLeft,
  RecipeHeaderBottomRight,
  RecipeTitle,
  RecipeDesc,
  EditBtn,
  DeleteBtn,
  RoundedAvatar,
  Author,
} from './recipeDetail.tw';

export const RecipeDetail = ({ recipe }) => {
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editToggle, setEditToggle] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleEdit = () => {
    setEditToggle(!editToggle);
  };

  const toggleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  let recipeContent;
  if (recipe) {
    const {
      title,
      author,
      imgUrl,
      desc,
      prep,
      cooking,
      total,
      serving,
      ingredients,
      steps,
    } = recipe;
    recipeContent = (
      <>
        <RecipeHeader>
          <RecipeHeaderTop>
            <RecipeTitle>{title}</RecipeTitle>
            <RecipeDesc>{desc}</RecipeDesc>
          </RecipeHeaderTop>
          <RecipeHeaderBottom>
            <RecipeHeaderBottomLeft>
              <RoundedAvatar src={Avatar} alt='avatar' />
              <Author>
                <span className='text-gray-500 mr-2'>by</span>
                <span className='underline'>{author}</span>
              </Author>
            </RecipeHeaderBottomLeft>
            <RecipeHeaderBottomRight>
              <EditBtn
                onClick={() => setOpen(true)}
                data-modal-toggle='authentication-modal'
              >
                Edit
              </EditBtn>
              <DeleteBtn onClick={() => setOpenDeleteModal(true)}>
                Delete
              </DeleteBtn>
            </RecipeHeaderBottomRight>
          </RecipeHeaderBottom>
        </RecipeHeader>
        <img className='rounded-lg' src={imgUrl} alt='recipe' />
        <RecipeResume
          title={title}
          prep={prep}
          cooking={cooking}
          total={total}
          serving={serving}
        />
        <RecipeIngredients ingredients={ingredients} />
        <RecipeStepsTimeline steps={steps} />
      </>
    );
  }
  return (
    <Wrapper>
      {!recipe ? (
        <Spinner />
      ) : (
        <>
          <Content>{recipeContent}</Content>
          <EditRecipeForm
            open={open}
            toggleOpen={toggleOpen}
            recipe={recipe}
            toggleEdit={toggleEdit}
          />
          <DeleteRecipeModal
            recipe={recipe}
            toggleOpenDeleteModal={toggleOpenDeleteModal}
            openDeleteModal={openDeleteModal}
          />
        </>
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

  const currentRecipe = useSelector(currentRecipeSelector);

  return <RecipeDetail recipe={currentRecipe[0]} />;
};
