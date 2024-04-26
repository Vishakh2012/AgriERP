import Purchase from "../../models/puchaseModel/puchaseModel.mjs";

export default async function getPurchaseController(req, res, next) {
  try {
    const billNo = req.params.billNo;
    const fpoId = req.user.fpoId;
    let purchase_doc;
    if (billNo) {
      purchase_doc = await Purchase.findOne({
        fpoId: fpoId,
        billNumber: billNo,
      });
    } else {
      purchase_doc = await Purchase.find({
        fpoId: fpoId,
      });
    }
    if (purchase_doc) {
      return res.status(200).send({ data: purchase_doc });
    }
    return res.status(404).send("no purchase found");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
