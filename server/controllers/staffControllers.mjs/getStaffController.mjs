import Staff from "../../models/staffModel/staffModel.mjs";
export default async function getStaffContoller(req, res, next) {
  try {
    const id = req.params.staffId;
    const fpoId = req.user.fpoId;
    let staff_doc;
    if (id) {
      staff_doc = await Staff.findOne({ staffId: id, fpoId: fpoId });
    } else {
      staff_doc = await Staff.find({ fpoId: fpoId });
    }
    if (staff_doc) {
      return res.status(200).send({ data: staff_doc });
    }
    return res.status(404).send({ message: "staff not found" });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
