import uploadPurchaseController from "../../controllers/uploadControllers/uploadPurchaseController.mjs";
import express from "express";
const router = express.Router();
export default router.post("", uploadPurchaseController);
