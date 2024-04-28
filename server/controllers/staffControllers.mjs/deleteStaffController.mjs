import Staff from "../../models/staffModel/staffModel.mjs";

export default async function deleteStaffContoller(req, res, next) {
  try {
    const staffId = req.params.staffId;
    const staff_doc = await Staff.findOneAndDelete({ staffId: staffId });
    if (staff_doc) {
      return res.status(200).send({ message: staff_doc });
    }
    return res.status(404).send({ message: "staff not found" });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
