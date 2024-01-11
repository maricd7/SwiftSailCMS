import React from 'react';

interface InputProps {
  placeholder: string;
  type:string ;
}

export const Input: React.FC<InputProps> = ({ placeholder,type }) => {
  return <input type={type} placeholder={placeholder} className='w-full p-4'/>;
};