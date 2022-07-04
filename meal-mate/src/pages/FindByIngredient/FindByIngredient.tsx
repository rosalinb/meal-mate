import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import "./FindByIngredient.css";
import { FaBeer } from "react-icons/fa";

// interface IngredientProps {
//     recipeIdeas: [];

// }

export default function FindByIngredient() {
  const ApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const [ingredients, setIngredients] = useState(null);
  const [recipeIdeas, setRecipeIdeas] = useState([]);

  function searchRecipesByIngrediants() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${ApiKey}&ingredients=${ingredients}&number=10`
    )
      .then((res) => res.json())
      .then((data) => setRecipeIdeas(data));
  }

  function handleChange(event: any) {
    setIngredients(event.target.value);
  }

  return (
    <>
      <main>
        <article className="header-container">
          <section>
            <h2>Whats do you have in your pantry?</h2>
            <p>
              The first thought we get when it's time to cook is how to mix the
              available items in our party/fridge and make a delicious meal.
            </p>
            <p>
              In your journey from Pantry to Plate, we are here for your rescue!
            </p>
          </section>

          <section>
            <img src="https://i.gifer.com/Zei9.gif" alt="recipe image" />
          </section>
        </article>

        <section className="pantry-search-cointainer">
          <h3>
            <span className="span">Not sure what to cook?</span> Simply enter
            the ingredient you have or would prefer to use and we will provide
            recipe ideas for you to choose from!
          </h3>
          <Input
            variant="flushed"
            placeholder="Enter items separated by comma"
            onChange={handleChange}
          />
          <Button
            rightIcon={<Search2Icon />}
            colorScheme="teal"
            variant="outline"
            onClick={searchRecipesByIngrediants}
            mt="20px"
          >
            Search For Recipe Ideas
          </Button>
        </section>
      </main>

      {/* <input
          type="text"
          placeholder="enter ingrediants"
          onChange={handleChange}
        /> */}

      {/* <button onClick={searchRecipesByIngrediants}>Search</button> */}

      <section className="pantry-recipe-container">
        {recipeIdeas.map((recipe: any) => {
          return (
            <>
              <section
                className="pantry-recipe-card"
                // style={{
                //   display: "flex",
                //   justifyContent: "center",
                //   border: "1px solid teal",
                //   borderRadius: 5,
                // }}
              >
                <div key={recipe.id}>
                  <h3>{recipe.title}</h3>

                  <img src={recipe.image} alt="recipe image" />
                  <FaBeer />
                  <p>likes: {recipe.likes}</p>
                  {/* <p><RecipeDetailsByIngredient mealId={recipe.id}/></p> */}
                  <Link
                    className="recipe-link"
                    to={`/recipe-details/${recipe.id}`}
                  >
                    View Detail Recipe
                    {/* <ArrowRightIcon mx="2px" /> */}
                  </Link>
                </div>
              </section>
            </>
          );
        })}
      </section>
    </>
  );
}
