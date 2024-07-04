import React from "react";
import { Heading } from "@/app/components/common/Heading/Heading";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";
import OverviewBoxes from "@/app/components/OverviewBoxes/OverviewBoxes";

export default function Dashboard() {
  return (
    <div className=" w-full h-screen flex gap-8 flex-col">
      <ProductContextProvider>
        <Heading text="Welcome to dashboard" />
        <OverviewBoxes />
      </ProductContextProvider>
    </div>
  );
}
