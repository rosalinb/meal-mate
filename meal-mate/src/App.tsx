import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import { Routes, Route, Link } from "react-router-dom";
import Cuisine from "./pages/Cuisine/Cuisine";
import Calories from "./pages/Calories/Calories";
import RecipeDetails from "./components/RecipeDetail/RecipeDetails";
import FindByIngredient from "./pages/FindByIngredient/FindByIngredient";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>

      <div style={{ marginTop: 50 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/calories" element={<Calories />} />
          <Route path="/recipe-details/:recipeId" element={<RecipeDetails />} />
          <Route path="/search-by-ingredients" element={<FindByIngredient />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
