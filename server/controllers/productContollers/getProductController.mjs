import Product from "../../models/productModel/productModel.mjs";

export default async function getProductController(req, res, next) {
  try {
    const item_code = req.params.item;
    const fpoId = req.user.fpoId;
    let product_doc;
    if (item_code) {
      product_doc = await Product.findOne({
        fpoId: fpoId,
        itemCode: item_code,
      });
    } else {
      product_doc = await Product.find({
        fpoId: fpoId,
      });
    }
    if (product_doc) {
      return res.status(200).send({ data: product_doc });
    }
    return res.status(404).send("no products found");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
