import { createContext, useState } from 'react';

const ProductsContext = createContext({
    products:[],
});


export const ProductContextProvider = ({ children }) => { 

    const [products, setProducts] = useState([]);




    const contextValue = {
        products: products,
    };

    
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
  );
}
