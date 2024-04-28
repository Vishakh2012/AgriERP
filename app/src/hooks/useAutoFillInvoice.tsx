import { ChangeEvent, useState, useRef, KeyboardEvent } from "react";
import SalesBillData from "@/page/Sales/salesBillData";
interface rowInfo {
    [key: string]: string
}

interface data {
    [key: string]: string
}
const useRowHandler = (Details: data[], productData: data[], gstType: string) => {
    const currentRowIndex = useRef(0);


    const initialRowState = (): data => {
        const keys = Object.keys(Details[0]);
        const initialState: data = {};
        keys.forEach(key => {
            initialState[key] = "";
        });

        return initialState;
    };


    const [rows, setRows] = useState<rowInfo[]>([initialRowState()]);


    const getProductDetails = (itemCode: string) => {
        const product = productData.find(product => product.itemCode === itemCode);
        return product ? { ...product } : null;
    };


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, fieldName: string, rowIndex: number) => {
        const { value } = e.target;
        const updatedRows = [...rows];
        updatedRows[rowIndex][fieldName] = value;

        if (fieldName === 'itemCode') {
            const productDetails = getProductDetails(value);
            if (productDetails) {
                Object.keys(productDetails).forEach(key => {
                    if (key !== 'itemCode') { // Exclude item code from autofill
                        updatedRows[rowIndex][key] = productDetails[key];
                    }
                });
            } else {
                // Clear other fields if product details not found
                Object.keys(updatedRows[rowIndex]).forEach(key => {
                    if (key !== 'itemCode') { // Exclude item code from clearing
                        updatedRows[rowIndex][key] = '';
                    }
                });
            }
        }

        setRows(updatedRows);
    };

    const addNewRow = () => {
        if (currentRowIndex.current !== null && currentRowIndex.current < rows.length) {
            const oldRowIndex = currentRowIndex.current;
            const oldRow = rows[oldRowIndex];
            console.log("Old row:", oldRow);
            SalesBillData.push(oldRow);
        }
        const newRow = initialRowState();
        setRows([...rows, newRow]);
        setCurrentRowIndex(rows.length);
        console.log(rows)
    };


    const setCurrentRowIndex = (index: number) => {
        currentRowIndex.current = index;
    };


    const handleEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>, rowIndex: number) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent the default behavior of the Enter key
            const name = e.currentTarget.name;
            const columnNames = Object.keys(Details[0]);
            const isLastColumn = (
                (gstType === "No GST" && name === "quantity") ||
                (gstType === "GST" && name === "CGST")
            );
            if (isLastColumn) {
                const nextColumnName = 'rate';
                const rateInput = document.getElementsByName(nextColumnName)[rowIndex];
                if (rateInput) {
                    rateInput.focus();
                    return;
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

    const handleCustomerDetailsEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent the default behavior of the Enter key
            const fieldName = e.currentTarget.name;
            if (fieldName === "customerName") {
                // Move focus to the mobile number input
                const mobileNumberInput = document.getElementById("mobileNumber");
                if (mobileNumberInput) {
                    mobileNumberInput.focus();
                }
            } else if (fieldName === "mobileNumber") {
                // Move focus to the first row item code input
                const itemCodeInput = document.getElementsByName("itemCode")[0] as HTMLInputElement;
                if (itemCodeInput) {
                    itemCodeInput.focus();
                }
            }
        }
    }

    return { handleInputChange, handleEnterKeyPress,handleCustomerDetailsEnterKeyPress, currentRowIndex, rows }

}

export default useRowHandler


