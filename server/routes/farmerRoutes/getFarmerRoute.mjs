import express from "express"
import getFarmerController from "../../controllers/farmerControllers/getFarmerController.mjs";
const route = express.Router();

route.get("/:farmerId", getFarmerController)
route.get("", getFarmerController)

export default route;