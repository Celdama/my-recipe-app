import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from './store/actions/recipesAction';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import { RecipesListStore } from './Components/RecipesList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { RecipeDetailStore } from './Components/RecipeDetail';
import Discover from './Components/Discover';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <BrowserRouter>
        <Main>
          <Routes>
            <Route exact path='/' element={<RecipesListStore />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/recipe/:id' element={<RecipeDetailStore />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
};

export default App;
