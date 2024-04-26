import express from "express"
import newProductController from "../../controllers/productContollers/newProductController.mjs"
const route = express.Router()

export default route.post("", newProductController)
