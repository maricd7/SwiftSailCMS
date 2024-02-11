'use client'
import { useProductContext } from '@/app/contexts/ProductsContext'
import React, { useEffect, useState } from 'react'
import OverviewBox from './OverviewBox';
import supabase from '@/app/supabase';
import OverviewChart from '../Chart/OverviewChart';
import { Heading } from '../common/Heading/Heading';


export default function OverviewBoxes() {
    const {products} = useProductContext()
    const [fullStock,setFullStock] = useState<number | undefined>(0);
    const [itemsSold,setItemsSold] = useState<number | undefined>(0);
    const [orders, setOrders] = useState<number | undefined>(0);
    const [chartData, setChartData] = useState<any>([])
    const [chartLabels,setChartLabels]  = useState<any>([])
    useEffect(() => {
      let currentStock = 0;
      let currentItems = 0;
      products.forEach(product => {
          console.log(product.stock, 'stokan');
          currentStock += product.stock;
          currentItems += product.sold;
      });
      setFullStock(currentStock);
      setItemsSold(currentItems);
  }, [products]);

  useEffect(() => {
      async function fetchData() {
          try {
              const { data, error } = await supabase
                  .from("orders")
                  .select("*");
              if (error) {
                  throw error;
              }
              const newData = data.map(o => o.value);
              const newLabels = data.map(o => o.created_at);
              setChartData(newData);
              setChartLabels(newLabels);
              setOrders(data.length);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      }
      fetchData();
  }, []);

  return (
    <div className='flex flex-col gap-8'>
        <div className='flex gap-8'>
          <OverviewBox color='rgb(185 28 28)' icon='carbon:inventory-management' href='inventory' value={fullStock} text='Items in stock'/>
          <OverviewBox color='rgb(21 128 61)' icon='carbon:box' href='inventory' value={itemsSold} text='Items sold'/>
          <OverviewBox color='rgb(29 78 216)' icon='carbon:shopping-cart-plus' href='orders' value={orders} text='Orders'/>
        </div>
        <Heading text='Order Tracker'/>
        <OverviewChart data={chartData} labels={chartLabels}/>
    </div>
  )
}
