"use client";
import { useProductContext } from "@/app/contexts/ProductsContext";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";

const OrdersTable = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const { products } = useProductContext();
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("order_product")
          .select("*");
        if (error) {
          throw error;
        }
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const updatedTableData = orders.map((order) => {
      const product = products.find((product) => product.id === order.product_id);
      return {
        orderId: order.id,
        productName: product ? product.name : "Product Not Found",
        quantity: order.quantity,
        orderDate: order.created_at,
        productPrice:product ? product.price : "Price Not Found",
      };
    });
    setTableData(updatedTableData);
  }, [orders, products]);

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order Id
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Order Date
            </th>
            <th scope="col" className="px-6 py-3">
             Order Price
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{item.orderId}</td>
              <td className="px-6 py-4">{item.productName}</td>
              <td className="px-6 py-4">{item.quantity}</td>
              <td className="px-6 py-4">{item.orderDate}</td>
              <td className="px-6 py-4">{item.productPrice * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
