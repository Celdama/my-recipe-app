import React, { useState } from 'react';
import { Form } from './addRecipeForm.tw';
import { Transition } from '@headlessui/react';

const AddRecipeForm = () => {
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
  });

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

  const handleAddRecipe = (e) => {
    e.preventDefault();

    console.log(formData);
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
        <Form onSubmit={(e) => handleAddRecipe(e)}>
          <div className='relative z-0 mb-6 w-full group'>
            <input
              type='text'
              name='title'
              id='title'
              value={formData.title}
              onChange={(e) => handleChange(e)}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='title'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Recipe Title
            </label>
          </div>
          <div className='relative z-0 mb-6 w-full group'>
            <textarea
              id='desc'
              name='desc'
              value={formData.desc}
              onChange={(e) => handleChange(e)}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='desc'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-8 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Recipe Description
            </label>
          </div>

          <div className='relative z-0 mb-6 w-full group'>
            <input
              type='text'
              name='author'
              id='author'
              value={formData.author}
              onChange={(e) => handleChange(e)}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='author'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Recipe Author
            </label>
          </div>
          <div className='relative z-0 mb-6 w-full group'>
            <input
              type='text'
              name='imgUrl'
              id='imgUrl'
              value={formData.imgUrl}
              onChange={(e) => handleChange(e)}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='imgUrl'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Recipe Image URL
            </label>
          </div>
          <div className='grid xl:grid-cols-2 xl:gap-6'>
            <div className='relative z-0 mb-6 w-full group'>
              <input
                type='number'
                name='prep'
                id='prep'
                value={formData.prep}
                onChange={(e) => handleChange(e)}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='prep'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Preparation mins
              </label>
            </div>
            <div className='relative z-0 mb-6 w-full group'>
              <input
                type='number'
                name='cooking'
                id='cooking'
                value={formData.cooking}
                onChange={(e) => handleChange(e)}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='cooking'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Cooking mins
              </label>
            </div>
          </div>
          <div className='grid xl:grid-cols-2 xl:gap-6'>
            <div className='relative z-0 mb-6 w-full group'>
              <input
                type='number'
                name='total'
                id='total'
                value={formData.total}
                onChange={(e) => handleChange(e)}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='total'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Total mins
              </label>
            </div>
            <div className='relative z-0 mb-6 w-full group'>
              <input
                type='number'
                name='serving'
                id='serving'
                value={formData.serving}
                onChange={(e) => handleChange(e)}
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='serving'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Servings
              </label>
            </div>

            <div className='relative z-0 mb-6 w-full group'>
              {formData.ingredients.map((ingredient, i) => (
                <input
                  type='text'
                  key={i}
                  name='ingredient'
                  value={ingredient}
                  onChange={(e) => handleIngredient(e, i)}
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder='Quantity and Ingredient'
                  required
                />
              ))}

              <button
                type='button'
                className='text-green-700 mt-3 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'
                onClick={handleAddIngredient}
              >
                add ingredients
              </button>
            </div>
            <div className='relative z-0 mb-6 w-full group'>
              {formData.steps.map((step, i) => (
                <div className='flex items-center' key={i}>
                  <textarea
                    type='text'
                    name='step'
                    value={step}
                    onChange={(e) => handleStep(e, i)}
                    className='my-1 p-2 w-full text-sm text-white bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  />
                  <button
                    type='button'
                    onClick={() => handleDeleteStep(step, i)}
                    className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm  p-1 text-center mx-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                  >
                    x
                  </button>
                </div>
              ))}

              <button
                type='button'
                className='text-green-700 mt-3 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'
                onClick={handleAddStep}
              >
                add step
              </button>
            </div>
          </div>
          <button
            type='submit'
            onClick={(e) => handleAddRecipe(e)}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Add Recipe
          </button>
        </Form>
      </Transition>
    </>
  );
};

export default AddRecipeForm;
