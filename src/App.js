import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from './store/actions/recipesAction';
import { NavbarStore } from './Components/Layout/Navbar';
import Header from './Components/Layout/Header';
import Main from './Components/Main';
import { RecipesListStore } from './Components/Recipe/RecipesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecipeDetailStore } from './Components/RecipeDetail';
import ForYou from './Components/ForYou';
import Favourite from './Components/Favourite';
import { MyRecipesStore } from './Components/MyRecipes';
import { AddRecipeFormStore } from './Components/AddRecipeForm';
import NoMatch from './Components/Layout/404';
import { YourProfileStore } from './Components/YourProfile';
import { SignInStore } from './Components/Auth/SignIn';
import { SignUpStore } from './Components/Auth/SignUp';
import { monitorAuthState } from './store/actions/authAction';
import { RequireAuth, RequireNotBeAuth } from './Helpers/requireAuth';
import { ChefsListStore } from './Components/Chef/ChefsList';
import { ChefDetailsStore } from './Components/ChefDetails';
import { getUsers } from './store/actions/usersAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(monitorAuthState());
    dispatch(getRecipes());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className='App bg-white'>
      <BrowserRouter>
        <NavbarStore />
        <Header />
        <Main>
          <Routes>
            <Route exact path='/' element={<RecipesListStore />} />
            <Route path='/for-you' element={<ForYou />} />
            <Route
              path='/favourite'
              element={
                <RequireAuth redirectTo={'/signup'}>
                  <Favourite />
                </RequireAuth>
              }
            />
            <Route path='/chefs' element={<ChefsListStore />} />
            <Route path='/my-recipes' element={<MyRecipesStore />} />
            <Route path={'/chef/:id'} element={<ChefDetailsStore />} />
            <Route
              path='/add-recipe'
              element={
                <RequireAuth redirectTo={'/signin'}>
                  <AddRecipeFormStore />
                </RequireAuth>
              }
            />
            <Route path='/recipe/:id' element={<RecipeDetailStore />} />
            <Route
              path='/profile'
              element={
                <RequireAuth redirectTo={'/signup'}>
                  <YourProfileStore />
                </RequireAuth>
              }
            />
            <Route
              path='/signin'
              element={
                <RequireNotBeAuth redirectTo={'/'}>
                  <SignInStore />
                </RequireNotBeAuth>
              }
            />
            <Route
              path='signup'
              element={
                <RequireNotBeAuth redirectTo={'/'}>
                  <SignUpStore />
                </RequireNotBeAuth>
              }
            />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
};

export default App;
