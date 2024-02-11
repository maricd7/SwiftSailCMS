import React from 'react'
import { Heading } from '../components/common/Heading/Heading'
import { ProductContextProvider } from '../contexts/ProductsContext'
import OverviewBoxes from '../components/OverviewBoxes/OverviewBoxes'


export default function Dashboard() {
  return (
    <div className=' w-full h-screen flex gap-8 flex-col'>
      <ProductContextProvider>
        <Heading text='Welcome to dashboard'/>
        <OverviewBoxes/>
      </ProductContextProvider>
    </div>
  )}

