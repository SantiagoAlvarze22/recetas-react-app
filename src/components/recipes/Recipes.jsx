import React from 'react';
import { Recipe } from '../recipes/Recipe';

export const Recipes = ({ recipes }) => {
  return (
    <div className='d-flex flex-wrap justify-content-center card-group'>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.idMeal} />
      ))}
    </div>
  );
};
