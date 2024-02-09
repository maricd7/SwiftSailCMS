import Link from 'next/link'
import React from 'react'

export const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 bg-white h-screen p-8'>
      <Link href='/dashboard'><h4 className='text-slate-900 text-2xl font-semibold'>SwiftSail CMS</h4></Link>
      <p className='text-slate-900 text-lg'>Admin Tools</p>
          <div className='mt-8 flex flex-col gap-4'>
                <Link href='/create-product' className='text-slate-950 border-b-2 border-slate-900 cursor-pointer hover:scale-1.2'>Create Product</Link>
                <Link  href='/orders' className='text-slate-950 border-b-2 border-slate-900 cursor-pointer hover:scale-1.2'>Orders</Link>
                <Link  href='/products' className='text-slate-950 border-b-2 border-slate-900 cursor-pointer hover:scale-1.2'>Products</Link>
                <Link  href='/customers' className='text-slate-950 border-b-2 border-slate-900 cursor-pointer hover:scale-1.2'>Customers</Link>
                <Link  href='/inventory' className='text-slate-950 border-b-2 border-slate-900 cursor-pointer hover:scale-1.2'>Inventory</Link>  
          </div>
    </div>
  )
}
