import React, { useState } from 'react';
import Header from "@/components/Header/Header";
import TableInputs from "../../components/TableInputs/TableInputs";
import CustomTable from "../../components/TableForm/CustomTable";
import TableFooter from "../../components/TableFooter/TableFooter";

interface SalesFormProps {
    handleImport: React.ChangeEventHandler<HTMLInputElement>;
    rows: any[]; 
    staffDetails: any[]; 
    gstType: string; 
    productData: any[]; 
    setRows: React.Dispatch<React.SetStateAction<any[]>>; 
    currentRowIndex: React.MutableRefObject<number>;
    totalPrice: number;
    totalDiscount: number;
    grandTotal: number;
}

const Sales_Form: React.FC<SalesFormProps> = ({
    handleImport,
    rows,
    gstType,
    productData,
    setRows,
    currentRowIndex,
    totalPrice,
    totalDiscount,
    grandTotal
}) => {
    return (
        <div>
            <div className='m-3 p-4'>
                <Header text='Add New Sales' />
            </div>
            <div className="mb-8 mt-10">
                <div className="overflow-x-auto flex-grow">
                    <TableInputs handleImport={handleImport} />
                    <CustomTable
                        rows={rows}
                        staffDetails={[]} // Placeholder value
                        gstType={gstType}
                        productData={productData}
                        setRows={setRows}
                        currentRowIndex={currentRowIndex}
                    />
                    <TableFooter
                        totalPrice={totalPrice}
                        totalDiscount={totalDiscount}
                        grandTotal={grandTotal}
                    />
                </div>
            </div>
        </div>
    );
}

export default Sales_Form;
