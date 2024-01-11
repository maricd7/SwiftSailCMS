import React from 'react';

interface InputProps {
  text: string;
}

export const Heading: React.FC<InputProps> = ({ text }) => {
  return <h1>{text}</h1>
};