import express from "express";
import newSalesController from "../../controllers/salesControllers/newSalesController.mjs";
const route = express.Router();

route.post("/:farmerId", newSalesController);
route.post("/merchantId", newSalesController);
route.post("", newSalesController);

export default route;
