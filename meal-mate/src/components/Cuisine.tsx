import React,{useState} from 'react'
import { Link } from "react-router-dom";
import RecipeDetails from './RecipeDetails';



export default function Cuisine() {
  const [cuisineData, setCuisineData] = useState([]);
  const [isFetching, setIsFetching] = useState(false)
  

function getCuisineData(cuisineType:any) {
  setIsFetching(true)
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=469c4ad6473f4f928a98cb0b760f8eef&cuisine=${cuisineType}&instructionsRequired=true`
  )
  .then ((res) => res.json())
  .then((data) => { setCuisineData(data.results);
    // console.log(data);
    setIsFetching(false);
   })
}

function handleCuisineType(event:any){
getCuisineData(event.target.innerHTML) 
}

  return (
    <div>
        <h1>Cuisine From Around the word</h1>
        <section style ={{display:"flex", flexDirection:"column"}}>
      
          <button disabled={isFetching} onClick={handleCuisineType}>American</button>
          <button disabled={isFetching} onClick={handleCuisineType}>British</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Chinese</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Eastern European</button>
          <button disabled={isFetching} onClick={handleCuisineType}>French</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Greek</button> 
          <button disabled={isFetching} onClick={handleCuisineType}>Indian</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Italian</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Japanese</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Korean</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Mexican</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Middle Eastern</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Spanish</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Thai</button>
          <button disabled={isFetching} onClick={handleCuisineType}>Vietnamese</button>
            
        </section>
        <section>
         {isFetching && <h1>Loading</h1>} 
          {cuisineData && cuisineData.map((item:any) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.image} alt="" />
                <Link to ={`/recipe-details/${item.id}`}>get recipe</Link>
                {/* <Link to ='/recipe-details/recipeId'>get recipe</Link> */}

              </div>
            )

          })}
        </section>
    </div>
  )
}
