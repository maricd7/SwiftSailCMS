import React, { ChangeEvent } from 'react';

interface InputProps {
  placeholder: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ placeholder, type, onChange }) => {
  return <input type={type} placeholder={placeholder} className='w-full p-4 text-slate-950' onChange={onChange} />;
};