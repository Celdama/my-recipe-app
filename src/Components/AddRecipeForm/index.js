import React, { useEffect, useState } from 'react';
import { Form } from './addRecipeForm.tw';
import { Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { addRecipe, getRecipes } from '../../store/actions/recipesAction';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const AddRecipeForm = () => {
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    author: '',
    prep: 0,
    cooking: 0,
    total: 0,
    serving: 0,
    imgUrl: '',
    ingredients: [],
    steps: [],
    favorite: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      return navigate('/');
    }
  }, [redirect, navigate]);

  const dispatch = useDispatch();

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    if (formData.title && formData.imgUrl) {
      await dispatch(addRecipe({ ...formData, customId: nanoid() }));

      dispatch(getRecipes());
      setFormData({
        title: '',
        desc: '',
        author: '',
        prep: 0,
        cooking: 0,
        total: 0,
        serving: 0,
        imgUrl: '',
        ingredients: [],
        steps: [],
        favorite: false,
      });

      setRedirect((prevState) => !prevState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleIngredient = (e, i) => {
    const ingredientsClone = [...formData.ingredients];

    ingredientsClone[i] = e.target.value;

    setFormData({
      ...formData,
      ingredients: ingredientsClone,
    });
  };

  const handleStep = (e, i) => {
    const stepsClone = [...formData.steps];

    stepsClone[i] = e.target.value;

    setFormData({
      ...formData,
      steps: stepsClone,
    });
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ''],
    });
  };

  const handleAddStep = () => {
    setFormData({
      ...formData,
      steps: [...formData.steps, ''],
    });
  };

  const handleDeleteStep = (step, i) => {
    setFormData({
      ...formData,
      steps: formData.steps.filter((item, index) => index !== i),
    });
  };

  return (
    <>
      <Transition
        appear={true}
        show={true}
        enter='transition-opacity duration-700'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <form className='p-4' action=''>
          <div className='mb-6'>
            <label
              htmlFor='title'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Recipe Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={(e) => handleChange(e)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Recipe Description
            </label>
            <textarea
              id='desc'
              name='desc'
              value={formData.desc}
              onChange={(e) => handleChange(e)}
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 '
              required
            ></textarea>
          </div>
          <div className='mb-6'>
            <label
              htmlFor='title'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Recipe Author
            </label>
            <input
              type='text'
              id='author'
              name='author'
              value={formData.author}
              onChange={(e) => handleChange(e)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='imgUrl'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Recipe Image URL
            </label>
            <input
              type='text'
              name='imgUrl'
              id='imgUrl'
              value={formData.imgUrl}
              onChange={(e) => handleChange(e)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required
            />
          </div>
          <div className='grid xl:grid-cols-2 xl:gap-6'>
            <div className='mb-6'>
              <label
                htmlFor='prep'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Preparation mins
              </label>
              <input
                type='number'
                name='prep'
                id='prep'
                value={formData.prep}
                min={0}
                onChange={(e) => handleChange(e)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='cooking'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Cooking mins
              </label>
              <input
                type='number'
                name='cooking'
                id='cooking'
                min={0}
                value={formData.cooking}
                onChange={(e) => handleChange(e)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                required
              />
            </div>
          </div>
          <div className='grid xl:grid-cols-2 xl:gap-6'>
            <div className='mb-6'>
              <label
                htmlFor='total'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Total mins
              </label>
              <input
                type='number'
                name='total'
                id='total'
                min={0}
                value={formData.total}
                onChange={(e) => handleChange(e)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                required
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='serving'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Servings
              </label>
              <input
                type='number'
                name='serving'
                id='serving'
                min={0}
                value={formData.serving}
                onChange={(e) => handleChange(e)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                required
              />
            </div>
            <div className='relative z-0 mb-6 w-full group'>
              {formData.ingredients.map((ingredient, i) => (
                <input
                  type='text'
                  key={i}
                  name='ingredient'
                  value={ingredient}
                  onChange={(e) => handleIngredient(e, i)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2'
                  placeholder='Quantity and Ingredient'
                  required
                />
              ))}
              <button
                type='button'
                className='w-full text-gray-900 mt-3 hover:text-indigo-500 border border-gray-200 hover:bg-gray-100 font-medium bg-gray-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                onClick={handleAddIngredient}
              >
                Add New Ingredient
              </button>
            </div>
            <div className='relative z-0 mb-6 w-full group'>
              {formData.steps.map((step, i) => (
                <div className='mb-4' key={i}>
                  <textarea
                    type='text'
                    name='step'
                    value={step}
                    onChange={(e) => handleStep(e, i)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                  />
                  <p
                    className='inline text-xs font-mono italic hover:cursor-pointer font-semibold leading-3 underline text-red-700 hover:text-red-500'
                    onClick={() => handleDeleteStep(step, i)}
                  >
                    Delete this step
                  </p>
                </div>
              ))}

              <button
                type='button'
                className='w-full text-gray-900 mt-3 hover:text-indigo-500 border border-gray-200 hover:bg-gray-100 font-medium bg-gray-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                onClick={handleAddStep}
              >
                Add New Step
              </button>
            </div>
          </div>
          <button
            type='submit'
            onClick={(e) => handleAddRecipe(e)}
            className='text-white bg-indigo-500 hover:bg-indigo-700  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
          >
            Add Recipe
          </button>
        </form>
      </Transition>
    </>
  );
};

export default AddRecipeForm;
