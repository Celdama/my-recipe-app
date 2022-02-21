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
import EditRecipeForm from '../EditRecipeForm';

export const RecipeDetail = ({ recipe }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [editToggle, setEditToggle] = useState(false);
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

  const toggleOpen = () => {
    setOpen(!open);
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
          <EditRecipeForm
            toggleOpen={toggleOpen}
            open={open}
            recipe={recipe}
            handleEditRecipe={handleEditRecipe}
            editRecipeData={editRecipeData}
            handleEditIngredient={handleEditIngredient}
            handleDeleteIngredient={handleDeleteIngredient}
            handleEditStep={handleEditStep}
            handleDeleteStep={handleDeleteStep}
            handleAddIngredient={handleAddIngredient}
            handleAddStep={handleAddStep}
            handleSubmitEditRecipe={handleSubmitEditRecipe}
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
