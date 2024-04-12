// import React, { useState, useEffect, useRef } from "react";
// import salesBillData from "./salesBillData";
// import generatePDF from "../../Bill/pdfGenerator";
// import generatePrintableBill  from "../../Bill/BillGenerator";
// import CustomerDetails from "./CustomerDetails";
// import GenerateBill from "./GenerateBill";
// import TableSection from "./TableSection";
// import TotalDetails from "./TotalDetails";
// import GstTypeDropdown from "./GstTypeDropdown";
// import ImportExcelButton from "./ImportExcelButton";
// import * as XLSX from 'xlsx';
// import GenerateBillDialog from "./MOP_DialogBox";


// const staffDetails = [
//   {
//     itemCode: '',
//     itemName: '',
//     HSN: '',
//     quantity: '',
//     SGST: '',
//     CGST: '',
//     IGST: '',
//     rate: '',
//     discount: '',
//     finalAmount: '',
//   }
// ];

// const productData = [
//   {
//     itemCode: '001',
//     itemName: 'Product 1',
//     HSN: '12345',
//     SGST: '5',
//     CGST: '5',
//     IGST: '0',
//     rate: '100',
//     discount: '10',
//   },
//   {
//     itemCode: '002',
//     itemName: 'Product 2',
//     HSN: '67890',
//     SGST: '7.5',
//     CGST: '7.5',
//     IGST: '0',
//     rate: '150',
//     discount: '15',
//   },
//   // Add more sample product details as needed
// ];


// const ProductTable = () => {
//   const [billNo, setBillNo] = useState(100); // Initialize bill number to start from 100
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalDiscount, setTotalDiscount] = useState(0);
//   const currentRowIndex = useRef(0);
//   const [customerName, setCustomerName] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [gstType, setGstType] = useState("No gst");
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedPayment, setSelectedPayment] = useState("");

//   const initialRowState = () => {
//     // Get the keys from the first staff details object
//     const keys = Object.keys(staffDetails[0]);

//     // Initialize each key with an empty string
//     const initialState = {};
//     keys.forEach(key => {
//       initialState[key] = "";
//     });

//     return initialState;
//   };

//   const [rows, setRows] = useState([initialRowState()]);

//   useEffect(() => {
//     calculateGrandTotal();
//   }, [rows]);

//   useEffect(() => {
//     salesBillData.length = 0;
//     console.log("Bill data has been reset to null");
//   }, []);

//   useEffect(() => {
//     // Increment the bill number when a new bill is generated
//     setBillNo(prevBillNo => prevBillNo + 1);
//   }, []);

//   const calculateGrandTotal = () => {
//     let total = 0;
//     let totalDiscountAmount = 0;
//     let totalRate=0;
//     rows.forEach((row) => {
//       const quantity = parseFloat(row.quantity);
//       const rate = parseFloat(row.rate);
//       const discount = parseFloat(row.discount);
//       if (!isNaN(quantity) && !isNaN(rate)) {
//         const amountBeforeDiscount = quantity * rate;
//         const discountAmount = (amountBeforeDiscount * discount) / 100;
//         const finalAmount = amountBeforeDiscount - discountAmount;
//         total += finalAmount;
//         totalRate+=amountBeforeDiscount;
//         totalDiscountAmount += discountAmount;
//         row.finalAmount = finalAmount;
//       }
//     });
//     setGrandTotal(total);
//     setTotalPrice(totalRate); // Total price is the same as grand total without discount
//     setTotalDiscount(totalDiscountAmount);
//   };

//  // Define a function to fetch product details based on item code
// const getProductDetails = (itemCode) => {
//   // Search for product details in the productData array
//   const product = productData.find(product => product.itemCode === itemCode);
//   return product ? { ...product } : null;
// };

// const handleInputChange = (e, fieldName, rowIndex) => {
//   const { value } = e.target;
//   const updatedRows = [...rows];
//   updatedRows[rowIndex][fieldName] = value;

//   if (fieldName === 'itemCode') {
//     // Fetch product details based on the entered item code
//     const productDetails = getProductDetails(value);
//     if (productDetails) {
//       // Update other fields with product details
//       Object.keys(productDetails).forEach(key => {
//         if (key !== 'itemCode') { // Exclude item code from autofill
//           updatedRows[rowIndex][key] = productDetails[key];
//         }
//       });
//     } else {
//       // Clear other fields if product details not found
//       Object.keys(updatedRows[rowIndex]).forEach(key => {
//         if (key !== 'itemCode') { // Exclude item code from clearing
//           updatedRows[rowIndex][key] = '';
//         }
//       });
//     }
//   }

//   setRows(updatedRows);
// };

  

