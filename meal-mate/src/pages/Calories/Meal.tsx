import React, { useState, useEffect } from "react";

interface MealProps {
meal : {
    id: number,
    title: string,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string
}
}

export default function Meal({meal} : MealProps) {
 const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=65493f96d9814a4e82ae17cfc6f9fdf5&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="" />
      <ul>
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number Of Servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>View Full Recipe</a>
    </article>
  );
}
