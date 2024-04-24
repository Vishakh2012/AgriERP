import { Table, TableHeader, TableRow, TableBody, TableHead } from "../ui/table"
import { ChangeEvent, useState } from "react"

interface Data {
    [key: string]: string
}

interface InvoiceInfo {
    Details: Data[],
    gstType: string,
    rows: Data[],
    productData: Data[],
    handleEnterKeyPress: (e: KeyboardEvent<HTMLInputElement>, rowIndex: number) => void,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>,fieldName:string, rowIndex: number) => void,
    currentRowIndex: number
}// React component imports remain the same

const TableInvoice: React.FC<InvoiceInfo> = (props) => {
    const renderRows = () => {
        return props.rows.map((row, index: number) => (
            <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                {Object.keys(props.Details[0]).map((key) => (
                    (props.gstType === "No gst" && key !== "SGST" && key !== "CGST" && key !== "IGST") ||
                    (props.gstType === "Gst" && key !== "IGST") ||
                    props.gstType === "Igst" ? (
                        <td key={key} className="border px-4 py-2">
                            <input
                                type="text"
                                value={row[key]}
                                name={key}
                                onChange={(e) => props.handleInputChange(e, key, index)}
                                onKeyDown={(e) => props.handleEnterKeyPress(e, index)}
                                autoFocus={index === props.currentRowIndex && key === "productName"}
                                className="w-full print:w-[18px] focus:outline-none print:text-small"
                            />
                        </td>
                    ) : null))}
            </tr>
        ));
    };

    return (
        <Table className="table border-collapse w-full my-8 print:w-full print:my-0 bg-white">
            <TableHeader className="sticky top-0 bg-white z-10 print:bg-white print:text-black">
                <TableRow>
                    <TableHead className="text-center font-medium w-auto print:w-[100px]">Serial Number</TableHead>
                    {Object.keys(props.Details[0]).map((key) => (
                        (props.gstType === "No gst" && key !== "SGST" && key !== "CGST" && key !== "IGST") ||
                        (props.gstType === "Gst" && key !== "IGST") ||
                        props.gstType === "Igst" ? (
                            <TableHead key={key} className="text-center print:text-right font-medium print:font-medium">{key}</TableHead>
                        ) : null
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody className="text-center">{renderRows()}</TableBody>
        </Table>
    );
}

export default TableInvoice;

