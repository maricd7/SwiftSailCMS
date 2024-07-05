"use client";
import { useProductContext } from "@/app/contexts/ProductsContext";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";

const OrdersTable = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const { products } = useProductContext();
  const [tableData, setTableData] = useState<any[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<number | null>(null);

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
      const product = products.find(
        (product) => product.id === order.product_id
      );
      return {
        orderId: order.id,
        productName: product ? product.name : "Product Not Found",
        quantity: order.quantity,
        orderDate: order.created_at,
        productPrice: product ? product.price : "Price Not Found",
        orderStatus: order.order_status,
      };
    });
    setTableData(updatedTableData);
  }, [orders, products]);

  const updateOrderStatus = async (id: number) => {
    setLoadingStatus(id);

    const updatedTableData = tableData.map((item) =>
      item.orderId === id ? { ...item, orderStatus: true } : item
    );
    setTableData(updatedTableData);

    try {
      const { error } = await supabase
        .from("order_product")
        .update({ order_status: true })
        .eq("id", id);
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error updating order status:", error);

      const revertedTableData = tableData.map((item) =>
        item.orderId === id ? { ...item, orderStatus: false } : item
      );
      setTableData(revertedTableData);
    } finally {
      setLoadingStatus(null);
    }
  };

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
            <th scope="col" className="px-6 py-3">
              Order Status
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <td className="px-6 py-4">{item.orderId}</td>
              <td className="px-6 py-4">{item.productName}</td>
              <td className="px-6 py-4">{item.quantity}</td>
              <td className="px-6 py-4">{item.orderDate}</td>
              <td className="px-6 py-4">{item.productPrice * item.quantity}</td>
              <td className="px-6 py-4">
                {item.orderStatus ? (
                  <span className="px-4 py-2 rounded-full bg-green-500 text-gray-950">
                    SHIPPED
                  </span>
                ) : loadingStatus === item.orderId ? (
                  <span className="px-4 py-2 rounded-full bg-yellow-500 text-gray-950">
                    UPDATING...
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      updateOrderStatus(item.orderId);
                    }}
                    className="px-4 py-2 rounded-full bg-orange-400 text-gray-950 cursor-pointer"
                  >
                    PENDING
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
