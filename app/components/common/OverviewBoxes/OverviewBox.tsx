import React from 'react'


interface OverviewBoxProps {
    value:number | undefined;
    text:string,
}
const  OverviewBox: React.FC<OverviewBoxProps> = ({value,text}) => {
  return (
    <div className='p-4 rounded-lg'>
        <span className='text-4xl font-semibold text-slate-950'>{value}</span>
        <p  className='text-xl text-slate-500'>{text}</p>
    </div>
  )
}
export default  OverviewBox