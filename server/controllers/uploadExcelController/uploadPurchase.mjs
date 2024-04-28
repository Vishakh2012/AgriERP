import purchaseModel from "../../schemas/purchaseSchema/purchaseSchema.mjs";

export default async function uploadPurchase(req, res, next) {
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
      mappedData.push(mappedRow);
    }
    console.log(mappedData);
    // Upload products
    // try {
    //   const product = await productModel.insertMany(mappedData);
    //   if (product) {
    //     return res
    //       .status(201)
    //       .send({ message: "Products are uploaded successfully" });
    //   }
    // } catch (e) {
    //   return res.status(400).send({ message: e.message });
    // }
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Internal server error" });
  }
}
