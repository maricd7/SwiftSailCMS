"use client";
import { useProductContext } from "@/app/contexts/ProductsContext";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";

const OrdersTable = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const { products } = useProductContext();
  const [orderedProducts, setOrderedProducts] = useState<any[]>([]);
  const [qty,setQty] = useState(null)
 
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("order_product")
          .select("*");
        if (error) {
          throw error;
        }
        setOrders(data)
      } catch (error) {
        console.error("Error fetching data:");
      }
    }
    fetchData();
  }, [orders]);

  useEffect(() => {
    const orderIds = orders.map((order) => order.product_id);
    const filteredProducts = products.filter((product) =>
      orderIds.includes(product.id)
    );
    setOrderedProducts(filteredProducts);
  }, [orders, products]);
 
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" className="px-6 py-3">Order Id</th>
          <th scope="col" className="px-6 py-3">Product</th>
          <th scope="col" className="px-6 py-3">Quantity</th>
        </thead>
        <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4">
                    Apple MacBook Pro 17"
                </td>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
