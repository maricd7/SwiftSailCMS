"use client";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";

const CustomerTiers = () => {
  const [loyalty, setLoyalty] = useState<any[]>([]);
  const [customerTier, setCustomerTier] = useState<number[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("customers")
          .select("id, loyalty,customer_tier");
        if (error) {
          throw error;
        }
        setLoyalty(data);
        updateCustomerTier(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const updateCustomerTier = async (loyalty: any) => {
    for (const customer of loyalty) {
      let newCustomerTier = customer.loyalty / 10;
      const { error } = await supabase
        .from("customers")
        .update({ customer_tier: newCustomerTier.toFixed() })
        .eq("id", customer.id);

      if (error) {
        console.error("Error updating customer tier:", error);
      }
    }
  };
  return (
    <div>
      <h1>Customer Tiers</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Customer ID
            </th>
            <th scope="col" className="px-6 py-3">
              Loyalty Points
            </th>
            <th scope="col" className="px-6 py-3">
              Tier
            </th>
          </tr>
        </thead>
        <tbody>
          {loyalty.map((customer) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={customer.id}
            >
              <td className="px-6 py-4">{customer.id}</td>
              <td className="px-6 py-4">{customer.loyalty}</td>
              <td className="px-6 py-4">{customer.customer_tier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTiers;
