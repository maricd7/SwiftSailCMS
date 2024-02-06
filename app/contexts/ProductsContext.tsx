'use client'
import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import supabase from '../supabase';

interface Product {
  id:number;
  name: string;
  price: string;
  description: string;
  image:string;
}

interface ProductsContextProps {
  products: Product[];
}

const ProductsContext = createContext<ProductsContextProps>({
  products: [],
});

export const ProductContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
          throw error;
        }

        setProducts(data);
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData();
  }, []);

  const contextValue: ProductsContextProps = {
    products: products,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => {
  const productContext = useContext(ProductsContext);

  if (!productContext) {
    throw new Error(
      "No ProductContext.Provider found when calling useProductContext."
    );
  }
  return productContext;
};