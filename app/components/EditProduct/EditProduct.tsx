'use client'
import React, { useState } from "react";

interface EditProductProps {
  productId: number;
  setEditProductId: React.Dispatch<React.SetStateAction<number>>;
  setNewProductName: React.Dispatch<React.SetStateAction<string>>;
  changeProductName: (id: number, newName: string) => Promise<void>;
  setNewPrice: React.Dispatch<React.SetStateAction<string>>;
  setNewDescription: React.Dispatch<React.SetStateAction<string>>;
}

const EditProduct: React.FC<EditProductProps> = ({
  productId,
  setEditProductId,
  setNewProductName,
  changeProductName,
  setNewPrice,
  setNewDescription,
}) => {
  const [newProductName, setNewProductNameLocal] = useState("");
  const [newPrice, setNewPriceLocal] = useState("");
  const [newDescription, setNewDescriptionLocal] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await changeProductName(productId, newProductName);
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