import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { Recipes } from '../recipes/Recipes';
import { ShowLoading } from './ShowLoading';
import { useHistory, useLocation } from 'react-router-dom';

// import { useUser } from '../../context/UserContext';

export const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { q = '' } = queryString.parse(location.search);
    if (q === '') {
      return setRecipes([]);
    }
    recipesSearch(q);
  }, [location.search]);

  const recipesSearch = async (query) => {
    try {
      setLoading(true);
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      const { data } = await axios.get(url);
      setLoading(false);
      setRecipes(data.meals);
      setText('');
    } catch (error) {
      console.log(`Somehing goes wrong ${error}`);
    }
  };

  const searchForm = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
    recipesSearch(text);
  };

  return (
    <>
      <div className='searchRecipes'>
        <form
          className='d-flex form-search justify-content-center m-3 form-search'
          onSubmit={searchForm}
        >
          <input
            type='text'
            value={text}
            className='form-control me-3 inputSearch'
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => setSearch(text)}
            className='form-control btn btn-primary btn-search'
          >
            Search A Recipe
          </button>
        </form>
      </div>
      {loading ? (
        <ShowLoading />
      ) : (
        <section className='container-fluid'>
          {recipes && <Recipes recipes={recipes} />}
        </section>
      )}
    </>
  );
};
