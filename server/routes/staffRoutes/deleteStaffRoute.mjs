import express from "express"
import deleteStaffContoller from "../../controllers/staffControllers.mjs/deleteStaffController.mjs"
const route = express.Router()

export default route.delete("/:staffId", deleteStaffContoller)
