import React from 'react'
import { Heading } from '../components/common/Heading/Heading'
import { ProductContextProvider } from '../contexts/ProductsContext'

export default function Products() {
  return (
    <ProductContextProvider>
    <div>
        <Heading text='Products Overview'/>
        <div>
            
        </div>
    </div>
    </ProductContextProvider>
  )
}
