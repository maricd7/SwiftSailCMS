"use client";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";

export const CustomersTable = () => {
  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("customers").select("*");
        if (error) {
          throw error;
        }
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching data:");
      }
    }
    fetchData();
  }, []);

  //customer filter function

  const filterByLoyalty = () => {
    const customersByLoyalty = customers
      .filter((customer) => customer.loyalty)
      .sort((a, b) => b.loyalty - a.loyalty);

    setCustomers(customersByLoyalty);
  };

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <th scope="col" className="px-6 py-3">
            Customer ID
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
          <th scope="col" className="px-6 py-3">
            Address
          </th>
          <th scope="col" className="px-6 py-3">
            Postal Code
          </th>
          <th
            onClick={() => {
              filterByLoyalty();
            }}
            scope="col"
            className="px-6 py-3 cursor-pointer"
          >
            Loyalty Discount
          </th>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{customer.id}</td>
              <td className="px-6 py-4">{customer.name}</td>
              <td className="px-6 py-4">{customer.email}</td>
              <td className="px-6 py-4">{customer.phone}</td>
              <td className="px-6 py-4">{customer.address}</td>
              <td className="px-6 py-4">{customer.postal_code}</td>
              <td className="px-6 py-4">{customer.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
