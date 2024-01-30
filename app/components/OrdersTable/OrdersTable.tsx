'use client'
import {useProductContext } from '@/app/contexts/ProductsContext';
import supabase from '@/app/supabase'
import React, {useEffect, useState } from 'react'

const OrdersTable = () => {
    const [orders,setOrders] = useState<any[]>([]);
    const { products } = useProductContext();
    const[orderedProducts, setOrderedProducts] = useState<any[]>([])

  
    useEffect(() => {
        async function fetchData() {
          try {
            const { data, error } = await supabase.from("order_product").select("*");
            if (error) {
              throw error;
            }
            setOrders(data)

          } catch (error) {
            console.error("Error fetching data:");
          }
        }
        fetchData();
      }, [])
      useEffect(() => {
        const orderIds = orders.map((order) => order.product_id);
    
        const filteredProducts = products.filter((product) => orderIds.includes(product.id));
    
        setOrderedProducts(filteredProducts);
      }, [orders, products]);
  return (
    <div>

    </div>
  )
}

export default OrdersTable