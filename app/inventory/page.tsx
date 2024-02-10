import React from 'react'
import {InventoryTable} from '../components/InventoryTable'
import { ProductContextProvider } from '../contexts/ProductsContext'
function Inventory() {
  return (
    <div>
        <ProductContextProvider>
            <InventoryTable/>
        </ProductContextProvider>
    </div>
  )
}

export default Inventory