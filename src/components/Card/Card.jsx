import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ meal }) => {
  const { strMeal, strMealThumb, strInstructions, idMeal } = meal;
  const navigate = useNavigate()
  return (
    <div>
      <div className="card">
        <img src={strMealThumb} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">{strInstructions.slice(0, 200)}</p>
          <button onClick={()=>navigate(`foodDetails/${idMeal}`)} className="btn btn-primary">
            details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
