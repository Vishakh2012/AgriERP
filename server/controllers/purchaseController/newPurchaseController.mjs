import purchaseModel from "../../models/puchaseModel/puchaseModel.mjs";
import productModel from "../../models/productModel/productModel.mjs";
import farmerModel from "../../models/farmerModel/farmerModel.mjs";
import taxModel from "../../models/taxModel/taxModel.mjs";

export default async function newPurchaseController(req, res, next) {
  try {
    const {
      billNumber,
      farmerId,
      GSTIN,
      purchaseDetails,
      totalAmount,
      purchaseDate,
    } = req.body;
    const fpoId = req.user.fpoId;

    // Check if farmer is part of the FPO
    const farmer = await farmerModel.findOne({
      fpoId: fpoId,
      farmerId: farmerId,
    });
    if (!farmer) {
      return res.status(404).send({ message: "Farmer is not part of the FPO" });
    }

    // Create a new purchase document
    const purchase = new purchaseModel({
      fpoId,
      billNumber,
      farmerId,
      GSTIN,
      purchaseDetails,
      totalAmount,
      purchaseDate,
    });
    if (!purchase) {
      return res.status(400).send({ message: "Bad request" });
    }

    // Prepare bulk operations for updating product stock and creating new products if necessary
    const bulkOperations = purchaseDetails.map(async (purchaseDetail) => {
      const { itemCode, name, quantity, rate, HSN } = purchaseDetail;

      // Update product stock
      let product = await productModel.findOne({ fpoId: fpoId, HSN: HSN });
      // If product was created, set additional fields
      if (!product) {
        console.log("creating product");
        const tax_doc = await taxModel.findOne({ HSN: HSN });
        if (tax_doc) {
          product = await productModel.create({
            tax: tax_doc,
            fpoId: fpoId,
            price: rate,
            currentStock: quantity,
            name: name,
            itemCode: itemCode,
            HSN: HSN,
          });
        } else {
          return res
            .status(404)
            .send({ message: "no tax is found", product: product });
        }
      } else {
        product.currentStock += quantity;
        await product.save();
      }
      return product;
    });

    // Execute bulk operations to update product stock and create new products if necessary
    const products = await Promise.all(bulkOperations);

    // Save the purchase document
    await purchase.save();
    return res.status(201).send({ purchase: purchase, product: products });
  } catch (error) {
    return res.status(500).send({ message: error.message, code: error.code });
  }
}
