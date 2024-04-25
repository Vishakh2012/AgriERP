import Staff from "../../models/staffModel/staffModel.mjs";
export default async function newStaffController(req, res, next) {
  try {
    const fpoId = req.user.fpoId;
    const staff_details = req.body;
    const staff = await Staff.create({ fpoId, ...staff_details });
    if (staff) {
      return res.status(201).send({ data: staff });
    }
    return res.status(400).send({ message: "unable to create staff" });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
