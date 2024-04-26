import salesModel from "../../models/salesModel/salesModel.mjs";

export default async function getSalesController(req, res, next) {
  try {
    const billNo = req.params.billNo;
    const fpoId = req.user.fpoId;
    let sales_doc;
    if (billNo) {
      sales_doc = await salesModel.findOne({
        fpoId: fpoId,
        billNo: billNo,
      });
    } else {
      sales_doc = await salesModel.find({
        fpoId: fpoId,
      });
    }
    if (sales_doc) {
      return res.status(200).send({ data: sales_doc });
    }
    return res.status(404).send("no products found");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
