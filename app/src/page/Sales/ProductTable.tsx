import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import billData from "./billData";

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

const ProductTable = () => {
  const [billNo, setBillNo] = useState(100); // Initialize bill number to start from 100
  const [grandTotal, setGrandTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const currentRowIndex = useRef(0);
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gstType, setGstType] = useState("No gst");

  const initialRowState = () => {
    // Get the keys from the first staff details object
    const keys = Object.keys(staffDetails[0]);

    // Initialize each key with an empty string
    const initialState = {};
    keys.forEach(key => {
      initialState[key] = "";
    });

    return initialState;
  };

  const [rows, setRows] = useState([initialRowState()]);

  useEffect(() => {
    calculateGrandTotal();
  }, [rows]);

  useEffect(() => {
    billData.length = 0;
    console.log("Bill data has been reset to null");
  }, []);

  const calculateGrandTotal = () => {
    let total = 0;
    let totalDiscountAmount = 0;
    let totalRate=0;
    rows.forEach((row) => {
      const quantity = parseFloat(row.quantity);
      const rate = parseFloat(row.rate);
      const discount = parseFloat(row.discount);
      if (!isNaN(quantity) && !isNaN(rate)) {
        const amountBeforeDiscount = quantity * rate;
        const discountAmount = (amountBeforeDiscount * discount) / 100;
        const finalAmount = amountBeforeDiscount - discountAmount;
        total += finalAmount;
        totalRate+=amountBeforeDiscount;
        totalDiscountAmount += discountAmount;
        row.finalAmount = finalAmount;
      }
    });
    setGrandTotal(total);
    setTotalPrice(totalRate); // Total price is the same as grand total without discount
    setTotalDiscount(totalDiscountAmount);
  };

  const handleInputChange = (e, fieldName, rowIndex) => {
    const { value } = e.target;
    const updatedRows = [...rows];
    updatedRows[rowIndex][fieldName] = value;
    setRows(updatedRows);
  };

  const handleEnterKeyPress = (e, rowIndex) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of the Enter key
      const { name } = e.target;
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

  const addNewRow = () => {
    if (currentRowIndex.current !== null && currentRowIndex.current < rows.length) {
      const oldRowIndex = currentRowIndex.current;
      const oldRow = rows[oldRowIndex];
      console.log("Old row:", oldRow);
      billData.push(oldRow);
    }
    const newRow = initialRowState();
    setRows([...rows, newRow]);
    setCurrentRowIndex(rows.length);
  };

  const setCurrentRowIndex = (index) => {
    currentRowIndex.current = index;
  };

  const handleGstTypeChange = (e) => {
    setGstType(e.target.value);
  };

  const generateBill = () => {
    if (!mobileNumber) {
      alert("Please enter the mobile number.");
      return;
    }
    billData.push({
      billNo: billNo,
      customerName: customerName,
      mobileNumber: mobileNumber,
    });
    console.log("Bill Data:", billData);
  };

  const handleKeyPress = (e) => {
    if (e.key === "p" || e.key === "P") {
      generateBill();
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  const renderRows = () => {
    return rows.map((row, index) => (
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
    ));
  };

  return (
    <div className="overflow-x-auto flex-grow">
      <div className="flex flex-col h-full">
      <div className="p-4">
  <div className="flex flex-col md:flex-row md:justify-between">
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col mb-4 md:mb-0">
        <label htmlFor="customerName" className="mb-2">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border px-2 py-1 rounded focus:outline-none"
        />
      </div>
      <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
        <label htmlFor="mobileNumber" className="mb-2">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="border px-2 py-1 rounded focus:outline-none"
        />
      </div>
      <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
        <label htmlFor="billNo" className="mb-2">Bill No:</label>
        <input type="text" id="billNo" value={billNo} disabled className="border px-2 py-1 rounded focus:outline-none" />
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-end">
      <label htmlFor="gstType" className="mb-2 md:mr-2">GST Type:</label>
      <select id="gstType" value={gstType} onChange={handleGstTypeChange} className="border px-2 py-1 rounded focus:outline-none md:ml-2">
        <option value="No gst">No GST</option>
        <option value="Gst">GST</option>
        <option value="Igst">IGST</option>
      </select>
    </div>
  </div>
</div>

        <div className="mt-4"></div> {/* Add space between inputs and table */}
        <Table className="table-auto border-collapse w-full ">
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
          <TableBody className="text-center">{renderRows()}</TableBody>
        </Table>
        {/* Fill remaining space */}
        <div className="mt-4"></div> {/* Add space between table and grand total */}
        
        <div className="p-4 bg-white border-t flex flex-col md:flex-row md:justify-end">
          <div className="md:flex md:items-center">
            <label htmlFor="totalPrice" className="mr-2">Total Price:</label>
            <input type="text" id="totalPrice" value={totalPrice} disabled className="border px-2 py-1 rounded focus:outline-none" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <label htmlFor="totalDiscount" className="mr-2">Total Discount:</label>
            <input type="text" id="totalDiscount" value={totalDiscount} disabled className="border px-2 py-1 rounded focus:outline-none" />
          </div>
        </div>
        <div className="p-4 bg-white border-t flex justify-end ">
        <div>
            <label htmlFor="totalPrice">Grand Total</label>
            <input type="text" id="totalPrice" value={grandTotal} disabled className="border px-2 py-1 rounded focus:outline-none ml-2" />
          </div>
        </div>
        <div className="p-4 bg-white border-t flex justify-end">
          <button onClick={generateBill} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto">Generate Bill</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
