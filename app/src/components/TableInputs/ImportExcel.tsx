import React from 'react';
interface ImportExcelHook {
    handleImport: React.ChangeEventHandler<HTMLInputElement>;
  } 

const ImportExcel: React.FC<ImportExcelHook> = (props) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:ml-4">
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => document.getElementById('fileInput')?.click()}>Import Excel</button>
      <input id="fileInput" type="file" style={{ display: 'none' }} onChange={props.handleImport} />
    </div>
  );
};

export default ImportExcel;
