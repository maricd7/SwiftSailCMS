import { createContext, useEffect, useState } from 'react';
import supabase from '../supabase';

const ProductsContext = createContext({
    products:[],
});

export const ProductContextProvider = ({ children }) => { 

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*');
                
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

    const contextValue = {
        products: products,
    };

    
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
  );
}
