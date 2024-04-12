import React from 'react';
import RenderRows from './renderRows';
import handleInputChange from './handleInputChange';
import handleEnterKeyPress from './handleEnterKeyPress';
import getProductDetails from './getProductDetails';
import addNewRow from './addNewRow';
import { Table, TableHeader, TableRow, TableHead, TableBody } from '@/components/ui/table'; // Import your table components from the appropriate library

interface TableProps {
  rows: any[]; 
  staffDetails: any[]; 
  gstType: string; 
  productData: any[]; 
  setRows: React.Dispatch<React.SetStateAction<any[]>>; 
  currentRowIndex: React.MutableRefObject<number>;
}

const CustomTable: React.FC<TableProps> = ({ rows, staffDetails, gstType, productData, setRows, currentRowIndex }) => {
  return (
    <Table className="table-auto border-collapse w-full">
      <TableHeader className="sticky top-0 bg-white z-10">
        <TableRow>
          <TableHead className="w-[100px] text-center font-medium">Serial Number</TableHead>
          {Object.keys(staffDetails[0]).map((key) => (
            (gstType === "No gst" && key !== "SGST" && key !== "CGST" && key !== "IGST") ||
            (gstType === "Gst" && key !== "IGST") ||
            gstType === "Igst" ? (
              <TableHead key={key} className="w-[100px] text-center font-medium">{key}</TableHead>
            ) : null
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-center">
        <RenderRows
          rows={rows}
          staffDetails={staffDetails}
          gstType={gstType}
          handleInputChange={(e, fieldName, rowIndex) => handleInputChange(e, fieldName, rowIndex, { rows, getProductDetails, setRows })}
          handleEnterKeyPress={(e, rowIndex) => handleEnterKeyPress(e, rowIndex, { gstType, staffDetails, rows, addNewRow, currentRowIndex })}
        />
      </TableBody>
    </Table>
  );
};

export default CustomTable;
