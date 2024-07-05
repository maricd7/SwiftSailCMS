"use client";

import Link from "next/link";
import React, { useState } from "react";
import Sidebarlink from "../common/Link/Sidebarlink";
import supabase from "@/app/supabase";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    console.log("run");
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error, "error sign out");
    }
    router.push("/login");
  };
  return (
    <div className="fixed left-0 top-0 bg-white h-screen p-8">
      <Link href="/dashboard">
        <h4 className="text-slate-900 text-2xl font-semibold">SwiftSail CMS</h4>
      </Link>
      <p className="text-slate-900 text-lg">Admin Tools</p>
      <div className="mt-8 flex flex-col gap-4">
        <Sidebarlink href="/dashboard" icon="carbon-home" text="Overview" />
        <Sidebarlink
          href="/create-product"
          icon="carbon:intent-request-create"
          text="Create Product"
        />
        <Sidebarlink
          href="/orders"
          icon="carbon:shopping-cart-plus"
          text="Orders"
        />
        <Sidebarlink href="/products" icon="carbon:box" text="Products" />
        <Sidebarlink
          href="/customers"
          icon="carbon:user-multiple"
          text="Customers"
        />
        <Sidebarlink
          href="/inventory"
          icon="carbon:inventory-management"
          text="Inventory"
        />
        <div
          onClick={() => {
            handleSignOut;
          }}
        >
          <span
            className="text-slate-950 cursor-pointer hover:scale-1.2 flex gap-2 items-center"
            onClick={() => handleSignOut()}
          >
            <Icon
              icon="carbon:logout"
              width="24"
              height="24"
              style={{ color: "#000" }}
            />
            Sign Out
          </span>
        </div>
      </div>
    </div>
  );
};
