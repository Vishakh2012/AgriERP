import React from "react";

const ImportExcelButton = ({ handleImport }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:ml-4">
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => document.getElementById('fileInput').click()}>Import Excel</button>
    <input id="fileInput" type="file" style={{display: 'none'}} onChange={handleImport} />
  </div>
  );
};

export default ImportExcelButton;