import React from 'react'

export default function Dashboard() {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700 to-black w-full h-screen flex gap-8'>
        <div className='bg-slate-100 h-screen w-1/4 p-8'>
            <h4 className='text-slate-900 text-2xl font-semibold'>SwiftSail CMS</h4>
            <p className='text-slate-900 text-lg'>Admin Tools</p>
            <div className='mt-8'>
                <div className='border-b-2 border-slate-900 cursor-pointer hover:scale-1.2'>Create Product</div>
            </div>
        </div>
        <div>
            <h1 className='text-white text-4xl font-bold mt-8'>Welcome to dashboard.</h1>
        </div>
    </div>
  )
}

