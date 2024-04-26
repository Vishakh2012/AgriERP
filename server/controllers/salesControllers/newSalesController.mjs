import productModel from "../../models/productModel/productModel.mjs";
import salesModel from "../../models/salesModel/salesModel.mjs";

export default async function newSalesController(req, res, next) {
  try {
    const { HSN, itemCode, itemSold } = req.body;
    const fpoId = req.user.fpoId;

    const sales = new salesModel({ fpoId: fpoId, ...req.body });
    if (!sales) {
      return res.status(400).send({ message: "cannot create sales" });
    }

    //then save sales Schems
    const savedSales = await sales.save();
    await Promise.all(
      itemSold.map(async (item) => {
        const { HSN, itemCode, quantity } = item;
        const product = await productModel.findOne({
          HSN: HSN,
          fpoId: fpoId,
        });
        if (!product) {
          return res
            .status(404)
            .send({ message: `product of id : ${HSN} not found` });
        }
        product.currentStock -= quantity;
        product.save();
      })
    );

    return res.status(201).send({ sales: savedSales });
  } catch (error) {
    console.error("Error creating sales:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
}
