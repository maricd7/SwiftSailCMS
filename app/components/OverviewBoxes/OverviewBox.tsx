'use client'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react'


interface OverviewBoxProps {
    value:number | undefined;
    text:string,
    href:string,
    icon:string,
    color:string,
}
const  OverviewBox: React.FC<OverviewBoxProps> = ({value,text,href,icon,color}) => {
  return (
    <Link href={href} className='p-4 rounded-lg flex gap-2 items-center bg-white  w-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110'>
       <Icon icon={icon} width={48} style={{color:color}}/>
       <div className='flex flex-col'>
       <span className='text-4xl font-semibold text-slate-950'>{value}</span>
        <p  className='text-sm text-slate-500'>{text}</p>
       </div>
    </Link>
  )
}
export default  OverviewBox