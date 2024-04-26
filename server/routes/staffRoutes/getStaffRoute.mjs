import express from "express"
import getStaffContoller from "../../controllers/staffControllers.mjs/getStaffController.mjs"
const route = express.Router()

route.get("/:staffId", getStaffContoller)
route.get("", getStaffContoller)

export default route
