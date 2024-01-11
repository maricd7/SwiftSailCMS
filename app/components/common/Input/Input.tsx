import React from 'react';

interface InputProps {
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <input placeholder={placeholder} />;
};