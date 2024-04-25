import express from "express"
import newFarmerController from "../../controllers/farmerControllers/newFarmer.mjs";
const route = express.Router();

export default route.post("", newFarmerController);