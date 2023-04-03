import React from "react";

const Card = ({ meal }) => {
  const { strMeal, strMealThumb, strInstructions, idMeal } = meal;
  return (
    <div>
      <div class="card">
        <img src={strMealThumb} class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{strMeal}</h5>
          <p class="card-text">{strInstructions.slice(0, 200)}</p>
          <a href="#" class="btn btn-primary">
            details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
