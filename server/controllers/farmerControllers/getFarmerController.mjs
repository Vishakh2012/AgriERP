import Farmer from "../../models/farmerModel/farmerModel.mjs";
export default async function getFarmerController(req, res, next) {
  try {
    const farmer_id = req.params.farmerId;
    const fpoid = req.user.fpoId;
    let farmer_doc;
    if (farmer_id) {
      farmer_doc = await Farmer.findOne({ farmerId: farmer_id, fpoId: fpoid });
    } else {
      farmer_doc = await Farmer.find({ fpoId: fpoid});
    }
    if (farmer_doc) {
      return res.status(200).send({ data: farmer_doc });
    }
    return res.status(404).send("farmer ID not found");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
