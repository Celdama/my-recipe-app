import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { addRecipe, getRecipes } from '../../../store/actions/recipesAction';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../config/fbConfig';
import { nanoid } from 'nanoid';

export const AddRecipeForm = ({ currentUser, addRecipeToFirebase }) => {
  const navigate = useNavigate();
  const [uploadRecipeImg, setUploadRecipeImg] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    authorId: currentUser.uid,
    authorPhotoURL: currentUser.photoURL,
    author: currentUser.displayName,
    authorEmail: currentUser.email,
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
    if (uploadRecipeImg) {
      addRecipeToFirebase(formData);
      setRedirect((prevState) => !prevState);
    }
  }, [uploadRecipeImg]);

  useEffect(() => {
    if (redirect) {
      return navigate('/');
    }
  }, [redirect, navigate]);

  const { title, desc, prep, cooking, total, serving, ingredients, steps } =
    formData;

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    const imageId = nanoid();

    const imageRef = ref(storage, `${imageId}-${title}-recipe-image`);

    try {
      await uploadBytes(imageRef, image);
      const url = await getDownloadURL(imageRef);
      setFormData((prevState) => {
        return {
          ...prevState,
          imgUrl: url,
        };
      });
      setUploadRecipeImg(true);
    } catch (err) {
      console.log(err);
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
    const ingredientsClone = [...ingredients];

    ingredientsClone[i] = e.target.value;

    setFormData({
      ...formData,
      ingredients: ingredientsClone,
    });
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...ingredients, ''],
    });
  };

  const handleDeleteIngredient = (i) => {
    setFormData({
      ...formData,
      ingredients: ingredients.filter((item, index) => index !== i),
    });
  };

  const handleStep = (e, i) => {
    const stepsClone = [...steps];

    stepsClone[i] = e.target.value;

    setFormData({
      ...formData,
      steps: stepsClone,
    });
  };

  const handleAddStep = () => {
    setFormData({
      ...formData,
      steps: [...steps, ''],
    });
  };

  const handleDeleteStep = (i) => {
    setFormData({
      ...formData,
      steps: steps.filter((item, index) => index !== i),
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
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
        <form className='form-default' onSubmit={handleAddRecipe}>
          <div className='input-wrapper'>
            <label className='label-form flex justify-between' htmlFor='title'>
              Recipe Title
              <span className='text-xs italic'>* required</span>
            </label>
            <input
              className='input-form'
              type='text'
              id='title'
              name='title'
              value={title}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-wrapper'>
            <label className='label-form flex justify-between' htmlFor='desc'>
              Recipe Description
              <span className='text-xs italic'>* required</span>
            </label>
            <textarea
              className='input-form text-area-form'
              id='desc'
              name='desc'
              value={desc}
              onChange={handleChange}
              rows='4'
              required
            ></textarea>
          </div>
          <div className='input-wrapper'>
            <label className='label-form flex justify-between' htmlFor='imgUrl'>
              Recipe Image
              <span className='text-xs italic'>* required</span>
            </label>
            <input
              className='input-form'
              type='file'
              name='imgUrl'
              onChange={handleImageChange}
              required
            />
          </div>
          <div className='input-wrapper-grid'>
            <div className='input-wrapper'>
              <label className='label-form flex justify-between' htmlFor='prep'>
                Preparation mins
                <span className='text-xs italic'>* required</span>
              </label>
              <input
                className='input-form'
                type='number'
                name='prep'
                id='prep'
                value={prep}
                min={0}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-wrapper'>
              <label
                className='label-form flex justify-between'
                htmlFor='cooking'
              >
                Cooking mins
                <span className='text-xs italic'>* required</span>
              </label>
              <input
                className='input-form'
                type='number'
                name='cooking'
                id='cooking'
                min={0}
                value={cooking}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='input-wrapper-grid'>
            <div className='input-wrapper'>
              <label
                className='label-form flex justify-between'
                htmlFor='total'
              >
                Total mins
                <span className='text-xs italic'>* required</span>
              </label>
              <input
                className='input-form'
                type='number'
                name='total'
                id='total'
                min={0}
                value={total}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-wrapper'>
              <label
                className='label-form flex justify-between'
                htmlFor='serving'
              >
                Servings
                <span className='text-xs italic'>* required</span>
              </label>
              <input
                className='input-form'
                type='number'
                name='serving'
                id='serving'
                min={0}
                value={serving}
                onChange={handleChange}
                required
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
                  <p
                    className='delete-text-para'
                    onClick={() => handleDeleteIngredient(i)}
                  >
                    Delete this ingredient
                  </p>
                </div>
              ))}
              <button
                className='default-btn form-btn'
                type='button'
                onClick={handleAddIngredient}
              >
                Add New Ingredient
              </button>
            </div>
            <div className='input-wrapper'>
              {steps.map((step, i) => (
                <div className='mb-4' key={i}>
                  <textarea
                    className='input-form text-area-form'
                    type='text'
                    name='step'
                    value={step}
                    onChange={(e) => handleStep(e, i)}
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
                Add New Step
              </button>
            </div>
          </div>
          <button className='default-btn blue-btn'>Add Recipe</button>
        </form>
      </Transition>
    </>
  );
};

export const AddRecipeFormStore = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelector);

  const addRecipeToFirebase = async (data) => {
    await dispatch(addRecipe({ ...data }));
    dispatch(getRecipes());
  };

  return (
    <AddRecipeForm
      currentUser={currentUser}
      addRecipeToFirebase={addRecipeToFirebase}
    />
  );
};
