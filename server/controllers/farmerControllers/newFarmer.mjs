import Farmer from "../../models/farmerModel/farmerModel.mjs";

export default async function newFarmerController(req, res, next) {
  try {
    const farmer_details = req.body;
    const fpoId = req.user.fpoId;
    const farmer_doc = await Farmer.create({ fpoId: fpoId, ...farmer_details });
    if (farmer_doc) {
      return res.status(201).send({ data: farmer_doc });
    }
    return res.status(400).send({ message: "cannot create farmer" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
