import React,{Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Createrecipes from './Createrecipes';
import Home from './Home';
import RecipeDetails from './RecipeDetails';
import Recipes from './ViewRecipes';

function App() {
  return (
    <Router>
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/recipes' element={<Recipes />}/>
        <Route exact path='/createrecipes' element={<Createrecipes />}/>
        <Route exact path='/recipes/:id' element={<RecipeDetails />}/>
      </Routes>
    </Fragment>
  </Router>
  )
}

export default App;
