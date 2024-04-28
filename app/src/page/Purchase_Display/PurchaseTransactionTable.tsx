import { useState, useEffect, ChangeEvent } from "react";
import * as XLSX from 'xlsx';
import TableInvoice from "@/components/TableInvoice/TableInvoice";
import usePriceCalc from "@/hooks/usePriceCalc";
import useRowHandler from "@/hooks/useAutoFillInvoice";
import CustomerDetailsAndGST from "@/components/CustomerDetailsAndGST/CustomerDetailsAndGST";
import { Button } from "@/components/ui/button";
import useBillInfo from "@/hooks/useBillInfo";

const productDetails = [
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
interface tax {
    HSN: string,
    CGST: number,
    SGST: number,
    IGST: number
}
interface SelectedRow {
    itemCode: string;
    name: string;
    HSN: string;
    quantity: string;
    tax:tax,
    price: number;
    discount: string;
    finalAmount: string;
}


const getSelectedRows= (arrayOfObjects: SelectedRow[]) => {
    return arrayOfObjects.map(obj  => ({
        itemCode: obj.itemCode || '', // If itemCode is undefined, set it to an empty string
        itemName: obj.name || '',
        HSN: obj.HSN || '',
        quantity: obj.quantity || '',
        SGST: obj.tax.SGST || '',
        CGST: obj.tax.CGST || '',
        IGST: obj.tax.IGST || '',
        rate: obj.price || '',
        discount: obj.discount || '',
        finalAmount: obj.finalAmount || ''
    }));
}
const PurchaseTransactionTable = () => {
    const [gstType, setGstType] = useState<string>('No GST')
    const [ productData  , setProductData ] = useState(getSelectedRows(JSON.parse(localStorage.getItem("product")).data))
    const { handleInputChange, handleEnterKeyPress, handleCustomerDetailsEnterKeyPress,
        currentRowIndex, rows, setRows, initialRowState } = useRowHandler(productDetails, productData , gstType)
    const { grandTotal, totalPrice, totalDiscount } = usePriceCalc(rows)
    const { billNo, customerName, mobileNumber, handleMobileNumber, handleCustomerName, setBillNo } = useBillInfo()
    const sendRequest = async () => {
        try {
            const saleTransaction = {
                billNo: billNo,
                itemSold: rows,
                totalAmountWithoutDiscount: totalPrice,
                totalDiscount: totalDiscount,
                finalAmount: grandTotal
            }
            const stringifiedTransaction = JSON.stringify(saleTransaction)
            console.log(stringifiedTransaction)
            const accessToken = localStorage.getItem('accessToken')
            const response = await fetch('http://localhost:5050/api/sales/add', {
                method: "POST",
                headers: {
                      'Content-Type': 'application/json',
                    'x-access-token': accessToken ? accessToken : ''
                },
                body: JSON.stringify(saleTransaction)
            }

            );
            console.log(response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
    const handlePrintAndRequestSending = async () => {
        window.print()
        await sendRequest()
        setRows([initialRowState()])

        const randomPart = Math.random().toString(36).slice(2, 11);

        const timestampPart = new Date().getTime().toString(36);
        const uniqueId = randomPart + timestampPart;
        setBillNo(uniqueId);
    }

const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && (e.key === "p" || e.key === "P")) {
            e.preventDefault();
            console.log(productData)
            // Simulate a click event on the button
            const button = document.getElementById("submitButton");
            if (button) {
                button.click();
            }
        }
    };
    useEffect(() => {
        console.log("Bill data has been reset to null");
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
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
    const sendCSVToBackend = async (csvData: any) => {
        try {
            // Send the CSV data to the backend
            const response = await fetch('your_backend_url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/csv', // Set the content type to text/csv
                },
                body: csvData,
            });

            if (response.ok) {
                console.log('CSV data sent to backend successfully');
            } else {
                throw new Error('Failed to send CSV data to the backend');
            }
        } catch (error) {
            console.error('There was an error sending CSV data to the backend:', error);
        }
    };
    const handleGSTChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setGstType(e.target.value)
    }
    return (
        <div className="overflow-x-auto flex-grow bg-white w-11/12 print:w-screen rounded-md print:h-screen">
            <div className="hidden print:flex print:top-0 w-full print:justify-center">
                <img src="/header.png" alt="image" style={{ width: '100vw', maxHeight: '30vh' }} />
            </div>

            <div className="print:h-7/10 print:py-0">
                <CustomerDetailsAndGST
                    handleGSTChange={handleGSTChange}
                    handleImport={handleImport}
                    gstType={gstType}
                    handleCustomerDetailsEnterKeyPress={handleCustomerDetailsEnterKeyPress}
                    billNo={billNo}
                    customerName={customerName}
                    handleCustomerName={handleCustomerName}
                    mobileNumber={mobileNumber}
                    handleMobileNumber={handleMobileNumber}
                />

                <TableInvoice gstType={gstType}
                    Details={productData}
                    rows={rows}
                    productData={productData}
                    handleEnterKeyPress={handleEnterKeyPress}
                    handleInputChange={handleInputChange}
                    currentRowIndex={currentRowIndex.current}
                />

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
                    <Button className="bg-blue-700 print:hidden" id="submitButton" onClick={handlePrintAndRequestSending}>Print Bill</Button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseTransactionTable;



