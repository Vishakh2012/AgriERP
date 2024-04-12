import jsPDF from 'jspdf';

export const generatePDF = (htmlContent) => {
  // Create a new jsPDF instance
  const doc = new jsPDF('p', 'mm', 'a4');

  // Add the HTML content directly to the PDF with scaling
  doc.html(htmlContent, {
    callback: function(doc) {
      doc.save("output.pdf");
    },
    x: 10,
    y: 10,
    html2canvas:{scale:0.1},
  });
};
