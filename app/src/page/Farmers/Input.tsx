import React, { ChangeEvent } from 'react';

interface InputElements{
    label:string, 
    type:string, 
    name:string, 
    value:string | number, 
    onChange:(e: ChangeEvent<HTMLInputElement>) => void, 
    placeholder:string, 
    required?:boolean
}

const Input:React.FC<InputElements> =(props)=> {
  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      />
    </div>
  );
};

export default Input;
