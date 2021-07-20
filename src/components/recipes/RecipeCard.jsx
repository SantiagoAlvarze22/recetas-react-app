import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { ShowLoading } from '../layout/ShowLoading';

export const RecipeCard = () => {
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setLoading(false);
        setRecipe(data.meals[0]);
      } catch (error) {
        console.log('Error getting data', error.message);
      }
    };
    search();
  }, [id]);

  const back = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  return (
    <>
      {loading ? (
        <ShowLoading />
      ) : (
        <div className='card mt-4 recipeCard'>
          <div className='row'>
            <div className='col-xxl-4 col-md-4'>
              <img
                src={recipe.strMealThumb}
                alt='img'
                className='card-img-top h-100 w-100'
              />
              )
            </div>
            <div className='col-xxl-8 col-md-8'>
              <div className='card-body'>
                <h1 className='card-title'>
                  <strong>{recipe.strMeal}</strong>
                </h1>
                <p className='card-text'>
                  {recipe.strCategory}, {recipe.strArea}
                </p>
                <h5 className='card-text'>
                  <span className=''>
                    Categoría: {recipe.strCategory}, {recipe.strArea}
                  </span>
                </h5>
                <h5 className='card-text'>
                  <span className=''>{recipe.strInstructions}</span>
                </h5>
              </div>
              <div className='col-text-end'>
                <button
                  className='btn btn-success btn-lg'
                  onClick={() => back()}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
