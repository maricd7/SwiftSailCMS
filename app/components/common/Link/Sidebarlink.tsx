import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'


interface LinkProps {
    href: string;
    text: string;
    icon:string;
  }
const MyComponent: React.FC<LinkProps> = ({href,text,icon}) => {

  return (
    <Link className='text-slate-950 border-b-2 border-slate-900 cursor-pointer hover:scale-1.2 flex gap-2 items-center' href={href}><Icon icon={icon} width={24} height={24}/>{text}</Link>
  )
}
export default MyComponent;
