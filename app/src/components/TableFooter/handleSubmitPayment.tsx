const handleSubmitPayment = (
    setSelectedPayment: React.Dispatch<React.SetStateAction<string>>,
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>,
    salesBillData: any[], // Adjust type as needed
    generatePrintableBill: Function, // Adjust type as needed
    generatePDF: Function // Adjust type as needed
  ) => (paymentMode: string, customerName: string, billNo: string, mobileNumber: string, grandTotal: number, totalPrice: number, totalDiscount: number) => {
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
  
  export default handleSubmitPayment;
  