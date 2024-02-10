import React from 'react';

interface InputProps {
  text: string;
  
}

export const Heading: React.FC<InputProps> = ({ text }) => {
  return <h1 className='text-4xl text-slate-950 font-bold'>{text}</h1>
};