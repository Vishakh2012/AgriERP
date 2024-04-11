import React from 'react'
import FormInputs from './FormInputs'
import GstTypeDropdown from './GstTypeDropdown'
import ImportExcel from './ImportExcel'
interface TableInputs{
    handleImport: React.ChangeEventHandler<HTMLInputElement>;
}

const TableInputs : React.FC<TableInputs> = (props) => {
  return (
      <div className="flex flex-col h-full">
       <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between">
            <FormInputs/>
            <GstTypeDropdown/>
            <ImportExcel handleImport={props.handleImport} />
        </div>
       </div>
      </div>
  )
}

export default TableInputs