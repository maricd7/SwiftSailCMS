import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import CreateProduct from '../components/CreateProduct/CreateProduct'
import { Heading } from '../components/common/Heading/Heading'

export default function Dashboard() {
  return (
    <div className=' w-full h-screen flex gap-8'>
      <Heading text='Welcome to dashboard'/>
    </div>
  )
}

