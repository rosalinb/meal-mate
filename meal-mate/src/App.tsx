import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar'

import { Routes, Route, Link } from "react-router-dom";
import Cuisine from './components/Cuisine';
import Calories from './components/Calories';
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (

      <div className="App">
        <nav>
          <NavBar/>
        </nav>
        {/* <Home/> */}

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine/>} />
        <Route path="/calories" element={<Calories/>} />
        <Route path="/recipe-details/:recipeId" element={<RecipeDetails/>} />


      </Routes>

      </div>

  );
}

export default App;
