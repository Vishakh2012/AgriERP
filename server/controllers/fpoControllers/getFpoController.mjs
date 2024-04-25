import FPO from "../../models/fpoModel/fpoModel.mjs";

export default async function getFpoController(req, res, next) {
  try {
    const fpoId = req.user.fpoId;
    const fpo = await FPO.findOne({ _id: fpoId });
    if (!fpo) {
      return res.status(404).send({ message: "no fpo found" });
    } else {
      return res.status(200).send(fpo);
    }
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
