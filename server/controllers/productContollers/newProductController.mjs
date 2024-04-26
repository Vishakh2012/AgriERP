import Product from "../../models/productModel/productModel.mjs";
import TaxModel from "../../models/taxModel/taxModel.mjs";

export default async function newProductController(req, res, next) {
  try {
    const fpo_id = req.user.fpoId;
    const product_details = req.body;

    const tax_doc = await TaxModel.findOne({
      HSN: product_details.HSN,
    });
    console.log(fpo_id, product_details.HSN, tax_doc);

    if (tax_doc) {
      const product_doc = await Product.create({
        fpoId: fpo_id,
        ...product_details,
        tax: tax_doc,
      });

      if (product_doc) {
        return res.status(201).send({ data: product_doc });
      }
    } else {
      return res
        .status(404)
        .send({ message: "no tax is fond for this HSN CODE!" });
    }
    return res.status(400).send({ message: "unable to create product" });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}
