'use client'
import React from 'react';
import { useProductContext } from '@/app/contexts/ProductsContext';

const ProductsOverview = () => {
  const { products } = useProductContext(); 

  console.log(products, 'deki');
  console.log('dekiii');

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.name} className="bg-white p-4 shadow-md rounded-md">
            <p className="text-lg font-semibold mb-2">Name: {product.name}</p>
            <p className="text-gray-700">Price: {product.price}</p>
            <p className="text-gray-700">Description: {product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOverview;