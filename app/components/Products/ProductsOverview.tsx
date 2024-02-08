import React, { useState } from "react";
import { useProductContext } from "@/app/contexts/ProductsContext";
import { CtaButton } from "../common/Button/CtaButton";
import Image from "next/image";
import supabase from "@/app/supabase";
import { Icon } from "@iconify/react";
import EditProduct from "../EditProduct/EditProduct";

const ProductsOverview = () => {
  const [editProductId, setEditProductId] = useState(0);
  const { products } = useProductContext();
  const [newProductName, setNewProductName] = useState("");
  const [newPrice, setNewPrice] = useState(""); // State for new price
  const [newDescription, setNewDescription] = useState(""); // State for new description

  async function deleteProduct(id: number) {
    const { error } = await supabase.from("products").delete().eq("id", id);
  }

  async function removeProductFromShop(id: number) {
    const { error } = await supabase
      .from("products")
      .upsert({ id: id, status: false })
      .eq("id", id);
  }

  async function changeProductName(id: number, newName: string) {
    const { error } = await supabase
      .from("products")
      .upsert({ id: id, name: newName })
      .eq("id", id);
  }

  async function changeProductPrice(id: number, newPrice: string) {
    const { error } = await supabase
      .from("products")
      .upsert({ id: id, price: newPrice })
      .eq("id", id);
  }

  async function changeProductDescription(id: number, newDescription: string) {
    const { error } = await supabase
      .from("products")
      .upsert({ id: id, description: newDescription })
      .eq("id", id);
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white p-4 shadow-md rounded-md flex flex-col gap-4"
          >
            <img
              src={product.image}
              className="w-full rounded-md"
              alt="Product Image"
            />
            {editProductId === product.id && (
                  <EditProduct
                    productId={product.id}
                    setEditProductId={setEditProductId}
                    changeProductName={changeProductName}
                    setNewProductName={setNewProductName}
                    setNewPrice={setNewPrice}
                    setNewDescription={setNewDescription}
                  />
                )}
            <div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold">Name: {product.name}</p>
                <Icon
                  onClick={() => setEditProductId(product.id)}
                  icon="material-symbols:edit-outline"
                  width="24"
                  height="24"
                  style={{ color: "000" }}
                />
              </div>
              <p className="text-gray-700">Price:${product.price}</p>
              <p className="text-gray-700">Description: {product.description}</p>
              <button
                className="border-2 border-red-700 text-red-700 rounded-md py-1 px-2 mt-2"
                onClick={() => removeProductFromShop(product.id)}
              >
                Remove from the shop
              </button>
              <button
                className="border-2 border-red-700 text-red-700 flex items-center p-2 rounded-md mt-2"
                onClick={() => deleteProduct(product.id)}
              >
                <Icon
                  icon="material-symbols:delete-outline-rounded"
                  width="24"
                  height="24"
                  style={{ color: "rgb(185 28 28)" }}
                />
                Delete product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOverview;