//   const handleEnterKeyPress = (e, rowIndex) => {
//     if (e.key === "Enter") {
//       e.preventDefault(); // Prevent the default behavior of the Enter key
//       const { name } = e.target;
//       const columnNames = Object.keys(staffDetails[0]);
//       const isLastColumn = (
//         (gstType === "No gst" && name === "quantity") ||
//         (gstType === "Gst" && name === "CGST")
//       );
//       if (isLastColumn) {
//         const rateIndex = columnNames.indexOf("rate");
//         if (rateIndex !== -1) {
//           const rateInput = document.getElementsByName("rate")[rowIndex];
//           if (rateInput) {
//             rateInput.focus();
//             return;
//           }
//         }
//       }
//       const currentColumnNameIndex = columnNames.indexOf(name);
//       const nextColumnName = columnNames[currentColumnNameIndex + 1];
//       if (nextColumnName) {
//         const nextInput = document.getElementsByName(nextColumnName)[rowIndex];
//         if (nextInput) {
//           nextInput.focus();
//         }
//       } else {
//         addNewRow();
//         setTimeout(() => {
//           const newRowIndex = rows.length;
//           const firstInputOfNewRow = document.getElementsByName(columnNames[0])[newRowIndex];
//           if (firstInputOfNewRow) {
//             firstInputOfNewRow.focus();
//           }
//         }, 0);
//       }
//     }
//   };

//   const addNewRow = () => {
//     if (currentRowIndex.current !== null && currentRowIndex.current < rows.length) {
//       const oldRowIndex = currentRowIndex.current;
//       const oldRow = rows[oldRowIndex];
//       console.log("Old row:", oldRow);
//       salesBillData.push(oldRow);
//     }
//     const newRow = initialRowState();
//     setRows([...rows, newRow]);
//     setCurrentRowIndex(rows.length);
//   };

//   const setCurrentRowIndex = (index) => {
//     currentRowIndex.current = index;
//   };

//   const handleGstTypeChange = (e) => {
//     setGstType(e.target.value);
//   };

//   const handleSubmitPayment = (paymentMode) => {

//     setSelectedPayment(paymentMode);
//     setOpenDialog(false);
//     console.log("Selected Payment Mode:", paymentMode);

//     // Add customer details to billData
//     const billDetails = {
//       customerName,
//       billNo,
//       mobileNumber,
//       grandTotal,
//       totalDiscount,
//       totalPrice,
//       modeOfPayment: paymentMode,
//     };
//     salesBillData.push(billDetails);
//     console.log("Bill data:", salesBillData);

//     // Call the generatePrintableBill function
//     const htmlContent = generatePrintableBill(
//       billNo,
//       customerName,
//       mobileNumber,
//       salesBillData,
//       grandTotal,
//       totalPrice,
//       totalDiscount,
//     );

//     // Generate PDF using the htmlContent
//     generatePDF(htmlContent);
//   };

