import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const FoodDetails = () => {
  
    // const data = useLoaderData()
    // const meal = data.meals[0]
    const dynamic = useParams()
    console.log(dynamic.foodId)

    const [meal, setMeal] = useState({})
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dynamic.foodId}`)
        .then(res => res.json())
        .then(data=> setMeal(data.meals[0]))
    },[])


    return (
        <div>
            <img style={{height:"400px",widht:"400px"}} src={meal.strMealThumb} alt="" />
            <h1>Meal: {meal.strMeal}</h1>
            <p>{meal.strInstructions}</p>
        </div>
    );
};

export default FoodDetails;