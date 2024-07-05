import React from "react";
import OrdersTable from "@/app/components/OrdersTable/OrdersTable";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";

const Orders = () => {
  return (
    <ProductContextProvider>
      <OrdersTable />
    </ProductContextProvider>
  );
};

export default Orders;
