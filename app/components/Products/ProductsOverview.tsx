'use client'
import React from 'react';
import { useProductContext } from '@/app/contexts/ProductsContext';
import { CtaButton } from '../common/Button/CtaButton';
import Image from 'next/image';
import supabase from '@/app/supabase';

const ProductsOverview = () => {
  const { products } = useProductContext(); 

  async function deleteProduct(id:number){
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)
  }

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.name} className="bg-white p-4 shadow-md rounded-md">
            <Image src={product.image} width={96} height={96} alt='Product Image'/>
            <div>
            <p className="text-lg font-semibold mb-2">Name: {product.name}</p>
            <p className="text-gray-700">Price:${product.price}</p>
            <p className="text-gray-700">Description: {product.description}</p>
            <button onClick={()=>{deleteProduct(product.id)}}>Delete Product</button>
            </div>
            {/* <CtaButton type='button' text='Edit Product'/> */}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOverview;