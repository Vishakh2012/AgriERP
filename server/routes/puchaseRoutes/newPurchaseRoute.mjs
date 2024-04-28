import express from "express"
import newPurchaseController from "../../controllers/purchaseController/newPurchaseController.mjs";
const route = express.Router()

export default route.post("", newPurchaseController);
