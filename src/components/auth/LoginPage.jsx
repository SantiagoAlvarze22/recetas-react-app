import React from 'react';
import { Form } from '../layout/Form';
import { RecipeGrid } from '../layout/RecipeGrid';

export const LoginPage = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row '>
          <div className='d-md-flex align-items-md-center'>
            <div className='col-md-6'>
              <RecipeGrid />
            </div>
            <div className='col-md-6 p-4'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
