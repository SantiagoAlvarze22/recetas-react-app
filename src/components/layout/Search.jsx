import React from 'react';

export const Search = () => {
  return (
    <div className='searchRecipes'>
      <form className='position-absolute start-50 translate-middle d-flex form-search'>
        <input type='text' className='form-control me-3 inputSearch' />
        <button className='form-control btn btn-primary btn-search'>
          Search A Recipe
        </button>
      </form>
    </div>
  );
};
