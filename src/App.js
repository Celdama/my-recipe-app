import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes, toggleLoader } from './store/actions/recipesAction';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import { RecipesListStore } from './Components/RecipesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecipeDetailStore } from './Components/RecipeDetail';
import Discover from './Components/Discover';
import ForYou from './Components/ForYou';
import Favourite from './Components/Favourite';
import MyRecipes from './Components/MyRecipes';
import AddRecipeForm from './Components/AddRecipeForm';
import NoMatch from './Components/404';
import YourProfile from './Components/YourProfile';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/fbConfig';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className='App bg-white'>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Main>
          <Routes>
            <Route exact path='/' element={<RecipesListStore />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/for-you' element={<ForYou />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/my-recipes' element={<MyRecipes />} />
            <Route path='/add-recipe' element={<AddRecipeForm />} />
            <Route path='/recipe/:id' element={<RecipeDetailStore />} />
            <Route path='/profile' element={<YourProfile />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
};

export default App;
