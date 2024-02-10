'use client'
import React from 'react'


interface OverviewBoxProps {
    value:number | undefined;
    text:string,
}
const  OverviewBox: React.FC<OverviewBoxProps> = ({value,text}) => {
  return (
    <div className='p-4 rounded-lg flex flex-col bg-white  w-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <span className='text-4xl font-semibold text-slate-950'>{value}</span>
        <p  className='text-sm text-slate-500'>{text}</p>
    </div>
  )
}
export default  OverviewBox