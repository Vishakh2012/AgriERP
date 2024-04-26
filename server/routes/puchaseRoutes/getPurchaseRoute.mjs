import express from "express"
import getPurchaseController from "../../controllers/purchaseController/getPurchaseController.mjs";
const route = express.Router()

route.get(":/billNo", getPurchaseController);
route.get("", getPurchaseController)

export default route