import express from "express"
import getProductController from "../../controllers/productContollers/getProductController.mjs"
const route = express.Router()

route.get("/:item", getProductController)
route.get("", getProductController)

export default route
