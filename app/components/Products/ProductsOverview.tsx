import React from 'react';
import { useProductsContext } from '@/app/contexts/ProductsContext';

const ProductsOverview = () => {
  const { products } = useProductsContext(); 

  console.log(products, 'deki');
  console.log('dekiii');

  return (
    <div>
      {/* Render your products here */}
      {products.map((product) => (
        <div key={product.name}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsOverview;