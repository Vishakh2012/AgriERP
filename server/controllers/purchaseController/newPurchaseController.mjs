import puchaseModel from "../../models/puchaseModel/puchaseModel.mjs";
import productModel from "../../models/productModel/productModel.mjs";
import taxModel from "../../models/taxModel/taxModel.mjs";

export default async function newPurchaseController(req, res, next) {
  try {
    const fpoId = req.user.fpoId; // Assuming req.user.fpoId contains the FPO ID
    const data = req.body;

    // Create the purchase document
    const purchase = new puchaseModel({ fpoId: fpoId, ...data });
    if (!purchase) {
      return res.status(400).send({ message: "Purchase cannot be created" });
    }

    // Extract purchase details from the request body
    const purchaseDetails = data.purchaseDetails;

    // Prepare bulk operations for updating product stock and creating new products if necessary
    const bulkOperations = purchaseDetails.map(async (purchaseDetail) => {
      const { itemCode, name, quantity, rate, HSN } = purchaseDetail;

      // Update product stock
      let product = await productModel.findOneAndUpdate(
        { fpoId, itemCode },
        { $inc: { currentStock: quantity } },
        { upsert: true, new: true }
      );

      // If product was created, set additional fields
      if (!product) {
        console.log("Creating product");
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
            .send({ message: "No tax found", product: product });
        }
      }
      return product;
    });

    const products = await Promise.all(bulkOperations);
    await purchase.save();
    return res.status(201).send({ purchase: purchase, product: products });
  } catch (error) {
    console.error("Error creating purchase:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
}
