import React, { useState } from 'react';
import GenerateBillDialog from './MOP_DialogBox'; // Assuming the correct path to your GenerateBillDialog component
import handleGenerateBillClick from './handleGenerateBillClick';
import handleSubmitPayment from './handleSubmitPayment';
import generatePrintableBill from '../Bill/BillGenerator'; // Import the function from its file
import generatePDF from '../Bill/pdfGenerator'; // Import the function from its file

const generateBill = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [salesBillData, setSalesBillData] = useState<any[]>([]);

  return (
    <div className="p-4 bg-white border-t flex justify-end">
      {openDialog ? (
        <GenerateBillDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          onSubmit={(selectedPayment: string) => handleSubmitPayment(setSelectedPayment, setOpenDialog, salesBillData, generatePrintableBill, generatePDF)}
        />
      ) : (
        <button
          onClick={() => handleGenerateBillClick(setOpenDialog)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto"
        >
          Generate Bill
        </button>
      )}
    </div>
  );
};

export default generateBill;
