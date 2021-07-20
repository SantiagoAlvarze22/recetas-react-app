import React from 'react';
import { Form } from '../layout/Form';
import { RecipeGrid } from '../layout/RecipeGrid';

export const LoginPage = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row '>
          <div className='d-md-flex align-items-md-center'>
            <div className='col-lg-6 py-2 d-none d-md-block'>
              <RecipeGrid />
            </div>
            <div className='col-lg-6 p-4'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
