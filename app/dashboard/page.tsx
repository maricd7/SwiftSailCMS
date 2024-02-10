import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import CreateProduct from '../components/CreateProduct/CreateProduct'
import { Heading } from '../components/common/Heading/Heading'
import { ProductContextProvider } from '../contexts/ProductsContext'
import OverviewBoxes from '../components/common/OverviewBoxes/OverviewBoxes'

export default function Dashboard() {
  return (
    <div className=' w-full h-screen flex gap-8'>
      <ProductContextProvider>
        <Heading text='Welcome to dashboard'/>
        <OverviewBoxes/>
      </ProductContextProvider>
    </div>
  )}

