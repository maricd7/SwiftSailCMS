'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Sidebarlink from '../common/Link/Sidebarlink'

export const Sidebar = () => {
  
  return (
    <div className='fixed left-0 top-0 bg-white h-screen p-8'>
      <Link href='/dashboard'><h4 className='text-slate-900 text-2xl font-semibold'>SwiftSail CMS</h4></Link>
      <p className='text-slate-900 text-lg'>Admin Tools</p>
          <div className='mt-8 flex flex-col gap-4'>
                <Sidebarlink  href='/dashboard' icon='carbon-home' text='Overview'/>
                <Sidebarlink  href='/create-product' icon="carbon:intent-request-create" text='Create Product'/>
                <Sidebarlink  href='/orders' icon="carbon:shopping-cart-plus" text='Orders'/>
                <Sidebarlink  href='/products' icon="carbon:box" text='Products'/>
                <Sidebarlink  href='/customers' icon="carbon:user-multiple" text='Customers'/>
                <Sidebarlink  href='/inventory' icon="carbon:inventory-management" text='Inventory'/>
          </div>
    </div>
  )
}
