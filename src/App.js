import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from './store/actions/recipesAction';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import { RecipesStore } from './Components/Recipes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Main>
        <RecipesStore />
      </Main>
    </div>
  );
};

export default App;
