import express from "express"
import deleteFarmerController from "../../controllers/farmerControllers/deleteFarmerController.mjs";
const route = express.Router();

export default route.delete("/:farmerId", deleteFarmerController);