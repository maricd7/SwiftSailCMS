'use client'
import React, { useEffect } from 'react';
import { Heading } from '../components/common/Heading/Heading';
import { ProductContextProvider} from '../contexts/ProductsContext';
import ProductsOverview from '../components/Products/ProductsOverview';

export default function Products() {

  return (
    <div>
      <Heading text='Products Overview' />
      <div>
        <ProductContextProvider>
          <ProductsOverview/>
        </ProductContextProvider>
      </div>
    </div>
  );
}