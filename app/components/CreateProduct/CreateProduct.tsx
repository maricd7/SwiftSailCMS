'use client'
import React from 'react';
import { Input } from '../common/Input/Input';
import { Heading } from '../common/Heading/Heading';

const CreateProduct: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className='flex flex-col gap-4 justify-start max-w-64'>
      <Heading text='Create Product'/>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-64'>
        <Input placeholder="Product Name" type='string'/>
        <Input placeholder="Price" type="number" />
        <Input placeholder="Description" type='string'/>
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded w-full'>
          Create a Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
