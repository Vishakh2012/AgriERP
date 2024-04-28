import express from "express"
import getFpoController from "../../controllers/fpoControllers/getFpoController.mjs"
const route = express.Router()

export default route.get("", getFpoController)
