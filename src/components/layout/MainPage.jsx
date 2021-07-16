import React from 'react';
import { Recipes } from '../recipes/Recipes';
import { HeaderMain } from './HeaderMain';
import { Search } from './Search';

export const MainPage = () => {
  return (
    <div>
      <HeaderMain />
      <Search />
      <Recipes />
    </div>
  );
};
