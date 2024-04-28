import Farmer from "../../models/farmerModel/farmerModel.mjs";
export default async function deleteFarmerController(req, res, next) {
  try {
    const farmer_id = req.params.farmerId;
    console.log(farmer_id);

    const farmer_doc = await Farmer.deleteOne({ farmerId: farmer_id });
    if (farmer_doc) {
      return res.status(200).send("farmer is deleted successfully");
    }
    return res.status(404).send("farmer ID is not found");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
