"use client";
import React from "react";
import { Heading } from "@/app/components/common/Heading/Heading";
import { ProductContextProvider } from "@/app/contexts/ProductsContext";
import ProductsOverview from "@/app/components/Products/ProductsOverview";

export default function Products() {
  return (
    <div>
      <Heading text="Products Overview" />
      <div>
        <ProductContextProvider>
          <ProductsOverview />
        </ProductContextProvider>
      </div>
    </div>
  );
}
