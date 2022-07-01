import React,{useState} from 'react'
import CalorieMealList from './CalorieMealList';

export default function Calories() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);


  function handleChange(event:any) {
    setCalories(event.target.value);

  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=469c4ad6473f4f928a98cb0b760f8eef&timeFrame=day&targetCalories=${calories}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  
  return (
    <div>
      <h1>Are you trying to get a meal plan as per you daily calories intake?</h1>
      <h5>If that's the case, just enter the amount of calories you are targeting per day and get a 3 course meal option</h5>
      <h5>Just sort out your calories intake per week and get a week meal options. Visit the sites to get complete recipes to try them out.</h5>

    <section>
    <input type="number" placeholder="calories intake" onChange={handleChange} />
    </section>
    <button onClick={getMealData}>Get Daily meal plan</button>

    {mealData && <CalorieMealList mealData={mealData} />}
    
   </div>
  )
}
