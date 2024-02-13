'use client'
import React, { useState } from "react";

interface EditProductProps {
  productId: number;
  setEditProductId: React.Dispatch<React.SetStateAction<number>>;
  setNewProductName: React.Dispatch<React.SetStateAction<string>>;
  setNewPrice: React.Dispatch<React.SetStateAction<string>>;
  setNewDescription: React.Dispatch<React.SetStateAction<string>>;
  setNewDiscount: React.Dispatch<React.SetStateAction<string>>;
  editProduct: (id: number, newName: string, newPrice: string, newDescription: string, newDiscount: string) => Promise<void>;
}

const EditProduct: React.FC<EditProductProps> = ({
  productId,
  setEditProductId,
  setNewProductName,
  setNewPrice,
  setNewDescription,
  setNewDiscount,
  editProduct,
}) => {
  const [newProductName, setNewProductNameLocal] = useState("");
  const [newPrice, setNewPriceLocal] = useState("");
  const [newDescription, setNewDescriptionLocal] = useState("");
  const [newDiscount, setNewDiscountLocal] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await editProduct(productId, newProductName, newPrice, newDescription, newDiscount);
    setEditProductId(0);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3"
        placeholder="Enter new product name"
        value={newProductName}
        onChange={(e) => setNewProductNameLocal(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3"
        placeholder="Enter new product price"
        value={newPrice}
        onChange={(e) => setNewPriceLocal(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3"
        placeholder="Enter new product description"
        value={newDescription}
        onChange={(e) => setNewDescriptionLocal(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-3"
        placeholder="Enter new product discount"
        value={newDiscount}
        onChange={(e) => setNewDiscountLocal(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Confirm change
      </button>
      <button onClick={() => setEditProductId(0)} className="text-red-500">
        Cancel
      </button>
    </form>
  );
};

export default EditProduct;
