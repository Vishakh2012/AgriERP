import uploadFarmerController from "../../controllers/uploadControllers/uploadFarmerController.mjs";
import express from "express";
const router = express.Router();
export default router.post("", uploadFarmerController);
