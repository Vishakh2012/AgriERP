import express from "express"
import deleteProductController from "../../controllers/productContollers/deleteProductController.mjs"
const route = express.Router()

export default route.delete("/:item", deleteProductController)
