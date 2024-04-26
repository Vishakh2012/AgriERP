import Farmer from "../../models/farmerModel/farmerModel.mjs"
export default async function updateFarmerController(req, res, next) {
  try {
    const farmer_id = req.params.farmerId;
    console.log(farmer_id);
    const farmer_details = req.body;
    const farmer_doc = await Farmer.findOneAndUpdate(
      { farmerId: farmer_id },
      { ...farmer_details },
      { new: true }
    );

    if (farmer_doc) {
      return res.status(200).send({ data: farmer_doc });
    }
    return res.status(404).send({ message: "cannot find id" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
