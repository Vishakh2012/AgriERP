import React from 'react';
import Select, { ValueType } from 'react-select';

interface OptionType {
  label: string;
  value: string | number;
}

interface SelectElements {
  label: string;
  name: string;
  value: ValueType<OptionType>;
  onChange: (value: ValueType<OptionType>, actionMeta: any) => void;
  placeholder: string;
  required?: boolean;
  isMulti: boolean;
  options: OptionType[];
}

const CustomSelect: React.FC<SelectElements> = (props) => {
  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">{props.label}</label>
      <Select
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        options={props.options}
        isMulti={props.isMulti}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CustomSelect;
