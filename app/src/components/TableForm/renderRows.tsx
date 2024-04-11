import React from 'react';
import { useRef } from 'react';

interface RenderRowsProps {
  rows: any[]; 
  staffDetails: any[]; 
  gstType: string; 
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string,
    rowIndex: number
  ) => void;
  handleEnterKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement>,
    rowIndex: number
  ) => void;
}

const RenderRows: React.FC<RenderRowsProps> = ({ rows, staffDetails, gstType, handleInputChange, handleEnterKeyPress }) => {
    const currentRowIndex = useRef(0);
  return (
    <>
      {rows.map((row, index) => (
        <tr key={index}>
          <td className="border px-4 py-2">{index + 1}</td>
          {Object.keys(staffDetails[0]).map((key) => (
            (gstType === "No gst" && key !== "SGST" && key !== "CGST" && key !== "IGST") ||
            (gstType === "Gst" && key !== "IGST") ||
            gstType === "Igst" ? (
              <td key={key} className="border px-4 py-2">
                <input
                  type="text"
                  value={row[key]}
                  name={key}
                  onChange={(e) => handleInputChange(e, key, index)}
                  onKeyPress={(e) => handleEnterKeyPress(e, index)}
                  autoFocus={index === currentRowIndex.current && key === "productName"}
                  className="w-full focus:outline-none"
                />
              </td>
            ) : null))}
        </tr>
      ))}
    </>
  );
};

export default RenderRows;
