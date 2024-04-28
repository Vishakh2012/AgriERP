import xlsx from "xlsx";
import taxModel from "../../models/taxModel/taxModel.mjs";
import productModel from "../../models/productModel/productModel.mjs";

export default async function uploadProductController(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded" });
    }

    const mapping = req.body;
    if (!mapping) {
      return res.status(400).send({ message: "Mapping not provided" });
    }

    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    const existingProductCount = await productModel.countDocuments();
    if (existingProductCount === 0) {
      // If no products exist, start the counter from 1
      var counter = 1;
    } else {
      // Otherwise, increment the counter by 1
      var counter = existingProductCount + 1;
    }

    const mappedData = [];
    for (const row of data) {
      const mappedRow = {};
      for (const excelField of Object.keys(row)) {
        const schemaField = mapping[excelField];
        if (schemaField) {
          mappedRow[schemaField] = row[excelField];
        }
      }
      mappedRow.fpoId = req.user.fpoId;
      const prefix = mappedRow.name.slice(0, 5).toUpperCase();
      const paddedCounter = counter.toString().padStart(3, "0");
      const productId = `${prefix}${paddedCounter}`;
      mappedRow.itemCode = productId;

      // Increment the counter for the next product
      counter++;

      // Get tax for the product
      const tax = await taxModel.findOne({ HSN: row.hsn });
      if (!tax) {
        return res
          .status(400)
          .send({ message: `Tax info not found for the product ${row.name}` });
      }
      mappedRow.tax = [tax];
      mappedData.push(mappedRow);
    }

    // Upload products
    try {
      const product = await productModel.insertMany(mappedData);
      if (product) {
        return res
          .status(201)
          .send({ message: "Products are uploaded successfully" });
      }
    } catch (e) {
      return res.status(400).send({ message: e.message });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Internal server error" });
  }
}
