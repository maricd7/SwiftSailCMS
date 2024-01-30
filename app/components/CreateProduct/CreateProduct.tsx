'use client'
import React, { useState } from 'react';
import { Input } from '../common/Input/Input';
import { Heading } from '../common/Heading/Heading';
import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';
import { CtaButton } from '../common/Button/CtaButton';

const CreateProduct: React.FC = () => {
  const supabase: SupabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,);

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category,setCategory] = useState('')
  const [image,setImageURL] = useState('')
  const [productCreationStatus, setProductCreationStatus] = useState('')
  const [statusTextColor, setStatusTextColor]= useState('text-lime-500')
    const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('products')
      .insert([{ name: productName, price: parseInt(price), description, image , category }]);

    if (error) {
      console.error('Error adding product:', error.message);
      setProductCreationStatus(error.message)
      setStatusTextColor('text-red-500')
    } else {
      console.log('Product added successfully:', data);
      setProductCreationStatus('Product added successfully!');
      setStatusTextColor('text-lime-500')
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
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}>
          <option>TV</option>
          <option>Phone</option>
          <option>Monitor</option>
          <option>Mouse</option>
        </select>
        <Input
          placeholder="Image URL"
          type='string'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageURL(e.target.value)}
        />
        <CtaButton type='submit' text='Create a product'/>
      </form>
      {productCreationStatus && <div className={statusTextColor}>{productCreationStatus}</div>}
    </div>
  );
};

export default CreateProduct;
