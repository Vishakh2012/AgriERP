import express from "express"
import updateStaffContoller from "../../controllers/staffControllers.mjs/updateStaffController.mjs"
const route = express.Router()

export default route.put("/:staffId", updateStaffContoller)
