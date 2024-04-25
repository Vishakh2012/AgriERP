import React, { ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
interface InputElements {
  label: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
}

const InputComponent: React.FC<InputElements> = (props) => {

  

  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <Input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
        disabled={props.disabled} 
        onKeyDown={props.onKeyDown}
        onClick={props.onClick}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md "
      />
    </div>
  );
};

export default InputComponent;
