'use client'
import React, { useState } from 'react';
import { Input } from '../common/Input/Input';
import { Heading } from '../common/Heading/Heading';
import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';

const CreateProduct: React.FC = () => {
  const supabase: SupabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,);

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  
    const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('products')
      .insert([{ name: productName, price: parseInt(price), description }]);

    if (error) {
      console.error('Error adding product:', error.message);
    } else {
      console.log('Product added successfully:', data);
    }
  };

  return (
    <div className='flex flex-col gap-4 justify-start max-w-64'>
      <Heading text='Create Product'/>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-64'>
        <Input
          placeholder="Product Name"
          type='string'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
        />
        <Input
          placeholder="Price"
          type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
        />
        <Input
          placeholder="Description"
          type='string'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
        />
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded w-full'>
          Create a Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
