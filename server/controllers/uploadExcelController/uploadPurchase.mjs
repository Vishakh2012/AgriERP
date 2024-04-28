import puchaseModel from "../../models/puchaseModel/puchaseModel.mjs";
import xlsx from "xlsx";

export default async function uploadPurchase(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded" });
    }

    const mapping = {
      billNo: "billNumber",
      purchaseDate: "purchaseDate",
      discount: "discount",
      finalAmount: "finalAmount",
      totalAmount: "totalAmount",
    };

    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    const mappedData = [];
    for (const row of data) {
      const mappedRow = {};
      for (const excelField of Object.keys(row)) {
        const schemaField = mapping[excelField];
        if (schemaField === "purchaseDate") {
          // Convert Excel date to JavaScript Date object
          const excelDate = row[excelField];
          const jsDate = excelDateToJSDate(excelDate);
          if (jsDate instanceof Date && !isNaN(jsDate)) {
            mappedRow[schemaField] = jsDate;
          } else {
            throw new Error("Invalid date format in Excel file");
          }
        } else if (schemaField) {
          mappedRow[schemaField] = row[excelField];
        }
      }
      mappedRow.fpoId = req.user.fpoId;
      mappedData.push(mappedRow);
    }

    // Upload mapped purchase data to the database
    try {
      const purchases = await puchaseModel.insertMany(mappedData);
      if (purchases) {
        return res
          .status(201)
          .send({ message: "Purchases uploaded successfully" });
      }
    } catch (error) {
      console.error("Error uploading purchases:", error);
      return res.status(400).send({ message: error.message });
    }
  } catch (error) {
    console.error("Error processing upload:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
}

// Function to convert Excel date to JavaScript Date object
function excelDateToJSDate(excelDate) {
  const excelReferenceDate = new Date("1899-12-30");
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const milliseconds = excelDate * millisecondsInDay;
  const jsDate = new Date(excelReferenceDate.getTime() + milliseconds);
  return jsDate;
}
