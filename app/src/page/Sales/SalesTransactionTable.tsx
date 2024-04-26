import { useState, useEffect, ChangeEvent } from "react";
import salesBillData from "./salesBillData";
import * as XLSX from 'xlsx';
import TableInvoice from "@/components/TableInvoice/TableInvoice";
import usePriceCalc from "@/hooks/usePriceCalc";
import useRowHandler from "@/hooks/useAutoFillInvoice";
import CustomerDetailsAndGST from "@/components/CustomerDetailsAndGST/CustomerDetailsAndGST";
import { Button } from "@/components/ui/button";


const staffDetails = [
    {
        itemCode: '',
        itemName: '',
        HSN: '',
        quantity: '',
        SGST: '',
        CGST: '',
        IGST: '',
        rate: '',
        discount: '',
        finalAmount: '',
    }
];

const productData = [
    {
        itemCode: '001',
        itemName: 'Product 1',
        HSN: '12345',
        SGST: '5',
        CGST: '5',
        IGST: '0',
        rate: '100',
        discount: '10',
    },
    {
        itemCode: '002',
        itemName: 'Product 2',
        HSN: '67890',
        SGST: '7.5',
        CGST: '7.5',
        IGST: '0',
        rate: '150',
        discount: '15',
    },
    // Add more sample product details as needed
];

interface Data {
    [key: string]: string
}

const SalesTransactionTable = () => {
    const [gstType, setGstType] = useState<string>('No GST')
    const { handleInputChange, handleEnterKeyPress, currentRowIndex, rows } = useRowHandler(staffDetails, productData, gstType)

    const { grandTotal, totalPrice, totalDiscount } = usePriceCalc(rows)
    useEffect(() => {
        salesBillData.length = 0;
        console.log("Bill data has been reset to null");
    }, []);

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];  // Use optional chaining to safely access files
        if (file) {
            const reader = new FileReader();
            reader.onload = (evt: ProgressEvent<FileReader>) => {
                const data = evt.target?.result;
                if (typeof data === "string") { // Ensure that data is a string
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
    const sendCSVToBackend = (csvData) => {
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
    const handleGSTChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setGstType(e.target.value)
    }
    const handlePrintAndRequestSending = () => {
         window.print()
    }
    return (
        <div className="overflow-x-auto flex-grow bg-white w-11/12 print:w-screen rounded-md print:h-screen">
            <div className="hidden print:flex print:top-0 w-full print:justify-center">
                <img src="/header.png" alt="image" style={{ width: '100vw', maxHeight: '30vh' }} />
            </div>

            <div className="print:h-7/10 print:py-0">
                <CustomerDetailsAndGST handleGSTChange={handleGSTChange} handleImport={handleImport} gstType={gstType} />
                <TableInvoice gstType={gstType} Details={staffDetails} rows={rows} productData={productData} handleEnterKeyPress={handleEnterKeyPress} handleInputChange={handleInputChange} currentRowIndex={currentRowIndex.current} />
                {/* Fill remaining space */}
                <div className=" flex flex-col float-end">

                    <div className="p-4 bg-white border-t flex flex-col md:justify-end float-end">
                        <div className="md:flex  flex-row md:items-center">
                            <label className="print:text-sm">Total Price:</label>
                            <input type="text" id="totalPrice" value={totalPrice} disabled className="border-none px-2 py-1 rounded focus:outline-none" />
                        </div>
                        <div className="mt-4 md:mt-0 md-flex">
                            <label className="mr-2 print:text-sm">Total Discount:</label>
                            <input type="text" id="totalDiscount" value={totalDiscount} disabled className="border-none px-2 py-1 rounded focus:outline-none" />
                        </div>
                    </div>
                    <div className="p-4 bg-white border-t flex ">
                        <div className="md:flex items-center">
                            <label className='print:text-sm' htmlFor="totalPrice">Grand Total</label>
                            <input type="text" id="totalPrice" value={grandTotal} disabled className="border-none px-2 py-1 rounded focus:outline-none mr-auto" />
                        </div>
                    </div>
                    <Button className="bg-blue-700" onClick={handlePrintAndRequestSending}>Print Bill</Button>
                </div>
            </div>
        </div>
    );
};

export default SalesTransactionTable;



