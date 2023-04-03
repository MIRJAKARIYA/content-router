import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Landing = () => {
    const {meals} = useLoaderData()
    console.log(meals)
    return (
        <div className='row row-cols-md-2 row-cols-lg-3 g-5 mx-auto' style={{maxWidth:"1200px"}}>
            {
                meals.map(meal=><Card key={meal.idMeal} meal={meal}></Card>)
            }
        </div>
    );
};

export default Landing;