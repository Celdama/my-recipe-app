import React, {
  useCallback,
  Fragment,
  useRef,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentRecipeSelector } from '../../store/selectors/currentRecipeSelector';
import { getCurrentRecipe } from '../../store/actions/currentRecipeAction';
import Spinner from '../Spinner';
import { Wrapper } from './recipeDetail.tw';
import { editRecipe } from '../../store/actions/recipesAction';
import Avatar from '../../Images/celdama.png';
import { Dialog, Transition } from '@headlessui/react';
import RecipeResume from '../RecipeResume';
import RecipeIngredients from '../RecipeIngredients';
import RecipeStepsTimeline from '../RecipeStepsTimeline';

export const RecipeDetail = ({ recipe }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [editToggle, setEditToggle] = useState(false);
  const [editRecipeData, setEditRecipeData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    // if (recipe) {
    setEditRecipeData({ ...recipe });
    // }
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

  const handleDeleteIngredient = (i) => {
    setEditRecipeData({
      ...editRecipeData,
      ingredients: editRecipeData.ingredients.filter(
        (item, index) => index !== i
      ),
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

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setEditRecipeData({
      ...editRecipeData,
      ingredients: [...editRecipeData.ingredients, ''],
    });
  };

  const handleSubmitEditRecipe = async (e) => {
    e.preventDefault();
    await dispatch(editRecipe(editRecipeData));
    setOpen(false);
    dispatch(getCurrentRecipe(editRecipeData.customId));
    setEditToggle(!editToggle);
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
        <div>
          <div className='pb-14'>
            <div className='md:w-2/3 mx-auto'>
              <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                {title}
              </h1>
              <p className='my-4 text-gray-500'>{desc}</p>
            </div>
            <div className='md:w-2/3 mx-auto flex items-center justify-between'>
              <div className='flex items-center'>
                <img
                  className='h-8 w-8 rounded-full mr-3'
                  src={Avatar}
                  alt=''
                />
                <h6 className='text-gray-900'>
                  <span className='text-gray-500'>by</span>{' '}
                  <span className='underline'>{author}</span>
                </h6>
              </div>
              <div className='flex gap-2'>
                <button
                  onClick={() => setOpen(true)}
                  className='py-2 px-3 text-xs font-medium bg-indigo-500 hover:bg-indigo-400 text-white text-center rounded-lg'
                  data-modal-toggle='authentication-modal'
                >
                  Edit
                </button>
                <button className='py-2 px-3 text-xs font-medium bg-[#1da1f2] text-white text-center hover:bg-[#1da1f2]/90 rounded-lg'>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className='shadow-2xl'>
            <img className='rounded-lg' src={imgUrl} alt='recipe' />
          </div>
          <RecipeResume
            title={title}
            prep={prep}
            cooking={cooking}
            total={total}
            serving={serving}
          />
          <RecipeIngredients ingredients={ingredients} />
          <RecipeStepsTimeline steps={steps} />
        </div>
      </>
    );
  }
  return (
    <Wrapper>
      {!recipe ? (
        <Spinner />
      ) : (
        <>
          <div className='flex flex-col'>{recipeContent}</div>

          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as='div'
              className='fixed z-10 inset-0 overflow-y-auto'
              initialFocus={cancelButtonRef}
              onClose={setOpen}
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
                  <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                    <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                      <div className='sm:flex sm:items-start'>
                        <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                          <Dialog.Title
                            as='h3'
                            className='text-lg leading-6 font-medium text-gray-900'
                          >
                            Edit Recipe
                          </Dialog.Title>
                          <div className='mt-2'>
                            <form>
                              <div className='mb-6 text-sm'>
                                <label
                                  className='block mb-2 font-medium text-gray-900'
                                  htmlFor='title'
                                >
                                  Recipe Title
                                </label>
                                <input
                                  type='text'
                                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                  name='title'
                                  onChange={(e) => handleEditRecipe(e)}
                                  defaultValue={recipe.title}
                                />
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  className='block mb-2 font-medium text-gray-900'
                                  htmlFor='desc'
                                >
                                  Recipe Description
                                </label>
                                <textarea
                                  type='text'
                                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                  name='desc'
                                  onChange={(e) => handleEditRecipe(e)}
                                  defaultValue={recipe.desc}
                                ></textarea>
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  className='block mb-2 font-medium text-gray-900'
                                  htmlFor='author'
                                >
                                  Recipe Author
                                </label>
                                <input
                                  type='text'
                                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                  name='author'
                                  onChange={(e) => handleEditRecipe(e)}
                                  defaultValue={recipe.author}
                                />
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  className='block mb-2 font-medium text-gray-900'
                                  htmlFor='imgUrl'
                                >
                                  Recipe Image URL
                                </label>
                                <input
                                  type='text'
                                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                  name='imgUrl'
                                  onChange={(e) => handleEditRecipe(e)}
                                  defaultValue={recipe.imgUrl}
                                />
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  className='block mb-2 font-medium text-gray-900'
                                  htmlFor='prep'
                                >
                                  Preparation mins
                                </label>
                                <input
                                  type='number'
                                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                  name='prep'
                                  onChange={(e) => handleEditRecipe(e)}
                                  defaultValue={recipe.prep}
                                />
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  className='block mb-2 font-medium text-gray-900'
                                  htmlFor='cooking'
                                >
                                  Cooking mins
                                </label>
                                <input
                                  type='number'
                                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                  name='cooking'
                                  onChange={(e) => handleEditRecipe(e)}
                                  defaultValue={recipe.cooking}
                                />
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  className='block mb-2 font-medium text-gray-900'
                                  htmlFor='total'
                                >
                                  Total mins
                                </label>
                                <input
                                  type='number'
                                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                  name='total'
                                  onChange={(e) => handleEditRecipe(e)}
                                  defaultValue={recipe.total}
                                />
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  className='block mb-2 font-medium text-gray-900'
                                  htmlFor='serving'
                                >
                                  Servings
                                </label>
                                <input
                                  type='number'
                                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                  name='serving'
                                  onChange={(e) => handleEditRecipe(e)}
                                  defaultValue={recipe.serving}
                                />
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  htmlFor='ingredient'
                                  className='block mb-2 font-medium text-gray-900'
                                >
                                  Ingredients
                                </label>
                                {open &&
                                  editRecipeData.ingredients.map(
                                    (ingredient, i) => (
                                      <div className='mb-4' key={i}>
                                        <input
                                          className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                          type='text'
                                          key={i}
                                          name='ingredient'
                                          defaultValue={ingredient}
                                          onChange={(e) =>
                                            handleEditIngredient(e, i)
                                          }
                                        />
                                        <p
                                          onClick={() =>
                                            handleDeleteIngredient(i)
                                          }
                                        >
                                          Delete this ingredient
                                        </p>
                                      </div>
                                    )
                                  )}
                                <button
                                  type='button'
                                  onClick={(e) => handleAddIngredient(e)}
                                >
                                  add new ingre
                                </button>
                              </div>
                              <div className='mb-6 text-sm'>
                                <label
                                  htmlFor='step'
                                  className='block mb-2 font-medium text-gray-900'
                                >
                                  Steps
                                </label>
                                {recipe.steps.map((step, i) => (
                                  <div className='mb-4' key={i}>
                                    <input
                                      className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5'
                                      type='text'
                                      key={i}
                                      name='step'
                                      defaultValue={step}
                                      onChange={(e) => handleEditStep(e, i)}
                                    />
                                    {/* <DeleteText
                                      onClick={() => handleDeleteIngredient(i)}
                                    >
                                      Delete this ingredient
                                    </DeleteText> */}
                                  </div>
                                ))}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                      <button
                        type='button'
                        className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
                        onClick={(e) => handleSubmitEditRecipe(e)}
                      >
                        Edit
                      </button>
                      <button
                        type='button'
                        className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                        onClick={() => setOpen(false)}
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
