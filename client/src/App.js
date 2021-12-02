import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import LandingPage from './components/Landing-Page';
import Home from './components/Home';
import RecipeDetail from './components/Recipe-Detail';
import CreateRecipe from './components/Create-Recipe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route exact path='/home/recipes' element={<Home />}>
            <Route exact path='/home/recipes/:idRecipe' element={<RecipeDetail />} />
          </Route>
          <Route exact path='/home/recipe' element={<CreateRecipe />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
