import React from "react";
import { InventoryTable } from "@/app/components/InventoryTable";

import { ProductContextProvider } from "@/app/contexts/ProductsContext";
function Inventory() {
  return (
    <div>
      <ProductContextProvider>
        <InventoryTable />
      </ProductContextProvider>
    </div>
  );
}

export default Inventory;
