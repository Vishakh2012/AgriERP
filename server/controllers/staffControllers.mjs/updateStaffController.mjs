import Staff from "../../models/staffModel/staffModel.mjs";
export default async function updateStaffContoller(req, res, next) {
  try {
    const staffId = req.params.staffId;
    const staff_details = req.body;
    const updated_doc = await Staff.findOneAndUpdate(
      { staffId: staffId },
      { ...staff_details },
      { new: true }
    );
    if (updated_doc) {
      return res.status(200).send({ message: updated_doc });
    }
    return res.status(404).send({ message: "staff not found" });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
