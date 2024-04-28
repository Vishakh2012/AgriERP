import xlsx from "xlsx";
import taxModel from "../models/taxModel/taxModel.mjs";
import path from "path";
import fs from "fs";

async function insertTaxData(columnMapping, model) {
  const workbook = xlsx.readFile("../data/tax.xlsx");
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const json_data = xlsx.utils.sheet_to_json(worksheet);
  console.log(json_data);

  let mapped_result = [];
  json_data.forEach((data) => {
    let mapped_json = {};
    for (const [excelIndex, schemaField] of Object.entries(columnMapping)) {
      // Check if the schemaField is 'hsn', then convert it to a string
      mapped_json[schemaField] = schemaField === 'HSN' ? String(data[excelIndex]) : data[excelIndex];
    }
    mapped_result.push(mapped_json);
  });
  // Convert mapped_result to JSON string
  const mapped_result_json = JSON.stringify(mapped_result, null, 2);

  console.log(mapped_result_json);
  const outputFilePath = "../data/tax.json";
  fs.writeFile(outputFilePath, mapped_result_json, (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("JSON file has been written successfully.");
    }
  });
}

const columnMapping = {
  hsn: "HSN",
  cgst: "CGST",
  igst: "IGST",
  sgst: "SGST",
};
insertTaxData(columnMapping, taxModel);
