'use client'
import { ProductContextProvider, useProductContext } from '@/app/contexts/ProductsContext';
import supabase from '@/app/supabase'
import React, { useContext, useEffect, useState } from 'react'

const OrdersTable = () => {
    const [orders,setOrders] = useState<any[]>([]);
    const { products } = useProductContext();
    console.log(products, 'products')
    useEffect(() => {
        async function fetchData() {
          try {
            const { data, error } = await supabase.from("order_product").select("*");
            if (error) {
              throw error;
            }
            setOrders(data);
            console.log(data, 'data')
          } catch (error) {
            console.error("Error fetching data:");
          }
        }
        fetchData();
      }, []);
  return (
    <div>

    </div>
  )
}

export default OrdersTable