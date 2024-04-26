import FPO from "../../models/fpoModel/fpoModel.mjs";

export default async function updateFpoContoller(req, res, next) {
  try {
    const { regYear, district, state, balance } = req.body;
    const fpoId = req.user.fpoId;
    const updatedFpo = await FPO.findOneAndUpdate(
      { _id: fpoId },
      { regYear, district, state, balance },
      { new: true }
    );

    if (!updatedFpo) {
      return res.status(400).send({ message: "Cannot create fpo" });
    } else {
      return res
        .status(200)
        .send({ message: "Updated FPO successfully", data: updatedFpo });
    }
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
