import Product from "../../models/productModel/productModel.mjs";

export default async function deleteProductController(req, res, next) {
  try {
    const item = req.params.item;
    const fpoId = req.user.fpoId;
    const product_doc = await Product.deleteOne({
      itemCode: item,
      fpoId: fpoId,
    });
    if (product_doc) {
      return res
        .status(200)
        .send({ message: "product is deleted successfully" });
    }
    return res.status(404).send("product is not found");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