//   const handleGenerateBillClick = () => {
//     // Check if mobile number is entered before opening the dialog
//     if (!mobileNumber || mobileNumber.trim() === "") {
//       alert("Please enter the mobile number.");
//       return;
//     }
//     // Open the dialog box if mobile number is entered
//     setOpenDialog(true);
//     return (
//       <GenerateBillDialog
//         open={openDialog}
//         onClose={() => setOpenDialog(false)}
//         onSubmit={handleSubmitPayment}
//       />
//     );
//   };
  

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if ((e.key === "p" || e.key === "P")) {
//         e.preventDefault(); // Prevent default behavior of the key press event
//         handleGenerateBillClick();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [mobileNumber, openDialog]);

//   const handleImport = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (evt) => {
//         const data = evt.target.result;
//         const workbook = XLSX.read(data, { type: "binary" });
//         const sheetNames = workbook.SheetNames;
        
//         sheetNames.forEach(sheetName => {
//           const sheet = workbook.Sheets[sheetName];
//           const csvData = XLSX.utils.sheet_to_csv(sheet);
//           sendCSVToBackend(csvData);
//         });
//       };
//       reader.readAsBinaryString(file);
//     }
//   };
  
//   const sendCSVToBackend = (csvData) => {
//     // Send the CSV data to the backend
//     fetch('your_backend_url', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'text/csv', // Set the content type to text/csv
//       },
//       body: csvData,
//     })
//     .then(() => {
//       console.log('CSV data sent to backend successfully');
//     })
//     .catch(error => {
//       console.error('There was an error sending CSV data to the backend:', error);
//     });
//   };
  
//   const renderRows = () => {
//     return rows.map((row, index) => (
//       <tr key={index}>
//         <td className="border px-4 py-2">{index + 1}</td>
//         {Object.keys(staffDetails[0]).map((key) => {
//           // Check if the current key should be rendered based on gstType
//           const shouldRender = (
//             (gstType === "No gst" && key !== "SGST" && key !== "CGST" && key !== "IGST") ||
//             (gstType === "Gst" && key !== "IGST") ||
//             gstType === "Igst"
//           );
//           // Render the input field if shouldRender is true
//           return shouldRender ? (
//             <td key={key} className="border px-4 py-2">
//               <input
//                 type="text"
//                 value={row[key]}
//                 name={key}
//                 onChange={(e) => handleInputChange(e, key, index)}
//                 onKeyPress={(e) => handleEnterKeyPress(e, index)}
//                 autoFocus={index === currentRowIndex.current && key === "productName"}
//                 className="w-full focus:outline-none"
//               />
//             </td>
//           ) : null;
//         })}
//       </tr>
//     ));
//   };
  

//   return (
//     <div className="overflow-x-auto flex-grow">
//       <div className="flex flex-col h-full">
//       <div className="p-4">
//       <CustomerDetails
//         customerName={customerName}
//         setCustomerName={setCustomerName}
//         mobileNumber={mobileNumber}
//         setMobileNumber={setMobileNumber}
//         billNo={billNo}
//       />
//       <div className="mt-4"></div>
//       <GstTypeDropdown
//         gstType={gstType}
//         handleGstTypeChange={handleGstTypeChange}
//       />
//       <div className="mt-4"></div>
//       <ImportExcelButton handleImport={handleImport} />
//   </div>
// </div>
//         <div className="mt-4"></div> 
//         {/* Add space between inputs and table */}
//         <TableSection renderRows={renderRows} />
//         <div className="mt-4"></div> {/* Add space between table and grand total */}
        
//         <TotalDetails
//         totalPrice={totalPrice}
//         totalDiscount={totalDiscount}
//         grandTotal={grandTotal}
//       />
//       <GenerateBill
//         openDialog={openDialog}
//         setOpenDialog={setOpenDialog}
//         handleGenerateBillClick={handleGenerateBillClick}
//       />
//       {openDialog && (
//         <GenerateBillDialog
//           open={openDialog}
//           onClose={() => setOpenDialog(false)}
//           onSubmit={handleSubmitPayment}
//         />
//       )}
//     </div>
//   );
// };

// export default ProductTable;
import React, { useState, useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import salesBillData from "./salesBillData";
import { generatePDF } from "../../components/Bill/pdfGenerator";
import { generatePrintableBill } from "../../components/Bill/BillGenerator";
import * as XLSX from 'xlsx';
import GenerateBillDialog from "../../components/TableFooter/MOP_DialogBox";

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


const ProductTable = () => {
  const [billNo, setBillNo] = useState(100); // Initialize bill number to start from 100
  const [grandTotal, setGrandTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const currentRowIndex = useRef(0);
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gstType, setGstType] = useState("No gst");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

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
    salesBillData.length = 0;
    console.log("Bill data has been reset to null");
  }, []);

  useEffect(() => {
    // Increment the bill number when a new bill is generated
    setBillNo(prevBillNo => prevBillNo + 1);
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

 // Define a function to fetch product details based on item code
const getProductDetails = (itemCode) => {
  // Search for product details in the productData array
  const product = productData.find(product => product.itemCode === itemCode);
  return product ? { ...product } : null;
};

const handleInputChange = (e, fieldName, rowIndex) => {
  const { value } = e.target;
  const updatedRows = [...rows];
  updatedRows[rowIndex][fieldName] = value;

  if (fieldName === 'itemCode') {
    // Fetch product details based on the entered item code
    const productDetails = getProductDetails(value);
    if (productDetails) {
      // Update other fields with product details
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
      salesBillData.push(oldRow);
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

  const handleSubmitPayment = (paymentMode) => {

    setSelectedPayment(paymentMode);
    setOpenDialog(false);
    console.log("Selected Payment Mode:", paymentMode);

    // Add customer details to salesBillData
    const billDetails = {
      customerName,
      billNo,
      mobileNumber,
      grandTotal,
      totalDiscount,
      totalPrice,
      modeOfPayment: paymentMode,
    };
    salesBillData.push(billDetails);
    console.log("Bill data:", salesBillData);

    // Call the generatePrintableBill function
    const htmlContent = generatePrintableBill(
      billNo,
      customerName,
      mobileNumber,
      salesBillData,
      grandTotal,
      totalPrice,
      totalDiscount,
    );

    // Generate PDF using the htmlContent
    generatePDF(htmlContent);
  };

  const handleGenerateBillClick = () => {
    // Check if mobile number is entered before opening the dialog
    if (!mobileNumber || mobileNumber.trim() === "") {
      alert("Please enter the mobile number.");
      return;
    }
    // Open the dialog box if mobile number is entered
    setOpenDialog(true);
    return (
      <GenerateBillDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleSubmitPayment}
      />
    );
  };
  

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === "p" || e.key === "P")) {
        e.preventDefault(); // Prevent default behavior of the key press event
        handleGenerateBillClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileNumber, openDialog]);

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const data = evt.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetNames = workbook.SheetNames;
        
        sheetNames.forEach(sheetName => {
          const sheet = workbook.Sheets[sheetName];
          const csvData = XLSX.utils.sheet_to_csv(sheet);
          sendCSVToBackend(csvData);
        });
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
          onChange={(e) => setMobileNumber(e.target.value.trim())}
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
    <div className="flex flex-col md:flex-row md:items-center md:ml-4">
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => document.getElementById('fileInput').click()}>Import Excel</button>
    <input id="fileInput" type="file" style={{display: 'none'}} onChange={handleImport} />
  </div>
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
          {openDialog ? (
            <GenerateBillDialog
              open={openDialog}
              onClose={() => setOpenDialog(false)}
              onSubmit={handleSubmitPayment}
            />
          ) : (
            <button
              onClick={handleGenerateBillClick}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto"
            >
              Generate Bill
            </button>
          )}
      </div>
      </div>
  );
};

export default ProductTable;
