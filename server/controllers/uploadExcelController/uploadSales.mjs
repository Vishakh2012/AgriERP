import salesModel from "../../models/salesModel/salesModel.mjs";
import xlsx from "xlsx";
export default async function uploadSalesController(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded" });
    }
    const mapping = {
      billNumber: "billNo",
      saleDate: "saleDate",
      discount: "totalDiscount",
      finalAmount: "finalAmount",
      mop: "mop",
      totalAmount: "totalAmountWithoutDiscount",
    };
    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    const mappedData = [];
    for (const row of data) {
      const mappedRow = {};
      for (const excelField of Object.keys(row)) {
        const schemaField = mapping[excelField];
        if (schemaField === "saleDate") {
          // Convert Excel date to JavaScript Date object
          const excelDate = row[excelField];
          const jsDate = excelDateToJSDate(excelDate);
          mappedRow[schemaField] = jsDate;
        } else if (schemaField) {
          mappedRow[schemaField] = row[excelField];
        }
      }
      mappedRow.fpoId = req.user.fpoId;
      mappedData.push(mappedRow);
    }
    console.log(mappedData);
    // Upload products
    try {
      const sales = await salesModel.insertMany(mappedData);
      if (sales) {
        return res
          .status(201)
          .send({ message: "sales are uploaded successfully" });
      }
    } catch (e) {
      return res.status(400).send({ message: e.message });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Internal server error" });
  }
}

function excelDateToJSDate(excelDate) {
  const excelReferenceDate = new Date("1899-12-30");
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const milliseconds = excelDate * millisecondsInDay;
  const jsDate = new Date(excelReferenceDate.getTime() + milliseconds);
  return jsDate;
}
