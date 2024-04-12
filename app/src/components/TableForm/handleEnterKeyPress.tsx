import React from 'react';

interface HandleEnterKeyPressProps {
  gstType: string; 
  staffDetails: any[]; 
  rows: any[]; 
  addNewRow: () => void; 
  currentRowIndex: React.MutableRefObject<number>; 
}

const handleEnterKeyPress = (
  e: React.KeyboardEvent<HTMLInputElement>,
  rowIndex: number,
  { gstType, staffDetails, rows, addNewRow, currentRowIndex }: HandleEnterKeyPressProps
): void => {
  if (e.key === "Enter") {
    e.preventDefault(); 
    const { name } = e.target as HTMLInputElement;
    const columnNames = Object.keys(staffDetails[0]);
    const isLastColumn = (
      (gstType === "No gst" && name === "quantity") ||
      (gstType === "Gst" && name === "CGST")
    );
    if (isLastColumn) {
      const rateIndex = columnNames.indexOf("rate");
      if (rateIndex !== -1) {
        const rateInput = document.getElementsByName("rate")[rowIndex];
        if (rateInput) {
          rateInput.focus();
          return;
        }
      }
    }
    const currentColumnNameIndex = columnNames.indexOf(name);
    const nextColumnName = columnNames[currentColumnNameIndex + 1];
    if (nextColumnName) {
      const nextInput = document.getElementsByName(nextColumnName)[rowIndex];
      if (nextInput) {
        nextInput.focus();
      }
    } else {
      addNewRow();
      setTimeout(() => {
        const newRowIndex = rows.length;
        const firstInputOfNewRow = document.getElementsByName(columnNames[0])[newRowIndex];
        if (firstInputOfNewRow) {
          firstInputOfNewRow.focus();
        }
      }, 0);
    }
  }
};

export default handleEnterKeyPress;
