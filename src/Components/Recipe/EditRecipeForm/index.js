import React, {
  Fragment,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { editRecipe } from '../../../store/actions/recipesAction';
import { getCurrentRecipe } from '../../../store/actions/currentRecipeAction';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../../../config/fbConfig';
import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';
import {
  Wrapper,
  Content,
  FormContainer,
  ContentBtns,
} from './editRecipeForm.tw';

export const EditRecipeForm = ({
  open,
  recipe,
  toggleEdit,
  toggleOpen,
  editRecipeInFirebase,
}) => {
  const cancelButtonRef = useRef(null);
  const [editRecipeData, setEditRecipeData] = useState();
  const [uploadNewRecipeImg, setUploadNewRecipeImg] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (recipe) {
      setEditRecipeData({ ...recipe });
    }
  }, [recipe]);

  const deleteOldImage = async () => {
    const recipeRef = ref(storage, `${recipe.imgName}`);

    try {
      await deleteObject(recipeRef);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const editRecipeInStorage = async () => {
      const imageId = nanoid();
      const imageName = `${imageId}-${title}-recipe-image`;
      const imageRef = ref(storage, `${imageName}`);

      try {
        await uploadBytes(imageRef, image);
        const url = await getDownloadURL(imageRef);
        setEditRecipeData((prevState) => {
          return {
            ...prevState,
            imgUrl: url,
            imgName: imageName,
          };
        });
      } catch (err) {
        console.log(err);
      }
    };

    if (uploadNewRecipeImg) {
      editRecipeInStorage();
    }
  }, [uploadNewRecipeImg]);

  const handleEditRecipe = (e) => {
    const { name, value } = e.target;

    setEditRecipeData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleEditIngredient = (e, i) => {
    const { value } = e.target;
    let ingredients = [...editRecipeData.ingredients];
    let item = ingredients[i];
    item = value;
    ingredients[i] = item;
    setEditRecipeData((prevState) => {
      return {
        ...prevState,
        ingredients,
      };
    });
  };

  const handleEditStep = (e, i) => {
    const { value } = e.target;

    let steps = [...editRecipeData.steps];
    let item = steps[i];
    item = value;
    steps[i] = item;
    setEditRecipeData((prevState) => {
      return {
        ...prevState,
        steps,
      };
    });
  };

  const handleAddIngredient = () => {
    setEditRecipeData((prevState) => {
      return {
        ...prevState,
        ingredients: [...prevState.ingredients, ''],
      };
    });
  };

  const handleAddStep = () => {
    setEditRecipeData({
      ...editRecipeData,
      steps: [...editRecipeData.steps, ''],
    });
  };

  const handleDeleteIngredient = (i) => {
    setEditRecipeData({
      ...editRecipeData,
      ingredients: editRecipeData.ingredients.filter(
        (item, index) => index !== i
      ),
    });
  };

  const handleDeleteStep = (i) => {
    setEditRecipeData({
      ...editRecipeData,
      steps: editRecipeData.steps.filter((item, index) => index !== i),
    });
  };

  const handleSubmitEditRecipe = async (e) => {
    e.preventDefault();
    if (uploadNewRecipeImg) {
      await deleteOldImage();
    }
    await editRecipeInFirebase(editRecipeData);
    await toggleOpen();
    await toggleEdit();
    setImage(null);
    setUploadNewRecipeImg(false);
  };

  const handleImageEdit = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setUploadNewRecipeImg(true);
    }
  };

  const { title, desc, imgUrl, prep, cooking, total, serving } = recipe;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={toggleOpen}
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
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <Content>
              <FormContainer>
                <Dialog.Title
                  as='h3'
                  className='text-xl leading-6 font-bold border-b-2 pb-5 text-gray-900'
                >
                  Edit Recipe
                </Dialog.Title>
                <div className='mt-2'>
                  <form className='form-default'>
                    <div className='input-wrapper'>
                      <label className='label-form' htmlFor='title'>
                        Recipe Title{' '}
                        <span className='text-xs italic'>
                          (max 50 characters)
                        </span>
                      </label>
                      <input
                        type='text'
                        className='input-form'
                        name='title'
                        onChange={handleEditRecipe}
                        defaultValue={title}
                        maxLength='50'
                      />
                    </div>
                    <div className='input-wrapper'>
                      <label className='label-form' htmlFor='desc'>
                        <span>
                          Recipe Description{' '}
                          <span className='text-xs italic'>
                            (max 400 characters)
                          </span>
                        </span>
                      </label>
                      <textarea
                        type='text'
                        className='input-form text-area-form'
                        name='desc'
                        onChange={handleEditRecipe}
                        defaultValue={desc}
                        maxLength='400'
                      ></textarea>
                    </div>
                    <div className='input-wrapper'>
                      <label
                        className='label-form flex justify-between'
                        htmlFor='imgUrl'
                      >
                        Recipe Image{' '}
                      </label>
                      <img src={imgUrl} className='mb-3' alt='' />
                      <span className='text-sm italic'>
                        Browse new image if you want to replace current recipe
                        img
                      </span>
                      <input
                        className='input-form'
                        type='file'
                        name='imgUrl'
                        onChange={handleImageEdit}
                        required
                      />
                    </div>
                    <div className='input-wrapper-grid'>
                      <div className='input-wrapper'>
                        <label className='label-form' htmlFor='prep'>
                          Preparation mins
                        </label>
                        <input
                          type='number'
                          className='input-form'
                          name='prep'
                          onChange={handleEditRecipe}
                          defaultValue={prep}
                        />
                      </div>
                      <div className='input-wrapper'>
                        <label className='label-form' htmlFor='cooking'>
                          Cooking mins
                        </label>
                        <input
                          type='number'
                          className='input-form'
                          name='cooking'
                          onChange={handleEditRecipe}
                          defaultValue={cooking}
                        />
                      </div>
                    </div>
                    <div className='input-wrapper-grid'>
                      <div className='input-wrapper'>
                        <label className='label-form' htmlFor='total'>
                          Total mins
                        </label>
                        <input
                          type='number'
                          className='input-form'
                          name='total'
                          onChange={handleEditRecipe}
                          defaultValue={total}
                        />
                      </div>
                      <div className='input-wrapper'>
                        <label className='label-form' htmlFor='serving'>
                          Servings
                        </label>
                        <input
                          type='number'
                          className='input-form'
                          name='serving'
                          onChange={handleEditRecipe}
                          defaultValue={serving}
                        />
                      </div>
                    </div>
                    <div className='input-wrapper'>
                      <label htmlFor='ingredient' className='label-form'>
                        Ingredients
                      </label>
                      {open &&
                        editRecipeData.ingredients.map((ingredient, i) => (
                          <div className='mb-4' key={i}>
                            <input
                              className='input-form'
                              type='text'
                              key={i}
                              name='ingredient'
                              defaultValue={ingredient}
                              onChange={(e) => handleEditIngredient(e, i)}
                            />
                            <p
                              className='delete-text-para'
                              onClick={() => handleDeleteIngredient(i)}
                            >
                              Delete this ingredient
                            </p>
                          </div>
                        ))}
                      <button
                        type='button'
                        className='default-btn form-btn'
                        onClick={handleAddIngredient}
                      >
                        add new ingredient
                      </button>
                    </div>
                    <div className='input-wrapper'>
                      <label htmlFor='step' className='label-form'>
                        Steps
                      </label>
                      {open &&
                        editRecipeData.steps.map((step, i) => (
                          <div className='mb-4' key={i}>
                            <input
                              className='input-form'
                              type='text'
                              key={i}
                              name='step'
                              defaultValue={step}
                              onChange={(e) => handleEditStep(e, i)}
                            />
                            <p
                              className='delete-text-para'
                              onClick={() => handleDeleteStep(i)}
                            >
                              Delete this step
                            </p>
                          </div>
                        ))}
                      <button
                        className='default-btn form-btn'
                        type='button'
                        onClick={handleAddStep}
                      >
                        add new step
                      </button>
                    </div>
                  </form>
                </div>
              </FormContainer>
              <ContentBtns>
                <button
                  className='default-modal-btns edit-modal-btn'
                  type='button'
                  onClick={(e) => handleSubmitEditRecipe(e)}
                >
                  Edit
                </button>
                <button
                  type='button'
                  onClick={() => toggleOpen()}
                  ref={cancelButtonRef}
                  className='default-modal-btns cancel-modal-btn'
                >
                  Cancel
                </button>
              </ContentBtns>
            </Content>
          </Transition.Child>
        </Wrapper>
      </Dialog>
    </Transition.Root>
  );
};

EditRecipeForm.propTypes = {
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
  recipe: PropTypes.object,
  toggleEdit: PropTypes.func,
  editRecipeInFirebase: PropTypes.func,
};

export const EditRecipeFormStore = ({
  open,
  toggleOpen,
  recipe,
  toggleEdit,
}) => {
  const dispatch = useDispatch();

  const editRecipeInFirebase = useCallback(
    async (data) => {
      await dispatch(editRecipe(data));
      dispatch(getCurrentRecipe(data.id));
    },
    [dispatch]
  );

  return (
    <EditRecipeForm
      open={open}
      toggleOpen={toggleOpen}
      recipe={recipe}
      toggleEdit={toggleEdit}
      editRecipeInFirebase={editRecipeInFirebase}
    />
  );
};

EditRecipeFormStore.propTypes = {
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
  recipe: PropTypes.object,
  toggleEdit: PropTypes.func,
};
