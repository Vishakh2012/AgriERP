import Product from "../../models/productModel/productModel.mjs";

export default async function updateProductController(req, res, next) {
  try {
    const item = req.params.item;
    const fpoid = req.user.fpoId;
    const product_details = req.body;
    const product_doc = await Product.findOneAndUpdate(
      { fpoId: fpoid, itemCode: item },
      { ...product_details },
      { new: true }
    );

    if (product_doc) {
      return res.status(200).send({ data: product_doc });
    }
    return res.status(404).send({ message: "cannot find product" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
