import React from 'react';
import { Link } from 'react-router-dom';

export const Recipe = ({ recipe }) => {
  return (
    <div className='mt-5 mx-3'>
      <div className='container card-group'>
        <Link
          to={`/description/${recipe.idMeal}`}
          className='card text-decoration-none '
          key={recipe.idMeal}
        >
          <div>
            <img
              src={recipe.strMealThumb}
              className='card-img-top '
              alt='recipe'
            />
          </div>

          <div className='card-body size-card-body'>
            <h3 className='card-title'>{recipe.strMeal}</h3>
            <p className='card-text fw-light fst-italic'>
              <span className='fw-bold'> Category: </span>
              {recipe.strCategory}, {recipe.strArea}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
