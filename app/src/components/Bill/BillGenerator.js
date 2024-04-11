export const generatePrintableBill = (billNo, customerName, mobileNumber, billDetails, grandTotal, totalPrice, totalDiscount) => {
  const nonEmptyKeys = Object.keys(billDetails[0]).filter(key => billDetails[0][key] !== '');
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month}-${day}`;

  // Create a string variable to store the complete HTML content
  // let htmlContent = `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //         <meta charset="UTF-8">
  //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //         <title>Printable Bill</title>
  //         <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  //     </head>
  //     <body class="font-sans">
  //         <div id="pdfContent" class="container mx-auto p-4 ">
  //             <div class="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto">
  //                 <div class="flex items-center justify-between mb-8">
  //                     <div class="flex items-center">
  //                         <img class="h-8 w-8 mr-2" src="https://tailwindflex.com/public/images/logos/favicon-32x32.png" alt="Logo" />
  //                         <div class="text-gray-700 font-semibold text-lg">Your Company Name</div>
  //                     </div>
  //                     <div class="text-gray-700">
  //                         <div class="font-bold text-xl mb-2">INVOICE</div>
  //                         <div class="text-sm">Date: ${formattedDate}</div>
  //                         <div class="text-sm">Invoice No: ${billNo}</div>
  //                     </div>
  //                 </div>
  //                 <div class="border-b-2 border-gray-300 pb-8 mb-8">
  //                     <h2 class="text-2xl font-bold mb-4">Bill To:</h2>
  //                     <div class="text-gray-700 mb-2">${customerName}</div>
  //                     <div class="text-gray-700 mb-2">${mobileNumber}</div>
  //                 </div>
  //                 <table class="w-full text-left mb-8">
  //                     <thead>
  //                         <tr>
  //                             ${nonEmptyKeys.map((key) => (
  //                                 `<th class="text-gray-700 font-bold uppercase py-2">${key}</th>`
  //                             )).join('')}
  //                         </tr>
  //                     </thead>
  //                     <tbody>
  //                         ${billDetails.map((item, index) => (
  //                             `<tr key=${index}>
  //                                 ${nonEmptyKeys.map((key) => (
  //                                     `<td class="py-4 text-gray-700">${item[key]}</td>`
  //                                 )).join('')}
  //                             </tr>`
  //                         )).join('')}
  //                     </tbody>
  //                 </table>
  //                 <div class="flex justify-end mb-8">
  //                     <div class="text-gray-700 mr-2">Total Price:</div>
  //                     <div class="text-gray-700">${totalPrice}</div>
  //                 </div>
  //                 <div class="text-right mb-8">
  //                     <div class="text-gray-700 mr-2">Total Discount:</div>
  //                     <div class="text-gray-700">${totalDiscount}</div>
  //                 </div>
  //                 <div class="flex justify-end mb-8">
  //                     <div class="text-gray-700 mr-2">Total:</div>
  //                     <div class="text-gray-700 font-bold text-xl">${grandTotal}</div>
  //                 </div>
  //                 <div class="border-t-2 border-gray-300 pt-8 mb-8">
  //                     <div class="text-gray-700 mb-2">Payment is due within 30 days. Late payments are subject to fees.</div>
  //                     <div class="text-gray-700 mb-2">Please make checks payable to Your Company Name and mail to:</div>
  //                     <div class="text-gray-700">123 Main St., Anytown, USA 12345</div>
  //                 </div>
  //             </div>
  //         </div>
  //     </body>
  //     </html>
  // `;

  let htmlContent = `
  <html>
    <head>
      <title>Printable Bill</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <style>
    /* Custom CSS to make table headers and content smaller */
    table {
      font-size: 12px; /* Reduce font size of table */
      border-collapse: collapse; /* Collapse table borders */
      width: 100%; /* Set table width to 100% */
    }
    th, td {
      border: 1px solid #e2e8f0; /* Add border to table cells */
      padding: 6px; /* Add padding to table cells */
    }
  </style>
    <body class="font-sans">
      <div class="container mx-auto p-4 something">
        <div class="mb-8 ">
        <h2 class="text-2xl font-bold mb-4">Printable Bill</h2>
          <h3 class="font-semibold">Customer Details:</h3>
          <p><span class="font-semibold">Bill No:</span> ${billNo}</p>
          <p><span class="font-semibold">Customer Name:</span> ${customerName}</p>
          <p><span class="font-semibold">Mobile Number:</span> ${mobileNumber}</p>
        </div>
        <div class="mb-8">
          <h3 class="font-semibold">Product Details:</h3>
          <table class="w-full border-collapse">
            <thead>
              <tr>
                ${nonEmptyKeys.map((key) => (
                  `<th class="py-2 px-4 border">${key}</th>`
                )).join('')}
              </tr>
            </thead>
            <tbody>
              ${billDetails.map((item, index) => (
                `<tr key=${index}>
                  ${nonEmptyKeys.map((key) => (
                    `<td class="py-2 px-4 border">${item[key]}</td>`
                  )).join('')}
                </tr>`
              )).join('')}
            </tbody>
          </table>
        </div>
        <div>
          <h3 class="font-semibold">Total:</h3>
          <p>Total: ${grandTotal}</p>
          <p>Total Rate: ${totalPrice}</p>
          <p>Total Discount Amount: ${totalDiscount}</p>
        </div>
      </div>
    </body>
  </html>
`;

  // Return the complete HTML content
  return htmlContent;
};
