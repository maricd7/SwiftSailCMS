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
  const [newPrice, setNewPrice] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDiscount, setNewDiscount] = useState("");

  async function deleteProduct(id: number) {
    const { error } = await supabase.from("products").delete().eq("id", id);
  }

  async function removeProductFromShop(id: number) {
    const { error } = await supabase
      .from("products")
      .upsert({ id: id, status: false })
      .eq("id", id);
  }

  async function editProduct(
    id: number,
    newName: string,
    newPrice: string,
    newDescription: string,
    newDiscount: string
  ) {
    const { error } = await supabase
      .from("products")
      .upsert({
        id: id,
        name: newName,
        price: newPrice,
        description: newDescription,
        discount: newDiscount,
      })
      .eq("id", id);
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-wrap gap-4  ">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white p-4 shadow-md rounded-md flex flex-col gap-4 text-slate-950 w-72 relative"
          >
            <Image
              width={256}
              height={256}
              src={product.image}
              className="rounded-md h-64"
              alt="Product Image"
            />
            {editProductId === product.id && (
              <EditProduct
                productId={product.id}
                setEditProductId={setEditProductId}
                setNewProductName={setNewProductName}
                setNewPrice={setNewPrice}
                setNewDescription={setNewDescription}
                setNewDiscount={setNewDiscount}
                editProduct={editProduct}
              />
            )}
            <div className="flex items-center gap-4 w-64">
              <p className="text-lg font-semibold">Name: {product.name}</p>
              <div
                className="absolute top-4 right-4 bg-blue-500 p-2 rounded-lg cursor-pointer hover:shadow-lg"
                onClick={() => setEditProductId(product.id)}
              >
                <Icon
                  icon="material-symbols:edit-outline"
                  width="24"
                  height="24"
                  style={{ color: "fff" }}
                />
              </div>
            </div>
            <p className="text-gray-700">Price: ${product.price}</p>
            <p className="text-gray-700 text-md w-64">
              Description: {product.description}
            </p>
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
        ))}
      </div>
    </div>
  );
};

export default ProductsOverview;
