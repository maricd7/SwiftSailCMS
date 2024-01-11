import React from 'react'
import { Input } from '../common/Input/Input'

const CreateProduct: React.FC = () => {
    return (
         <div className='ml-72 mt-24'>
            <h1 className=''>Create a product</h1>
             <Input placeholder="Type here" />
         </div>
    );
  };
  
export default CreateProduct;