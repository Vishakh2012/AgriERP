import React from 'react';

interface HandleInputChangeProps {
  rows: any[]; 
  getProductDetails: (itemCode: string, productData: any[]) => any; // Update the type to accept two arguments
  setRows: React.Dispatch<React.SetStateAction<any[]>>; 
}

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  fieldName: string,
  rowIndex: number,
  { rows, getProductDetails, setRows }: HandleInputChangeProps
): void => {
  const { value } = e.target;
  const updatedRows = [...rows];
  updatedRows[rowIndex][fieldName] = value;

  if (fieldName === 'itemCode') {
    const productDetails = getProductDetails(value, productData); // Pass the productData to getProductDetails
    if (productDetails) {
      Object.keys(productDetails).forEach(key => {
        if (key !== 'itemCode') { 
          updatedRows[rowIndex][key] = productDetails[key];
        }
      });
    } else {
      Object.keys(updatedRows[rowIndex]).forEach(key => {
        if (key !== 'itemCode') { 
          updatedRows[rowIndex][key] = '';
        }
      });
    }
  }

  setRows(updatedRows);
};

export default handleInputChange;
