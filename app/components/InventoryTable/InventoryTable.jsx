"use client";
import { useProductContext } from "@/app/contexts/ProductsContext";
import React from "react";

export const InventoryTable = () => {
  const { products } = useProductContext();
  console.log(products, "inventori");
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <th scope="col" className="px-6 py-3">
            Product Id
          </th>
          <th scope="col" className="px-6 py-3">
            Product Name
          </th>
          <th scope="col" className="px-6 py-3">
            Stock
          </th>
          <th scope="col" className="px-6 py-3">
            Sold
          </th>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <td className="px-6 py-4">{product.id}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.stock}</td>
              <td className="px-6 py-4">{product.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
