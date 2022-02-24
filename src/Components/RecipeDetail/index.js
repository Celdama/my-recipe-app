import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentRecipeSelector } from '../../store/selectors/currentRecipeSelector';
import { getCurrentRecipe } from '../../store/actions/currentRecipeAction';
import Spinner from '../Spinner';
import RecipeResume from '../RecipeResume';
import RecipeIngredients from '../RecipeIngredients';
import RecipeStepsTimeline from '../RecipeStepsTimeline';
import { EditRecipeFormStore } from '../EditRecipeForm';
import { authSelector } from '../../store/selectors/authSelector';
import { DeleteRecipeModalStore } from '../DeleteRecipeModal';
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

export const RecipeDetail = ({ recipe, authUser }) => {
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
      authorPhotoURL,
      authorEmail,
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
              <RoundedAvatar src={authorPhotoURL} alt='avatar' />
              <Author>
                <span className='text-gray-500 mr-2'>by</span>
                <span className='underline'>{author}</span>
              </Author>
            </RecipeHeaderBottomLeft>
            {authUser.email === authorEmail ? (
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
            ) : null}
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
        {ingredients && <RecipeIngredients ingredients={ingredients} />}
        {steps && <RecipeStepsTimeline steps={steps} />}
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
          <EditRecipeFormStore
            open={open}
            toggleOpen={toggleOpen}
            recipe={recipe}
            toggleEdit={toggleEdit}
          />
          <DeleteRecipeModalStore
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
  const authUser = useSelector(authSelector);

  const fetchCurrentRecipe = useCallback(() => {
    dispatch(getCurrentRecipe(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetchCurrentRecipe();
  }, [fetchCurrentRecipe]);

  const currentRecipe = useSelector(currentRecipeSelector);

  return <RecipeDetail recipe={currentRecipe} authUser={authUser} />;
};
