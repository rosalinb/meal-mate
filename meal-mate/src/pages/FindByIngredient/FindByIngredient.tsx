import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Image, WrapItem } from "@chakra-ui/react";
import { Search2Icon, StarIcon, ArrowRightIcon } from "@chakra-ui/icons";

// interface IngredientProps {
//     recipeIdeas: [];

// }

export default function FindByIngredient() {
  const [ingredients, setIngredients] = useState(null);
  const [recipeIdeas, setRecipeIdeas] = useState([]);

  function searchRecipesByIngrediants() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=65493f96d9814a4e82ae17cfc6f9fdf5&ingredients=${ingredients}&number=10`
    )
      .then((res) => res.json())
      .then((data) => setRecipeIdeas(data));
  }

  function handleChange(event: any) {
    setIngredients(event.target.value);
  }

  // const recipeideas = [
  //     {
  //         "id": 640352,
  //         "title": "Cranberry Apple Crisp",
  //         "image": "https://spoonacular.com/recipeImages/640352-312x231.jpg",
  //         "imageType": "jpg",
  //         "usedIngredientCount": 1,
  //         "missedIngredientCount": 3,
  //         "missedIngredients": [
  //             {
  //                 "id": 9078,
  //                 "amount": 2.0,
  //                 "unit": "cups",
  //                 "unitLong": "cups",
  //                 "unitShort": "cup",
  //                 "aisle": "Produce",
  //                 "name": "cranberries",
  //                 "original": "2 cups fresh cranberries",
  //                 "originalName": "fresh cranberries",
  //                 "meta": [
  //                     "fresh"
  //                 ],
  //                 "extendedName": "fresh cranberries",
  //                 "image": "https://spoonacular.com/cdn/ingredients_100x100/cranberries.jpg"
  //             },
  //             {
  //                 "id": 1145,
  //                 "amount": 4.0,
  //                 "unit": "Tbs",
  //                 "unitLong": "Tbs",
  //                 "unitShort": "Tbs",
  //                 "aisle": "Milk, Eggs, Other Dairy",
  //                 "name": "unsalted butter",
  //                 "original": "1/2 stick (4 Tbs) unsalted butter, cut into cubes",
  //                 "originalName": "1/2 stick unsalted butter, cut into cubes",
  //                 "meta": [
  //                     "unsalted",
  //                     "cut into cubes"
  //                 ],
  //                 "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
  //             },
  //             {
  //                 "id": 8120,
  //                 "amount": 1.5,
  //                 "unit": "cups",
  //                 "unitLong": "cups",
  //                 "unitShort": "cup",
  //                 "aisle": "Cereal",
  //                 "name": "oats",
  //                 "original": "1 1/2 cups regular oats (not quick-cooking)",
  //                 "originalName": "regular oats (not quick-cooking)",
  //                 "meta": [
  //                     "(not quick-cooking)"
  //                 ],
  //                 "image": "https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"
  //             }
  //         ],
  //         "usedIngredients": [
  //             {
  //                 "id": 1089003,
  //                 "amount": 4.0,
  //                 "unit": "cups",
  //                 "unitLong": "cups",
  //                 "unitShort": "cup",
  //                 "aisle": "Produce",
  //                 "name": "granny smith apples",
  //                 "original": "4 cups Granny Smith apples, chopped into ½ inch chunks",
  //                 "originalName": "Granny Smith apples, chopped into ½ inch chunks",
  //                 "meta": [
  //                     "chopped"
  //                 ],
  //                 "image": "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png"
  //             }
  //         ],
  //         "unusedIngredients": [],
  //         "likes": 11
  //     }
  // ]

  return (
    <div>
      <div>
        <h1>Whats do you have in your pantry?</h1>
        <h5>
          Not sure what to cook? Simply enter the ingredient you have or would
          prefer to use and we will provide recipe ideas for you to choose from!
        </h5>
        <Input
          variant="flushed"
          placeholder="Enter items separated by comma"
          onChange={handleChange}
        />
        {/* <input
          type="text"
          placeholder="enter ingrediants"
          onChange={handleChange}
        /> */}
        <Button
          rightIcon={<Search2Icon />}
          colorScheme="teal"
          variant="outline"
          onClick={searchRecipesByIngrediants}
          mt="20px"
        >
          Search For Recipe Ideas
        </Button>
        {/* <button onClick={searchRecipesByIngrediants}>Search</button> */}
      </div>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gap: 25,
          marginBottom: 100,
          marginTop: 50,
        }}
      >
        {recipeIdeas.map((recipe: any) => {
          return (
            <>
              <WrapItem
                key={recipe.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid teal",
                  borderRadius: 5,
                }}
              >
                <div key={recipe.id}>
                  <h1>{recipe.title}</h1>
                  <Image
                    borderRadius="20px"
                    boxSize="150px"
                    src={recipe.image}
                    alt="recipe image"
                  />

                  <p>
                    <StarIcon />
                    likes: {recipe.likes}
                  </p>
                  {/* <p><RecipeDetailsByIngredient mealId={recipe.id}/></p> */}
                  <Link to={`/recipe-details/${recipe.id}`}>
                    {" "}
                    View Detail Recipe
                    <ArrowRightIcon mx="2px" />
                  </Link>
                </div>
              </WrapItem>
            </>
          );
        })}
      </section>
    </div>
  );
}
