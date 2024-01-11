import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import CreateProduct from '../components/CreateProduct/CreateProduct'

export default function Dashboard() {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700 to-black w-full h-screen flex gap-8'>
        <div className='bg-slate-100 h-screen w-1/4 p-8'>
            <Sidebar/>
        </div>
        <div>
            <h1 className='text-white text-4xl font-bold mt-8'>Welcome to dashboard.</h1>
        </div>
    </div>
  )
}

