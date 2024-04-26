import express from "express"
import newStaffController from "../../controllers/staffControllers.mjs/newStaffController.mjs"
const route = express.Router()

export default route.post("", newStaffController)
