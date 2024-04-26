import express from "express"
import updateFpoContoller from "../../controllers/fpoControllers/updateFpoController.mjs"
const route = express.Router()

export default route.put("", updateFpoContoller)