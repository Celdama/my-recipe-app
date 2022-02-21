import React, { useEffect, useState } from 'react';
import {
  Form,
  InputWrapper,
  InputWrapperGrid,
  Label,
  Input,
  Textarea,
  FormBtn,
  AddRecipeBtn,
  DeleteText,
} from './addRecipeForm.tw';
import { Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { addRecipe, getRecipes } from '../../store/actions/recipesAction';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (redirect) {
      return navigate('/');
    }
  }, [redirect, navigate]);

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

  const handleDeleteStep = (i) => {
    setFormData({
      ...formData,
      steps: formData.steps.filter((item, index) => index !== i),
    });
  };

  const handleDeleteIngredient = (i) => {
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter((item, index) => index !== i),
    });
  };

  const {
    title,
    desc,
    author,
    imgUrl,
    prep,
    cooking,
    total,
    serving,
    ingredients,
    steps,
  } = formData;

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
        <Form>
          <div className='input-wrapper'>
            <label className='label-form' htmlFor='title'>
              Recipe Title
            </label>
            <input
              className='input-form'
              type='text'
              id='title'
              name='title'
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='input-wrapper'>
            <label className='label-form' htmlFor='desc'>
              Recipe Description
            </label>
            <Textarea
              id='desc'
              name='desc'
              value={desc}
              onChange={(e) => handleChange(e)}
              rows='4'
            ></Textarea>
          </div>
          <div className='input-wrapper'>
            <label className='label-form' htmlFor='title'>
              Recipe Author
            </label>
            <input
              className='input-form'
              type='text'
              id='author'
              name='author'
              value={author}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='input-wrapper'>
            <label className='label-form' htmlFor='imgUrl'>
              Recipe Image URL
            </label>
            <input
              className='input-form'
              type='text'
              name='imgUrl'
              id='imgUrl'
              value={imgUrl}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <InputWrapperGrid>
            <div className='input-wrapper'>
              <label className='label-form' htmlFor='prep'>
                Preparation mins
              </label>
              <input
                className='input-form'
                type='number'
                name='prep'
                id='prep'
                value={prep}
                min={0}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='input-wrapper'>
              <label className='label-form' htmlFor='cooking'>
                Cooking mins
              </label>
              <input
                className='input-form'
                type='number'
                name='cooking'
                id='cooking'
                min={0}
                value={cooking}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </InputWrapperGrid>
          <InputWrapperGrid>
            <div className='input-wrapper'>
              <label className='label-form' htmlFor='total'>
                Total mins
              </label>
              <input
                className='input-form'
                type='number'
                name='total'
                id='total'
                min={0}
                value={total}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='input-wrapper'>
              <label className='label-form' htmlFor='serving'>
                Servings
              </label>
              <input
                className='input-form'
                type='number'
                name='serving'
                id='serving'
                min={0}
                value={serving}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='input-wrapper'>
              {ingredients.map((ingredient, i) => (
                <div className='mb-4' key={i}>
                  <input
                    className='input-form'
                    type='text'
                    key={i}
                    name='ingredient'
                    value={ingredient}
                    onChange={(e) => handleIngredient(e, i)}
                    placeholder='Quantity and Ingredient'
                  />
                  <DeleteText onClick={() => handleDeleteIngredient(i)}>
                    Delete this ingredient
                  </DeleteText>
                </div>
              ))}
              <FormBtn type='button' onClick={handleAddIngredient}>
                Add New Ingredient
              </FormBtn>
            </div>
            <div className='input-wrapper'>
              {steps.map((step, i) => (
                <div className='mb-4' key={i}>
                  <Textarea
                    type='text'
                    name='step'
                    value={step}
                    onChange={(e) => handleStep(e, i)}
                  />
                  <DeleteText onClick={() => handleDeleteStep(i)}>
                    Delete this step
                  </DeleteText>
                </div>
              ))}

              <FormBtn type='button' onClick={handleAddStep}>
                Add New Step
              </FormBtn>
            </div>
          </InputWrapperGrid>
          <AddRecipeBtn type='submit' onClick={(e) => handleAddRecipe(e)}>
            Add Recipe
          </AddRecipeBtn>
        </Form>
      </Transition>
    </>
  );
};

export default AddRecipeForm;
