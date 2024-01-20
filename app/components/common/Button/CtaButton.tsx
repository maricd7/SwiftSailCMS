import React from 'react'

    interface CtaButtonProps {
        type: "button" | "reset" | "submit"; 
        text: string;
      }

export const CtaButton : React.FC<CtaButtonProps> = ({ text, type, }) => {
    return <button type={type} className='bg-blue-500 text-white px-4 py-2 rounded w-full'>
    {text}
</button>
  };
