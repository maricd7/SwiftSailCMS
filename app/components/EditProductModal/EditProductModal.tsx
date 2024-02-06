
import React from 'react'
import { CtaButton } from '../common/Button/CtaButton'
import { Input } from '../common/Input/Input'
export const EditProductModal = () => {
  return (
    <div>
        <h2 className='text-slate-950 font-bold'>Edit Product</h2>
        <div>
        <Input
          placeholder="Product Name"
          type='string'
          onChange={()=>{console.log('change')}}
        />
        <Input
          placeholder="Price"
          type="number"
          onChange={()=>{console.log('change')}}
        />
        <Input
          placeholder="Description"
          type='string'
          onChange={()=>{console.log('change')}}
        />
        <select onChange={()=>{console.log('change')}}>
          <option>TV</option>
          <option>Phone</option>
          <option>Monitor</option>
          <option>Mouse</option>
        </select>
        <Input
          placeholder="Image URL"
          type='string'
          onChange={()=>{console.log('change')}}
        />
        <CtaButton type='submit' text='Create a product'/>
        </div>
    </div>
  )
}
