import express from "express"
import updateFarmerController from "../../controllers/farmerControllers/updateFarmerController.mjs";
const route = express.Router();

export default route.put("/:farmerId", updateFarmerController);