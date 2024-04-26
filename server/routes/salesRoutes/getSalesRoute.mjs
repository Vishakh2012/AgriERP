import express from "express";
import getSalesController from "../../controllers/salesControllers/getSalesController.mjs";

const route = express.Router();

route.get("/:billNo", getSalesController);
route.get("", getSalesController);

export default route;
