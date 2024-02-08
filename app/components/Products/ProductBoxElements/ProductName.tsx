'use client'
import { Icon } from '@iconify/react'
import React from 'react'

export const ProductName = () => {
  return (
    <p className="text-lg font-semibold">Name: {product.name}</p>
    <Icon
      onClick={() => setEditProductId(product.id)}
      icon="material-symbols:edit-outline"
      width="24"
      height="24"
      style={{ color: '000' }}
    />
    {editProductId === product.id && (
    <EditProduct
      productId={product.id}
      setEditProductId={setEditProductId}
      changeProductName={changeProductName}
      setNewProductName={setNewProductName}
    />
  )}
  )
}
