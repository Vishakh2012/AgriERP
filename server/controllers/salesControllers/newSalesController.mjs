import productModel from "../../models/productModel/productModel.mjs";
import salesModel from "../../models/salesModel/salesModel.mjs";

export default async function newSalesController(req, res, next) {
  try {
    const { itemSold } = req.body;
    const fpoId = req.user.fpoId;

    const sales = new salesModel({ fpoId: fpoId, ...req.body });
    if (!sales) {
      return res.status(400).send({ message: "Cannot create sales" });
    }

    // Array to store errors encountered during processing
    const errors = [];

    // Process each item sold
    await Promise.all(
      itemSold.map(async (item) => {
        const { itemCode, quantity } = item;
        const product = await productModel.findOne({
          itemCode: itemCode,
          fpoId: fpoId,
        });
        if (!product) {
          errors.push(`Product with ID ${itemCode} not found`);
          return; // Skip further processing for this item
        }
        product.currentStock -= quantity;
        await product.save();
      })
    );

    // Check if any errors occurred during processing
    if (errors.length > 0) {
      return res.status(404).send({ errors });
    }

    // Save the sales
    const savedSales = await sales.save();

    // Send response with saved sales
    return res.status(201).send({ sales: savedSales });
  } catch (error) {
    console.error("Error creating sales:", error);
      console.log(req)
    return res.status(500).send({ message: "Internal server error" });
  }
}
