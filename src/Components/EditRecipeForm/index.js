import React, { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { editRecipe } from '../../store/actions/recipesAction';
import { getCurrentRecipe } from '../../store/actions/currentRecipeAction';

const EditRecipeForm = ({ open, recipe, toggleEdit, toggleOpen }) => {
  const cancelButtonRef = useRef(null);
  const [editRecipeData, setEditRecipeData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipe) {
      setEditRecipeData({ ...recipe });
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
    await dispatch(editRecipe(editRecipeData));
    toggleOpen();
    dispatch(getCurrentRecipe(editRecipeData.customId));
    toggleEdit();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={toggleOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
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

          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
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
                          Recipe Title
                        </label>
                        <input
                          type='text'
                          className='input-form'
                          name='title'
                          onChange={(e) => handleEditRecipe(e)}
                          defaultValue={recipe.title}
                        />
                      </div>
                      <div className='input-wrapper'>
                        <label className='label-form' htmlFor='desc'>
                          Recipe Description
                        </label>
                        <textarea
                          type='text'
                          className='input-form text-area-form'
                          name='desc'
                          onChange={(e) => handleEditRecipe(e)}
                          defaultValue={recipe.desc}
                        ></textarea>
                      </div>
                      <div className='input-wrapper'>
                        <label className='label-form' htmlFor='author'>
                          Recipe Author
                        </label>
                        <input
                          type='text'
                          className='input-form'
                          name='author'
                          onChange={(e) => handleEditRecipe(e)}
                          defaultValue={recipe.author}
                        />
                      </div>
                      <div className='input-wrapper'>
                        <label className='label-form' htmlFor='imgUrl'>
                          Recipe Image URL
                        </label>
                        <input
                          type='text'
                          className='input-form'
                          name='imgUrl'
                          onChange={(e) => handleEditRecipe(e)}
                          defaultValue={recipe.imgUrl}
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
                            onChange={(e) => handleEditRecipe(e)}
                            defaultValue={recipe.prep}
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
                            onChange={(e) => handleEditRecipe(e)}
                            defaultValue={recipe.cooking}
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
                            onChange={(e) => handleEditRecipe(e)}
                            defaultValue={recipe.total}
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
                            onChange={(e) => handleEditRecipe(e)}
                            defaultValue={recipe.serving}
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
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-700  sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={(e) => handleSubmitEditRecipe(e)}
                >
                  Edit
                </button>
                <button
                  type='button'
                  className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={() => toggleOpen()}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditRecipeForm;
