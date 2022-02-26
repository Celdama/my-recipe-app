import React from 'react';
import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { deleteRecipe, getRecipes } from '../../store/actions/recipesAction';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  SpanAligner,
  ContentModal,
  ContentText,
  CircleIcon,
  ContentWrapper,
  ContentBtns,
} from './deleteRecipeModal.tw';

export const DeleteRecipeModal = ({
  recipe,
  openDeleteModal,
  toggleOpenDeleteModal,
  deleteRecipeInFirebase,
}) => {
  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      return navigate('/');
    }
  }, [navigate, redirect]);

  const handleDeleteRecipe = async (id) => {
    toggleOpenDeleteModal();
    await deleteRecipeInFirebase(id);
    setRedirect(true);
  };
  return (
    <div>
      <Transition.Root show={openDeleteModal} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-10 inset-0 overflow-y-auto'
          initialFocus={cancelButtonRef}
          onClose={toggleOpenDeleteModal}
        >
          <Wrapper>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <SpanAligner aria-hidden='true'>&#8203;</SpanAligner>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <ContentModal>
                <ContentText>
                  <div className='sm:flex sm:items-start'>
                    <CircleIcon>
                      <ExclamationIcon
                        className='h-6 w-6 text-red-600'
                        aria-hidden='true'
                      />
                    </CircleIcon>
                    <ContentWrapper>
                      <Dialog.Title
                        as='h3'
                        className='text-lg leading-6 font-medium text-gray-900'
                      >
                        Delete Recipe
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>
                          Are you sure you want to delete this recipe ? All of
                          your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </ContentWrapper>
                  </div>
                </ContentText>
                <ContentBtns>
                  <button
                    type='button'
                    className='default-modal-btns delete-modal-btn'
                    onClick={() => handleDeleteRecipe(recipe.id)}
                  >
                    Delete
                  </button>
                  <button
                    type='button'
                    className='default-modal-btns cancel-modal-btn'
                    onClick={() => toggleOpenDeleteModal()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </ContentBtns>
              </ContentModal>
            </Transition.Child>
          </Wrapper>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export const DeleteRecipeModalStore = ({
  recipe,
  toggleOpenDeleteModal,
  openDeleteModal,
}) => {
  const dispatch = useDispatch();

  const deleteRecipeInFirebase = (id) => {
    dispatch(deleteRecipe(id));
  };

  return (
    <DeleteRecipeModal
      recipe={recipe}
      toggleOpenDeleteModal={toggleOpenDeleteModal}
      openDeleteModal={openDeleteModal}
      deleteRecipeInFirebase={deleteRecipeInFirebase}
    />
  );
};
