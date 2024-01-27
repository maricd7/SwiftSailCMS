import React from 'react'
import OrdersTable from '../components/OrdersTable/OrdersTable'
import { ProductContextProvider } from '../contexts/ProductsContext'


const Orders = () => {
  return (
    <ProductContextProvider>
      <div>
        <OrdersTable/>
      </div>
    </ProductContextProvider>
  )
}

export default Orders