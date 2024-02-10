import { useProductContext } from '@/app/contexts/ProductsContext'
import React, { useEffect, useState } from 'react'
import OverviewBox from './OverviewBox';

export default function OverviewBoxes() {
    const {products} = useProductContext()
    const [fullStock,setFullStock] = useState<number | undefined>(0);
    useEffect(()=>{
        products.forEach(product=>{
            let currentStock = 0
            setFullStock(currentStock+=product.stock)
        })
    },[products])
  return (
    <div>
        <OverviewBox value={fullStock} text='Items in stock'/>
    </div>
  )
}
