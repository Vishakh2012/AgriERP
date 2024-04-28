import farmerModel from "../../models/farmerModel/farmerModel.mjs";
export default async function getShareHolder(req, res, next) {
  try {
    const fpoId = req.user.fpoId;
    const farmer_doc = await farmerModel.find({
      fpoId: fpoId,
      shareHolder: "yes",
    });
    if (farmer_doc) {
      return res.status(200).send({ data: farmer_doc });
    }
    return res.status(404).send("no purchase found");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
