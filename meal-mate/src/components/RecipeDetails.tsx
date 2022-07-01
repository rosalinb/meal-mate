import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
    const [recipeInfo, setRecipeInfo] = useState<any>(null)
    useEffect(() => {
            fetch(
              `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=469c4ad6473f4f928a98cb0b760f8eef&includeNutrition=false`
            ) .then ((res) => res.json())
            .then((data) => {
                setRecipeInfo(data)
              console.log(data)
            })
          },[])
    
   
    let {recipeId} = useParams();
    // console.log(recipeId);
    // const recipeInfo = {
    //     "vegetarian": false,
    //     "vegan": false,
    //     "glutenFree": true,
    //     "dairyFree": true,
    //     "veryHealthy": false,
    //     "cheap": false,
    //     "veryPopular": false,
    //     "sustainable": false,
    //     "lowFodmap": false,
    //     "weightWatcherSmartPoints": 1,
    //     "gaps": "no",
    //     "preparationMinutes": -1,
    //     "cookingMinutes": -1,
    //     "aggregateLikes": 2,
    //     "healthScore": 47,
    //     "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //     "license": "CC BY 3.0",
    //     "sourceName": "Foodista",
    //     "pricePerServing": 116.71,
    //     "extendedIngredients": [
    //         {
    //             "id": 6179,
    //             "aisle": "Ethnic Foods",
    //             "image": "asian-fish-sauce.jpg",
    //             "consistency": "LIQUID",
    //             "name": "fish sauce",
    //             "nameClean": "fish sauce",
    //             "original": "Fish sauce, to taste",
    //             "originalName": "Fish sauce, to taste",
    //             "amount": 1.0,
    //             "unit": "serving",
    //             "meta": [
    //                 "to taste"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "serving",
    //                     "unitLong": "serving"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "serving",
    //                     "unitLong": "serving"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 93831,
    //             "aisle": "Baking",
    //             "image": "brown-sugar-pile.jpg",
    //             "consistency": "SOLID",
    //             "name": "palm sugar",
    //             "nameClean": "palm sugar",
    //             "original": "Thai palm sugar, to taste",
    //             "originalName": "Thai palm sugar, to taste",
    //             "amount": 1.0,
    //             "unit": "serving",
    //             "meta": [
    //                 "to taste"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "serving",
    //                     "unitLong": "serving"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "serving",
    //                     "unitLong": "serving"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 9159,
    //             "aisle": "Produce",
    //             "image": "lime.jpg",
    //             "consistency": "SOLID",
    //             "name": "limes",
    //             "nameClean": "lime",
    //             "original": "4 limes",
    //             "originalName": "limes",
    //             "amount": 4.0,
    //             "unit": "",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 4.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 },
    //                 "metric": {
    //                     "amount": 4.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11819,
    //             "aisle": "Produce",
    //             "image": "red-chili.jpg",
    //             "consistency": "SOLID",
    //             "name": "chilli",
    //             "nameClean": "chili pepper",
    //             "original": "2 to 3 chilli padis",
    //             "originalName": "to 3 chilli padis",
    //             "amount": 2.0,
    //             "unit": "",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 2.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 },
    //                 "metric": {
    //                     "amount": 2.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11215,
    //             "aisle": "Produce",
    //             "image": "garlic.png",
    //             "consistency": "SOLID",
    //             "name": "garlic",
    //             "nameClean": "garlic",
    //             "original": "1 clove of garlic, mashed",
    //             "originalName": "garlic, mashed",
    //             "amount": 1.0,
    //             "unit": "clove",
    //             "meta": [
    //                 "mashed"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "clove",
    //                     "unitLong": "clove"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "clove",
    //                     "unitLong": "clove"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11677,
    //             "aisle": "Produce",
    //             "image": "shallots.jpg",
    //             "consistency": "SOLID",
    //             "name": "shallots",
    //             "nameClean": "shallot",
    //             "original": "2 shallots, mashed",
    //             "originalName": "shallots, mashed",
    //             "amount": 2.0,
    //             "unit": "",
    //             "meta": [
    //                 "mashed"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 2.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 },
    //                 "metric": {
    //                     "amount": 2.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 }
    //             }
    //         },
    //         {
    //             "id": 15270,
    //             "aisle": "Seafood",
    //             "image": "shrimp.png",
    //             "consistency": "SOLID",
    //             "name": "shrimps",
    //             "nameClean": "shrimp",
    //             "original": "1 tablespoon of dried shrimps, washed",
    //             "originalName": "dried shrimps, washed",
    //             "amount": 1.0,
    //             "unit": "tablespoon",
    //             "meta": [
    //                 "dried",
    //                 "washed"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "Tbsp",
    //                     "unitLong": "Tbsp"
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "Tbsp",
    //                     "unitLong": "Tbsp"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11529,
    //             "aisle": "Produce",
    //             "image": "tomato.png",
    //             "consistency": "SOLID",
    //             "name": "tomato",
    //             "nameClean": "tomato",
    //             "original": "1 tomato, cut into wedges",
    //             "originalName": "tomato, cut into wedges",
    //             "amount": 1.0,
    //             "unit": "",
    //             "meta": [
    //                 "cut into wedges"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 },
    //                 "metric": {
    //                     "amount": 1.0,
    //                     "unitShort": "",
    //                     "unitLong": ""
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11124,
    //             "aisle": "Produce",
    //             "image": "sliced-carrot.png",
    //             "consistency": "SOLID",
    //             "name": "carrot",
    //             "nameClean": "carrot",
    //             "original": "1 cup carrot, shredded",
    //             "originalName": "carrot, shredded",
    //             "amount": 1.0,
    //             "unit": "cup",
    //             "meta": [
    //                 "shredded"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 1.0,
    //                     "unitShort": "cup",
    //                     "unitLong": "cup"
    //                 },
    //                 "metric": {
    //                     "amount": 236.588,
    //                     "unitShort": "ml",
    //                     "unitLong": "milliliters"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 1019176,
    //             "aisle": "Produce",
    //             "image": "mango.jpg",
    //             "consistency": "SOLID",
    //             "name": "green mangoes",
    //             "nameClean": "green mango",
    //             "original": "3 cups raw green mangoes, shredded",
    //             "originalName": "raw green mangoes, shredded",
    //             "amount": 3.0,
    //             "unit": "cups",
    //             "meta": [
    //                 "raw",
    //                 "shredded",
    //                 "green"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 3.0,
    //                     "unitShort": "cups",
    //                     "unitLong": "cups"
    //                 },
    //                 "metric": {
    //                     "amount": 709.764,
    //                     "unitShort": "ml",
    //                     "unitLong": "milliliters"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 11199,
    //             "aisle": "Produce",
    //             "image": "chinese-long-beans.jpg",
    //             "consistency": "SOLID",
    //             "name": "yard long beans",
    //             "nameClean": "yardlong beans",
    //             "original": "2 inches long beans cut into 1 pieces",
    //             "originalName": "long beans cut into 1 pieces",
    //             "amount": 2.0,
    //             "unit": "inches",
    //             "meta": [
    //                 "cut into 1 pieces"
    //             ],
    //             "measures": {
    //                 "us": {
    //                     "amount": 2.0,
    //                     "unitShort": "inches",
    //                     "unitLong": "inches"
    //                 },
    //                 "metric": {
    //                     "amount": 2.0,
    //                     "unitShort": "inches",
    //                     "unitLong": "inches"
    //                 }
    //             }
    //         },
    //         {
    //             "id": 16092,
    //             "aisle": "Nuts;Savory Snacks",
    //             "image": "peanuts.png",
    //             "consistency": "SOLID",
    //             "name": "roasted peanuts",
    //             "nameClean": "roasted peanuts",
    //             "original": "4 tablespoons roasted coarse peanuts",
    //             "originalName": "roasted coarse peanuts",
    //             "amount": 4.0,
    //             "unit": "tablespoons",
    //             "meta": [],
    //             "measures": {
    //                 "us": {
    //                     "amount": 4.0,
    //                     "unitShort": "Tbsps",
    //                     "unitLong": "Tbsps"
    //                 },
    //                 "metric": {
    //                     "amount": 4.0,
    //                     "unitShort": "Tbsps",
    //                     "unitLong": "Tbsps"
    //                 }
    //             }
    //         }
    //     ],
    //     "id": 663113,
    //     "title": "Thai Green Mango Salad",
    //     "readyInMinutes": 45,
    //     "servings": 6,
    //     "sourceUrl": "https://www.foodista.com/recipe/JRRRFDVQ/thai-green-mango-salad",
    //     "openLicense": -1,
    //     "image": "https://spoonacular.com/recipeImages/663113-556x370.jpg",
    //     "imageType": "jpg",
    //     "summary": "If you have roughly <b>about 45 minutes</b> to spend in the kitchen, Thai Green Mango Salad might be an amazing <b>gluten free, dairy free, paleolithic, and primal</b> recipe to try. For <b>$1.17 per serving</b>, you get a side dish that serves 6. One portion of this dish contains roughly <b>4g of protein</b>, <b>4g of fat</b>, and a total of <b>130 calories</b>. 1 person has made this recipe and would make it again. A mixture of mangoes, tomato, roasted coarse peanuts, and a handful of other ingredients are all it takes to make this recipe so tasty. This recipe is typical of Asian cuisine. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 79%</b>. This score is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/thai-green-mango-salad-58650\">Thai Green Mango Salad</a>, <a href=\"https://spoonacular.com/recipes/thai-green-mango-salad-565061\">Thai Green Mango Salad</a>, and <a href=\"https://spoonacular.com/recipes/green-mango-salad-thai-side-dish-645474\">Green Mango Salad - Thai Side Dish</a>.",
    //     "cuisines": [
    //         "Thai",
    //         "Asian"
    //     ],
    //     "dishTypes": [
    //         "side dish",
    //         "salad"
    //     ],
    //     "diets": [
    //         "gluten free",
    //         "dairy free",
    //         "paleolithic",
    //         "primal",
    //         "pescatarian"
    //     ],
    //     "occasions": [],
    //     "winePairing": {
    //         "pairedWines": [
    //             "chardonnay",
    //             "gruener veltliner",
    //             "sauvignon blanc"
    //         ],
    //         "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are my top picks for Salad. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Foley Estate Winery Sta. Rita Hills Chardonnay with a 4.3 out of 5 star rating seems like a good match. It costs about 27 dollars per bottle.",
    //         "productMatches": [
    //             {
    //                 "id": 473912,
    //                 "title": "Foley Estate Winery Sta. Rita Hills Chardonnay",
    //                 "description": "Rancho Santa Rosa Vineyard was originally conceived as individual micro-vineyards delineated into 59 unique blocks based upon soil, exposure, elevation, grade, rootstock and clone. Rancho Santa Rosa produces remarkably rich and silky wines.",
    //                 "price": "$26.99",
    //                 "imageUrl": "https://spoonacular.com/productImages/473912-312x231.jpg",
    //                 "averageRating": 0.86,
    //                 "ratingCount": 5.0,
    //                 "score": 0.7975,
    //                 "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ffoley-estate-winery-sta-rita-hills-chardonnay-2010%2F122126"
    //             }
    //         ]
    //     },
    //     "instructions": "Pound all the ingredients in a clay mortar using a wooden pestle, then add carrot and mangoes. Serve chilled with roasted coarse peanuts.",
    //     "analyzedInstructions": [
    //         {
    //             "name": "",
    //             "steps": [
    //                 {
    //                     "number": 1,
    //                     "step": "Pound all the ingredients in a clay mortar using a wooden pestle, then add carrot and mangoes.",
    //                     "ingredients": [
    //                         {
    //                             "id": 9176,
    //                             "name": "mango",
    //                             "localizedName": "mango",
    //                             "image": "mango.jpg"
    //                         },
    //                         {
    //                             "id": 11124,
    //                             "name": "carrot",
    //                             "localizedName": "carrot",
    //                             "image": "sliced-carrot.png"
    //                         }
    //                     ],
    //                     "equipment": [
    //                         {
    //                             "id": 404751,
    //                             "name": "mortar and pestle",
    //                             "localizedName": "mortar and pestle",
    //                             "image": "mortar-and-pestle.jpg"
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "number": 2,
    //                     "step": "Serve chilled with roasted coarse peanuts.",
    //                     "ingredients": [
    //                         {
    //                             "id": 16091,
    //                             "name": "peanuts",
    //                             "localizedName": "peanuts",
    //                             "image": "peanuts.png"
    //                         }
    //                     ],
    //                     "equipment": []
    //                 }
    //             ]
    //         }
    //     ],
    //     "originalId": null,
    //     "spoonacularSourceUrl": "https://spoonacular.com/thai-green-mango-salad-663113"
    // 
  
  if (!recipeInfo) {
      return (
          <h1>Loading</h1>
      );
  }
    return (
    <div>
        {/* <button onClick={getRecipeDetails}>full recipe</button> */}
        <h1>{recipeInfo.title}</h1>
        <img src={recipeInfo.image} alt="" />
        <h3>Preparation time: {recipeInfo.readyInMinutes}</h3>
        <h4>Summary:</h4>
        <p dangerouslySetInnerHTML={{__html: recipeInfo.summary}}></p>
        <h4>Instruction:</h4> 
        <h4 dangerouslySetInnerHTML={{__html: recipeInfo.instructions}}></h4>
        <h4>Steps</h4>
        {recipeInfo.analyzedInstructions[0].steps.map((item:any) => {
            return (
                <div>
                        <li>{item.step}</li>
                </div>
            )
        })}
              <a href={recipeInfo.sourceUrl}>View Full Recipe</a>

      
    </div>
  )
}
