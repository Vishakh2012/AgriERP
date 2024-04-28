import { Table, TableHeader, TableRow, TableBody, TableHead, TableCell } from "../ui/table"
import { ChangeEvent, useState } from "react"
import React from "react"

interface Data {
    [key: string]: string
}

interface InvoiceInfo {
    Details: Data[],
    gstType: string,
    rows: Data[],
    productData: Data[],
    handleEnterKeyPress: (e: React.KeyboardEvent<HTMLInputElement>, rowIndex: number) => void,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>,fieldName:string, rowIndex: number) => void,
    currentRowIndex: number
}// React component imports remain the same

const TableInvoice: React.FC<InvoiceInfo> = (props) => {
    const renderRows = () => {
        return props.rows.map((row, index: number) => (
            <TableRow key={index}>
                <TableCell className="py-2 print:hidden w-[80px] text-wrap pl-2">{index + 1}</TableCell>
                {Object.keys(props.Details[0]).map((key) => (
                    (props.gstType === "No GST" && key !== "SGST" && key !== "CGST" && key !== "IGST") ||
                    (props.gstType === "GST" && key !== "IGST") ||
                    props.gstType === "IGST" ? (
                        <TableCell key={key} className="pl-2 py-2 text-wrap print:text-wrap">
                            <input
                                type="text"
                                value={row[key]}
                                name={key}
                                onChange={(e) => props.handleInputChange(e, key, index)}
                                onKeyDown={(e) => props.handleEnterKeyPress(e, index)}
                                className="w-full print:text-wrap focus:outline-none print:text-xs"
                            />
                        </TableCell>
                    ) : null))}
            </TableRow>
        ));
    };

    return (
        <Table className="table border-collapse w-full my-8 print:my-0 bg-white print:w-4/5">
            <TableHeader className=" top-0 bg-white z-10 print:bg-white print:justify-start">
                <TableRow>
                    <TableHead className="text-center text-xs print:hidden">SNo.</TableHead>
                    {Object.keys(props.Details[0]).map((key) => (
                        (props.gstType === "No GST" && key !== "SGST" && key !== "CGST" && key !== "IGST") ||
                        (props.gstType === "GST" && key !== "IGST") ||
                        props.gstType === "IGST" ? (
                            <TableHead key={key} className="text-start print:text-left print:w-[100px] font-medium print:text-xs print:justify-start">{key}</TableHead>
                        ) : null
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody className="text-center">{renderRows()}</TableBody>
        </Table>
    );
}

export default TableInvoice;

