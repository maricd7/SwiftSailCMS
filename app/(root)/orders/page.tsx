import React from "react";
import OrdersTable from "@/app/components/OrdersTable/OrdersTable";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";

const Orders = () => {
  return (
    <ProductContextProvider>
      <div>
        <OrdersTable />
      </div>
    </ProductContextProvider>
  );
};

export default Orders;
