import React from 'react';
import * as XLSX from 'xlsx';

interface ImportExcelHook {
  handleImport: React.ChangeEventHandler<HTMLInputElement>;
}

const useImportExcel = (): ImportExcelHook => {
  const handleImport: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target) { // Check if evt.target exists
          const data = evt.target.result as string;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetNames = workbook.SheetNames;

          sheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            const csvData = XLSX.utils.sheet_to_csv(sheet);
            sendCSVToBackend(csvData);
          });
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  const sendCSVToBackend = (csvData: string) => {
    // Send the CSV data to the backend
    fetch('your_backend_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/csv', // Set the content type to text/csv
      },
      body: csvData,
    })
      .then(() => {
        console.log('CSV data sent to backend successfully');
      })
      .catch(error => {
        console.error('There was an error sending CSV data to the backend:', error);
      });
  };

  return { handleImport };
};

export default useImportExcel;
