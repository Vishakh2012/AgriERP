import express from "express"
import updateProductController from "../../controllers/productContollers/updateProductController.mjs"
const route = express.Router()

export default route.put("/:item", updateProductController)
