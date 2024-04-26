import xlsx from "xlsx";
import taxModel from "../models/taxModel/taxModel.mjs";

const data1 = await taxModel.create({ HSN: "128", IGST: 10, SGST: 10, CGST: 0 })
console.log(data1)
// async function insertTaxData(columnMapping, excelData, model) {
//   let mappedList = [];
//   excelData.forEach(async (row) => {
//     let mappedRow = {};
//     for (const [excelcol, mongocol] of Object.entries(columnMapping)) {
//       mappedRow[mongocol] = row[excelcol];
//     }
//     await model.create(mappedRow);
//     mappedList.push(mappedRow);
//     mappedRow = {};
//   });
//   console.log(mappedList);
// }

// const columnMapping = {
//   hsn: "HSN",
//   cgst: "CGST",
//   igst: "IGST",
//   sgst: "SGST",
// };

// const workbook = xlsx.readFile("../data/tax.xlsx");
// const sheetName = workbook.SheetNames[0];
// console.log(sheetName);
// const excelData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// insertTaxData(columnMapping, excelData, taxModel);
