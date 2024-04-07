import React, { ChangeEvent } from 'react';

interface SelectElements {
    label: string;
    name: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;
    required?: boolean;
    text: string;
}

const CustomSelect: React.FC<SelectElements> = (props) => {
    return (
        <div>
            <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">{props.text}</label>
            <select
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="">{props.placeholder}</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
    );
};

export default CustomSelect;
