'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import React, { useEffect, useState } from 'react'
import OverviewBox from './OverviewBox';
import supabase from '@/app/supabase';


export default function OverviewBoxes() {
    const {products} = useProductContext()
    const [fullStock,setFullStock] = useState<number | undefined>(0);
    const [itemsSold,setItemsSold] = useState<number | undefined>(0);
    const [orders, setOrders] = useState<number | undefined>(0);
    const [chartData, setChartData] = useState<any>([])
    useEffect(()=>{
      let currentStock = 0
      let currentItems = 0
        products.forEach(product=>{
            console.log(product.stock,'stokan')
            setFullStock(currentStock+=product.stock)
            setItemsSold(currentItems+=product.sold)
        })
    },[products])

    useEffect(() => {
      async function fetchData() {
        try {
          const { data, error } = await supabase
            .from("orders")
            .select("*");
          if (error) {
            throw error;
          }
          setChartData(data)
          setOrders(data.length)
        } catch (error) {
          console.error("Error fetching data:");
        }
      }
      fetchData();
    }, []);
  return (
    <div className='flex flex-col gap-8'>
        <div className='flex gap-4'>
          <OverviewBox value={fullStock} text='Items in stock'/>
          <OverviewBox value={itemsSold} text='Items sold'/>
          <OverviewBox value={orders} text='Orders'/>
        </div>
    </div>
  )
}
